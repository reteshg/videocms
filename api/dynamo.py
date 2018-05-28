import boto3
import json
import decimal
from boto3.dynamodb.conditions import Key


# Helper class to convert a DynamoDB item to JSON.
class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            if o % 1 > 0:
                return float(o)
            else:
                return int(o)
        return super(DecimalEncoder, self).default(o)


class Dynamo:
    dynamodb = None
    dynamodb_table = None
    dynamodb_region = 'ap-south-1'

    def __init__(self, table_name):
        self.dynamodb = boto3.resource('dynamodb', self.dynamodb_region)
        self.dynamodb_table = table_name

    def insert_item(self, dataset):
        table = self.dynamodb.Table(self.dynamodb_table)
        try:
            response = table.put_item(Item=dataset)
        except:
            response = {'error': 'Some error occurred in inserting item.'}

        return json.dumps(response, indent=4, cls=DecimalEncoder)

    def update_item(self, key_item, update_item):
        table = self.dynamodb.Table(self.dynamodb_table)
        response = []
        ue = ''
        eav = {}
        ean = {}
        count = 1

        try:
            for k, v in update_item.items():
                if k == 'name':
                    k = '#n'
                    ean['#n'] = "name"

                arr_key = ':val' + str(count)
                if count == 1:
                    ue += 'SET ' + k + ' = ' + arr_key
                else:
                    ue += ', ' + k + ' = ' + arr_key

                eav[arr_key] = v
                count = count + 1

            response.append(
                table.update_item(
                    Key=key_item,
                    UpdateExpression=ue,
                    ExpressionAttributeNames=ean,
                    ExpressionAttributeValues=eav,
                    ReturnValues="ALL_NEW"
                )
            )
        except:
            response = {'error': 'Some error occurred in updating item.'}

        return json.dumps(response, indent=4, cls=DecimalEncoder)

    def delete_item(self, key_item):
        # Delete an item (row) in table from its primary key.

        table = self.dynamodb.Table(self.dynamodb_table)
        try:
            response = table.delete_item(Key=key_item)
        except:
            response = {'error':'Some error occurred in deleting item.'}

        return json.dumps(response, indent=4, cls=DecimalEncoder)

    def get_item(self, key_item):
        """Return item read by primary key."""
        table = self.dynamodb.Table(self.dynamodb_table)
        try:
            response = table.get_item(Key=key_item)

        except:
            response = {'error':'Record not found with provided primary key.'}

        return json.dumps(response, indent=4, cls=DecimalEncoder)

    def scan_table(self, filter_key=None, filter_value=None):
        """Perform a scan operation on table.
        Can specify filter_key (col name) and its value to be filtered.
        """
        table = self.dynamodb.Table(self.dynamodb_table)

        if filter_key and filter_value:
            filtering_exp = Key(filter_key).eq(filter_value)
            response = table.scan(FilterExpression=filtering_exp)
        else:
            response = table.scan()

        return response

    def query_table(self, filter_key=None, filter_value=None):
        """
        Perform a query operation on the table.
        Can specify filter_key (col name) and its value to be filtered.
        """
        table = self.dynamodb.Table(self.dynamodb_table)

        if filter_key and filter_value:
            filtering_exp = Key(filter_key).eq(filter_value)
            response = table.query(KeyConditionExpression=filtering_exp)
        else:
            response = table.query()

        return response


    def ddb_scan(self, fe, pe, ean, eav):
        #fe = Key('year').between(1950, 1959);
        #pe = "#yr, title, info.rating"
        # Expression Attribute Names for Projection Expression only.
        #ean = {"#yr": "year", }
        #esk = None

        table = self.dynamodb.Table(self.dynamodb_table)
        response = table.scan(
            FilterExpression=fe,
            ProjectionExpression=pe,
            ExpressionAttributeNames=ean,
            ExpressionAttributeValues=eav
        )

        return response
#ddb_client = Dynamo('sso_user')
#ddb_client.insert_item({'test_id':'1a1s1d2','f_name':'M N John 3','contact':'12312122'})
#print(ddb_client.update_item({"userId": '3dec43eded3dde3edwxswedswds'},{'name':'test1','gender':'M'}))
#print(ddb_client.delete_item({'test_id':'1a1s1d2f2gg'}))
#print(ddb_client.get_item({'test_id':'1a1s1d2'}))