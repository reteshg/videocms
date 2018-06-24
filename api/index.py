from flask import Flask, abort, request, jsonify, flash, redirect, url_for
from werkzeug.utils import secure_filename
from flask_cors import CORS
from datetime import datetime


import os

from api.models.video import Video
from api.models.user import User
import pymysql.cursors


UPLOAD_FOLDER = '../uploads/'
ALLOWED_EXTENSIONS = set(['mp4', 'png', 'jpg', 'jpeg'])


app = Flask(__name__)
cors = CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

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

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload', methods=['POST'])
def upload_file():

    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            return jsonify({"status": "200", "error": "No input file specified!"})
            #return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            return jsonify({"status": "200", "error": "No file selected."})
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            today = datetime.today()
            #need to get company id/name, setting it manhattan by defaults
            company_code = "manhattan"
            local_upload_folder = app.config['UPLOAD_FOLDER'] + company_code + "/" + today.strftime('%Y') + "/" + today.strftime('%m') + "/" + today.strftime('%d')
            if not os.path.isdir(local_upload_folder):
                os.makedirs(local_upload_folder)

            file.save(os.path.join(local_upload_folder + "/", filename))
            return jsonify({"status": "200", "message": "File uploaded."})

    return jsonify({"status": "200", "error": "Illegal invocation."})


def change_dir(directory):
    if os.path.exists(directory) is False: # (or negate, whatever you prefer for readability)
        os.makedirs(directory)
    return

if __name__ == "__main__":
    app.run()
