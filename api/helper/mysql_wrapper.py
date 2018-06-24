import pymysql.cursors
import json


class Mysqldb:

    mysql_config = None

    def __init__(self, config_group):
        config = None
        with open('../api/config/config.json') as json_data_file:
            config = json.load(json_data_file)

        self.mysql_config = config[config_group]

    def query(self, sql):
        connection = pymysql.connect(host=self.mysql_config['host'],
                                     user=self.mysql_config['user'],
                                     password=self.mysql_config['password'],
                                     db=self.mysql_config['db'],
                                     charset='utf8mb4',
                                     cursorclass=pymysql.cursors.DictCursor)
        try:
            with connection.cursor() as cursor:
                cursor.execute(sql)
                result = cursor.fetchall()

        finally:
            connection.close()
            return result



#ddb_client = Mysqldb('videodb_mysql')
#print(ddb_client.query("SELECT * FROM user"))