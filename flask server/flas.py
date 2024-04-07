from flask import Flask, request, jsonify
import base64
from PIL import Image
from io import BytesIO
import numpy as np
import face_recognition
import cv2
import pymongo
app = Flask(__name__)
client = pymongo.MongoClient("mongodb+srv://Shivag:shivashiva@cluster0.mz5u2w1.mongodb.net/tweeter?retryWrites=true&w=majority")
db = client["image_database"]
collection = db["images"]
@app.route('/convert', methods=['POST'])
def convert_image():
    data = request.get_json()
    if 'image_base64' not in data:
        return jsonify({'error': 'Image data not provided'}), 400
    
    image_data = data['image_base64']
    try:
        image_bytes = base64.b64decode(image_data)
        image = Image.open(BytesIO(image_bytes))
        image.save('output.png', 'PNG')
        image_id = collection.insert_one({'image': image_data,"email":data["email"]}).inserted_id
        
        return jsonify({'success': True, 'message': 'Image converted and saved to MongoDB', 'image_id': str(image_id)}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/get_image', methods=['POST'])
def get_image():
    try:
        data = request.get_json()
        print(data)
        if not data or 'image_id' not in data:
            return jsonify({'error': 'Invalid request data'}), 400

        image_id = data["email"]
        # Retrieve image data from MongoDB
        image_data = collection.find_one({'email': image_id})
        print(image_data)
        if image_data:
            return jsonify({'success': True, 'image_base64': image_data['image']}), 200
        else:
            return jsonify({'error': 'Image not found'}), 404
    except Exception as e:
        # Log the error for debugging purposes
        print("Error:", str(e))
        return jsonify({'error': 'Internal Server Error'}), 500


def load_known_face():
    known_face_encoding = None

    # Retrieve known face data from MongoDB
    document = collection.find_one()
    if document:
        known_face_encoding = np.frombuffer(document['encoding'], dtype=np.float64)

    return known_face_encoding
def generate_face_encodings_from_base64(image_base64):
    try:
        # Decode the base64 image data
        image_bytes = base64.b64decode(image_base64)

        # Convert the image bytes to a numpy array
        nparr = np.frombuffer(image_bytes, np.uint8)

        # Decode the image using OpenCV
        image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        # Preprocess the image (optional)
        # Example: Convert to grayscale
        gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        # Find face locations in the image
        face_locations = face_recognition.face_locations(gray_image)

        if len(face_locations) > 0:
            # Extract face encodings
            face_encodings = face_recognition.face_encodings(image, face_locations)
            return face_encodings
        else:
            return {'error': 'No faces found in the provided image'}

    except Exception as e:
        return {'error': str(e)}

def compare_faces(image_data, known_face_encoding):
    # Convert the image data to numpy array
    nparr = np.frombuffer(image_data, np.uint8)
    frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Convert BGR to RGB
    rgb_frame = frame[:, :]

    # Find all the faces and face encodings in the image
    face_encodings = face_recognition.face_encodings(rgb_frame)

    match = False
    if len(face_encodings) > 0:
        # Compare face encodings
        match = face_recognition.compare_faces(known_face_encoding, face_encodings)

    return match

@app.route('/compare_faces', methods=['POST'])
def compare_faces_endpoint():
    # Retrieve image data from MongoDB
    data=request.get_json()
    print(data)
    image_data = collection.find_one({"email":data["email"]})['image']
    # Load known face encoding
    known_face_encoding = generate_face_encodings_from_base64(image_data)
    image=generate_face_encodings_from_base64(image_data)
    image_bytes = base64.b64decode(image_data)

    print(known_face_encoding,image_data)
    if known_face_encoding is None:
        return jsonify({'error': 'No known face found in the database'}), 404
    # Perform face comparison
    match = compare_faces(image_bytes, known_face_encoding[0])
    match_json = bool(match)
    return jsonify({'match': match_json}), 200

if __name__ == '__main__':
    app.run(debug=True,port=5000)