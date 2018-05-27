from flask import Flask, abort, request, jsonify
import json

from video import Video
from user import User
import pymysql.cursors



app = Flask(__name__)

@app.route('/', methods=['GET'])

@app.route('/user/login', methods=['GET','POST'])

@app.route('/user/create', methods=['GET', 'POST'])

@app.route('/video/create', methods=['GET', 'POST'])

def api():

    url_array = request.path.split('/')
    
    if len(url_array) >= 3:
        module_class = url_array[1]
        action = url_array[2] 
    else:
        return jsonify({"status": "200","message": "It works!"})

    #try: 
    result = getattr(globals()[module_class.capitalize()](), action)(request.get_json()) 
    return prepare_final_return_reuslt(result)
        
    '''except Exception as e:
		
		#print(e)
        return jsonify({"status": "200","error": "Illegal invocation."})'''



def prepare_final_return_reuslt(result):
    return jsonify({"status": "200", "result": result})

def validate_auth_parameters(post_obj):
    if 'apiKey' in post_obj and 'apiSecret' in post_obj and 'hash' in post_obj:
        return True
    else:
        return False

if __name__ == "__main__":
    app.run()
