# database.py
import sqlite3
from sqlite3 import Error

def create_connection():
    conn = None
    try:
        conn = sqlite3.connect('hostels.db')
        conn.row_factory = sqlite3.Row  # This enables column name access
        return conn
    except Error as e:
        print(e)

def create_table():
    sql_create_hostels_table = """ CREATE TABLE IF NOT EXISTS hostels (
                                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                                        name TEXT NOT NULL,
                                        description TEXT,
                                        price REAL,
                                        advance_amount REAL,
                                        distance_from_campus TEXT,
                                        contact_number TEXT,
                                        address TEXT,
                                        google_maps_link TEXT,
                                        image_path TEXT,
                                        amenities TEXT,
                                        nearby_facilities TEXT,
                                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                                    ); """
    
    conn = create_connection()
    if conn is not None:
        try:
            c = conn.cursor()
            c.execute(sql_create_hostels_table)
            conn.commit()
        except Error as e:
            print(e)
        finally:
            conn.close()
    else:
        print("Error! Cannot create the database connection.")

if __name__ == "__main__":
    create_table()
