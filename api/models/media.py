import os
import boto3
import json
import random
import string
from datetime import datetime

class Media:

    aws_config= None

    def __init__(self, config_group):
        config = None
        with open('../api/config/config.json') as json_data_file:
            config = json.load(json_data_file)

        self.aws_config = config[config_group]

    def upload_to_s3(self, localpath, filename, bucket, company_code):
        s3_client = boto3.client(
            's3',
            'ap-south-1',
            # Hard coded strings as credentials, not recommended.
            aws_access_key_id=self.aws_config['api_key'],
            aws_secret_access_key=self.aws_config['secret']
        )
        #s3_client = boto3.resource('s3')
        today = datetime.today()
        s3_key = company_code + "/" + today.strftime('%Y') + "/" + today.strftime('%m') + "/" + today.strftime('%d')
        s3_file_name = self.get_random_string() + today.strftime("%Y%m%d%H%M%S") + os.path.splitext(filename)[1]
        # Upload a new file
        data = open(localpath+'/'+filename, 'rb')
        s3_client.upload_file(localpath+'/'+filename, bucket, s3_key+'/'+s3_file_name, ExtraArgs={'ACL': 'public-read'})
        return bucket + '/' + s3_key + '/' + s3_file_name

    def get_random_string(self):
        return ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(20))
