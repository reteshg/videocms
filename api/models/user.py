import json
#import MySQLdb 
from hashlib import md5
#from config import Manhattanconfig
#from filename import classname
from api.helper.mysql_wrapper import Mysqldb
import pymysql.cursors
#db = MySQLdb.connect(host="localhost", user="root", passwd="root", db="vodcms")
connection = pymysql.connect(host="localhost",
                             user="root",
                             password="@bp$123#",
                             db="vodcms",
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
#cur = db.cursor()
cur =  connection.cursor() 
class User:
	
	error = None
	host = None
	user = None
	pwd = None
	db = None

	def __init__(self):
		#config = Manhattanconfig()
		#self.host = config['dashboarddb']['host'] 
		return
        
	def login(self,req_post):
		 
		username = req_post['username']
		password = req_post['password']
		 
		if(username !="" and password !=""):
			cur.execute("SELECT COUNT(1) FROM user WHERE user_name = %s", username) # CHECKS IF USERNAME EXSIST
			row = cur.fetchone()
			while row is not None:
				#print(row["COUNT(1)"])
				if (row["COUNT(1)"]==1):
					cur.execute("SELECT user_pwd,user_id,fname,lname FROM user WHERE user_name = %s;", username) # FETCH THE HASHED PASSWORD	
					for row in cur.fetchall():
						 
						md5hashstr = md5(password.encode())
						#print(md5hashstr)
						hexdi = md5hashstr.hexdigest()
						if hexdi == row["user_pwd"]: 
							uid = row["user_id"] 
							resp_data = self.getuser(uid) 
							return resp_data 
						else:
							errormsg = {"error": "Invalid Credential"}
							return errormsg
				else:
					errormsg = {"error": "not exist!"}
					return errormsg
			'''if cur.fetchone()[0]:
				cur.execute("SELECT user_pwd,user_id,fname,lname FROM user WHERE user_name = %s;", username) # FETCH THE HASHED PASSWORD
				for row in cur.fetchall():
					if md5(password).hexdigest() == row[0]: 
						uid = row[1] 
						resp_data = self.getuser(uid) 
						return resp_data 
					else:
						errormsg = {"error": "Invalid Credential"}
						return errormsg
			else:
				errormsg = {"error": "not exist!"}
				return errormsg'''
		
		    
	def getuser(self,userid):
		uid = userid		  
		cur.execute("SELECT fname, lname, email, company_id, channel_ids, user_type_id, status, fb_handle, twt_handle, insta_handle, profile_pic, bio FROM user WHERE user_id = %s;", [uid])
		#cur.execute("SELECT * FROM user WHERE user_id = %s;", [uid]) 
		for row in cur.fetchall(): 
			resp_record = {"firstname": row["fname"],"lastname": row["lname"],"email": row["email"]}
			return resp_record
	
	def create(self,post_obj):
		
		#print post_obj.username
		#data = json.loads(post_obj)
		t = post_obj
		
		#db_obj = Mysqldb(Manhattanconfig['dashboarddb']['host'])
		a = Mysqldb.query("asasas","vvvvvvvvvvvvv");
		return {"response":t} 
		#print(data.password)
		#print post_obj
		#cur.execute("SELECT fname, lname, email, company_id, channel_ids, user_type_id, status, fb_handle, twt_handle, insta_handle, profile_pic, bio FROM user WHERE user_id = %s;", [uid])
		#uid = userid		  
		#cur.execute("SELECT fname, lname, email, company_id, channel_ids, user_type_id, status, fb_handle, twt_handle, insta_handle, profile_pic, bio FROM user WHERE user_id = %s;", [uid])
		#cur.execute("SELECT * FROM user WHERE user_id = %s;", [uid]) 
		#for row in cur.fetchall(): 
		#	resp_record = {"firstname": row[0],"lastname": row[1],"email": row[2]}
		#	return resp_record
	
	'''def validate_post_params(self, post_obj):
        required_params_list = ['fname', 'lname', 'contactno']
        flag = 0
        missing_param = None
        for key in required_params_list:
            if key in post_obj:
                continue
            else:
                flag = 1
                missing_param = key
                break

        if flag == 1:
            self.error = {"Error": "Missing required parameter: "+missing_param}
            return False
        else:
            return True'''
