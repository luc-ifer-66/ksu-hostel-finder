# gui.py
import tkinter as tk
from tkinter import ttk, messagebox, filedialog
import sqlite3
from database import create_connection

class HostelManager:
    def __init__(self, root):
        self.root = root
        self.root.title("Hostel Management System")
        self.root.geometry("800x600")
        
        # Create notebook for tabs
        self.notebook = ttk.Notebook(root)
        self.notebook.pack(fill='both', expand=True, padx=10, pady=10)
        
        # Add hostel tab
        self.add_frame = ttk.Frame(self.notebook)
        self.notebook.add(self.add_frame, text="Add Hostel")
        
        # Update hostel tab
        self.update_frame = ttk.Frame(self.notebook)
        self.notebook.add(self.update_frame, text="Update Hostel")
        
        self.create_add_hostel_form()
        self.create_update_hostel_form()
        
    def create_add_hostel_form(self):
        # Name
        ttk.Label(self.add_frame, text="Hostel Name:").grid(row=0, column=0, sticky='w', padx=5, pady=5)
        self.name = ttk.Entry(self.add_frame, width=40)
        self.name.grid(row=0, column=1, padx=5, pady=5)
        
        # Description
        ttk.Label(self.add_frame, text="Description:").grid(row=1, column=0, sticky='w', padx=5, pady=5)
        self.description = tk.Text(self.add_frame, width=40, height=4)
        self.description.grid(row=1, column=1, padx=5, pady=5)
        
        # Price
        ttk.Label(self.add_frame, text="Price (₹/month):").grid(row=2, column=0, sticky='w', padx=5, pady=5)
        self.price = ttk.Entry(self.add_frame, width=40)
        self.price.grid(row=2, column=1, padx=5, pady=5)
        
        # Advance Amount
        ttk.Label(self.add_frame, text="Advance Amount (₹):").grid(row=3, column=0, sticky='w', padx=5, pady=5)
        self.advance_amount = ttk.Entry(self.add_frame, width=40)
        self.advance_amount.grid(row=3, column=1, padx=5, pady=5)
        
        # Distance from campus
        ttk.Label(self.add_frame, text="Distance from Campus:").grid(row=4, column=0, sticky='w', padx=5, pady=5)
        self.distance = ttk.Entry(self.add_frame, width=40)
        self.distance.grid(row=4, column=1, padx=5, pady=5)
        
        # Contact Number
        ttk.Label(self.add_frame, text="Contact Number:").grid(row=5, column=0, sticky='w', padx=5, pady=5)
        self.contact = ttk.Entry(self.add_frame, width=40)
        self.contact.grid(row=5, column=1, padx=5, pady=5)
        
        # Address
        ttk.Label(self.add_frame, text="Address:").grid(row=6, column=0, sticky='w', padx=5, pady=5)
        self.address = ttk.Entry(self.add_frame, width=40)
        self.address.grid(row=6, column=1, padx=5, pady=5)
        
        # Google Maps Link
        ttk.Label(self.add_frame, text="Google Maps Link:").grid(row=7, column=0, sticky='w', padx=5, pady=5)
        self.maps_link = ttk.Entry(self.add_frame, width=40)
        self.maps_link.grid(row=7, column=1, padx=5, pady=5)
        
        # Amenities
        ttk.Label(self.add_frame, text="Amenities (comma separated):").grid(row=8, column=0, sticky='w', padx=5, pady=5)
        self.amenities = ttk.Entry(self.add_frame, width=40)
        self.amenities.grid(row=8, column=1, padx=5, pady=5)
        
        # Nearby Facilities
        ttk.Label(self.add_frame, text="Nearby Facilities (comma separated):").grid(row=9, column=0, sticky='w', padx=5, pady=5)
        self.nearby_facilities = ttk.Entry(self.add_frame, width=40)
        self.nearby_facilities.grid(row=9, column=1, padx=5, pady=5)
        
        # Image Path
        ttk.Label(self.add_frame, text="Image Path:").grid(row=10, column=0, sticky='w', padx=5, pady=5)
        self.image_path = ttk.Entry(self.add_frame, width=30)
        self.image_path.grid(row=10, column=1, padx=5, pady=5, sticky='w')
        ttk.Button(self.add_frame, text="Browse", command=self.browse_image).grid(row=10, column=2, padx=5, pady=5)
        
        # Buttons
        ttk.Button(self.add_frame, text="Add Hostel", command=self.add_hostel).grid(row=11, column=0, padx=5, pady=20)
        ttk.Button(self.add_frame, text="Clear Form", command=self.clear_form).grid(row=11, column=1, padx=5, pady=20)
        
    def create_update_hostel_form(self):
        # Hostel selection
        ttk.Label(self.update_frame, text="Select Hostel:").grid(row=0, column=0, sticky='w', padx=5, pady=5)
        self.hostel_var = tk.StringVar()
        self.hostel_combo = ttk.Combobox(self.update_frame, textvariable=self.hostel_var, width=40)
        self.hostel_combo.grid(row=0, column=1, padx=5, pady=5)
        self.hostel_combo.bind('<<ComboboxSelected>>', self.on_hostel_select)
        
        ttk.Button(self.update_frame, text="Refresh List", command=self.refresh_hostel_list).grid(row=0, column=2, padx=5, pady=5)
        
        # Update form fields (similar to add form)
        self.create_update_fields()
        
        # Load hostels on startup
        self.refresh_hostel_list()
        
    def create_update_fields(self):
        # Similar fields as add form but for updating
        ttk.Label(self.update_frame, text="Hostel Name:").grid(row=1, column=0, sticky='w', padx=5, pady=5)
        self.update_name = ttk.Entry(self.update_frame, width=40)
        self.update_name.grid(row=1, column=1, padx=5, pady=5)
        
        # Add other fields similarly...
        # (For brevity, showing key fields)
        
        ttk.Button(self.update_frame, text="Update Hostel", command=self.update_hostel).grid(row=12, column=0, padx=5, pady=20)
        ttk.Button(self.update_frame, text="Delete Hostel", command=self.delete_hostel).grid(row=12, column=1, padx=5, pady=20)
    
    def browse_image(self):
        filename = filedialog.askopenfilename(
            title="Select Image",
            filetypes=[("Image files", "*.jpg *.jpeg *.png *.gif")]
        )
        if filename:
            self.image_path.delete(0, tk.END)
            self.image_path.insert(0, filename)
    
    def add_hostel(self):
        try:
            conn = create_connection()
            cursor = conn.cursor()
            
            cursor.execute('''INSERT INTO hostels(name, description, price, advance_amount, 
                             distance_from_campus, contact_number, address, google_maps_link,
                             image_path, amenities, nearby_facilities)
                             VALUES(?,?,?,?,?,?,?,?,?,?,?)''', 
                          (self.name.get(),
                           self.description.get("1.0", tk.END).strip(),
                           float(self.price.get()) if self.price.get() else 0,
                           float(self.advance_amount.get()) if self.advance_amount.get() else 0,
                           self.distance.get(),
                           self.contact.get(),
                           self.address.get(),
                           self.maps_link.get(),
                           self.image_path.get(),
                           self.amenities.get(),
                           self.nearby_facilities.get()))
            
            conn.commit()
            conn.close()
            messagebox.showinfo("Success", "Hostel added successfully!")
            self.clear_form()
            
        except Exception as e:
            messagebox.showerror("Error", f"Error adding hostel: {str(e)}")
    
    def clear_form(self):
        # Clear all form fields
        for widget in [self.name, self.price, self.advance_amount, self.distance, 
                      self.contact, self.address, self.maps_link, self.amenities, 
                      self.nearby_facilities, self.image_path]:
            widget.delete(0, tk.END)
        self.description.delete("1.0", tk.END)
    
    def refresh_hostel_list(self):
        conn = create_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, name FROM hostels")
        hostels = cursor.fetchall()
        conn.close()
        
        hostel_list = [f"{hostel['id']} - {hostel['name']}" for hostel in hostels]
        self.hostel_combo['values'] = hostel_list
    
    def on_hostel_select(self, event):
        # Load selected hostel data for updating
        pass
    
    def update_hostel(self):
        # Implement update logic
        pass
    
    def delete_hostel(self):
        # Implement delete logic
        pass

if __name__ == "__main__":
    root = tk.Tk()
    app = HostelManager(root)
    root.mainloop()
