# app.py
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from database import create_connection
import sqlite3

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend integration

@app.route('/api/hostels', methods=['GET'])
def get_hostels():
    conn = create_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM hostels")
    hostels = cursor.fetchall()
    conn.close()
    
    hostels_list = []
    for hostel in hostels:
        hostels_list.append({
            'id': hostel['id'],
            'name': hostel['name'],
            'price': hostel['price'],
            'distance_from_campus': hostel['distance_from_campus'],
            'image_path': hostel['image_path']
        })
    
    return jsonify(hostels_list)

@app.route('/api/hostels/<int:hostel_id>', methods=['GET'])
def get_hostel(hostel_id):
    conn = create_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM hostels WHERE id=?", (hostel_id,))
    hostel = cursor.fetchone()
    conn.close()
    
    if hostel:
        hostel_dict = {
            'id': hostel['id'],
            'name': hostel['name'],
            'description': hostel['description'],
            'price': hostel['price'],
            'advance_amount': hostel['advance_amount'],
            'distance_from_campus': hostel['distance_from_campus'],
            'contact_number': hostel['contact_number'],
            'address': hostel['address'],
            'google_maps_link': hostel['google_maps_link'],
            'image_path': hostel['image_path'],
            'amenities': hostel['amenities'].split(',') if hostel['amenities'] else [],
            'nearby_facilities': hostel['nearby_facilities'].split(',') if hostel['nearby_facilities'] else []
        }
        return jsonify(hostel_dict)
    else:
        return jsonify({'error': 'Hostel not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
