import json
#import MySQLdb 
from hashlib import md5
#db = MySQLdb.connect(host="localhost", user="root", passwd="root", db="vodcms")
#cur = db.cursor()

class Video:

    collection = None

    def __init__(self):
        self.collection = 'videos'
		
    def get_collection_name(self):
        return self.collection
    
    def create(self, post):
        t = post["username"]
        return {"usrname":t}
         
    def upload(self, post, file):
        t = post["username"]
        return {"usrname": t}