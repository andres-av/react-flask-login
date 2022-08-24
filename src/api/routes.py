"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required , get_jwt_identity

from datetime import timedelta
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/login', methods=['POST', 'GET'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    user = User.query.filter_by(email=email).first()

    if user:
        if password != user.password:
            return jsonify({"msg" : "contraseña inválida"}), 401
        else:
            time = timedelta(minutes = 1)
            access_token = create_access_token(identity=email, expires_delta = time)
        return jsonify({"access_token":access_token , "duration": time.total_seconds()})
    
    else: 
        return jsonify({"msg" : "email inválido"}), 401


    response_body = {
        "message": "login"
    }
    return jsonify(response_body), 200

@api.route('/privada', methods=['GET'])
@jwt_required()
def protegida():
    identidad = get_jwt_identity()
    return jsonify({"msg" : "acceso correcto", "identity":identidad}), 200


@api.route('/register', methods=['POST'])
def register():
    email = request.json.get("email")
    password = request.json.get("password")

    userRegister = User.query.filter_by(email=email).first()

    if userRegister: 
        return jsonify({"msg": "usuario ya registrado"}), 401
    else:
        new_email= User(email=email , password=password , is_active = True)
        db.session.add(new_email)
        db.session.commit()
        return jsonify({"msg" : "registrado correctamente"}),200

    response_body = {
        "message": "login"
    }
    return jsonify(response_body), 200
