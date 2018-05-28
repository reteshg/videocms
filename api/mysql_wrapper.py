import pymysql.cursors

class Mysqldb:
	
	error = None
	host = None
	user = None
	pwd = None
	db = None
	
	def __init__(self, host, user, pwd, db):
		self.host = host
		self.user = user
		self.pwd = pwd
		self.db = db
		        
	def query(self,sql):
		connection = pymysql.connect(host="localhost",
                             user="root",
                             password="root",
                             db="vodcms",
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
		try:
			with connection.cursor() as cursor:
				# Create a new record
				sql = "SELECT user_pwd,user_id,fname,lname FROM user WHERE user_name = 'rajendra'"
				cursor.execute(sql)

				# connection is not autocommit by default. So you must commit to save
				# your changes.
				result = cursor.fetchone()
				print(result)
			#with connection.cursor() as cursor:
				# Read a single record
				#sql = "SELECT `id`, `password` FROM `users` WHERE `email`=%s"
				#cursor.execute(sql, ('webmaster@python.org',))
				#result = cursor.fetchone()
				#print(result)
		finally:
				connection.close()
				return {"response":"try try try2222"}
		 
