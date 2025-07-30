/* Shared data ----------------------------------------------------------- */
const AMENITIES = {
  wifi: { name: "Wi-Fi" },
  food: { name: "Food" },
  housekeeping: { name: "Housekeeping" },
};

const FACILITIES = {
  bus_stop: { name: "Bus Stop" },
  atm: { name: "ATM" },
  hospital: { name: "Hospital" },
  hospitals: { name: "Hospital" },
  groceries: { name: "Groceries" },
  restaurant: { name: "Restaurant" },
};

//  ----------  CSV → JS  (24 hostels)  ----------
const fallbackHostels = [
  {
    "Document ID": "h1",
    "advance": 5000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "9061416983",
    "createdAt": 0,
    "description": "Vacancy: 10",
    "distance": 0.45,
    "foodPrice": 3000,
    "gender": "boys",
    "id": "h1",
    "image": "https://placehold.co/600x400?text=Guha+Mens+Hostel",
    "images": [],
    "location": "Opp. Jith Restaurant",
    "mapLink": "https://maps.app.goo.gl/hzjFbk2kS3Yze4hx9",
    "name": "Guha Mens Hostel",
    "nearbyFacilities": "[{distance: 0.16, code: \"bu...}, {code: \"atm\", distance: 0....}, {code: \"hospital\", distanc...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": 2750,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 10
  },
  {
    "Document ID": "h10",
    "advance": 10000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "9995740977",
    "createdAt": 0,
    "description": "Vacancy: 52",
    "distance": 0.65,
    "foodPrice": 0,
    "gender": "girls",
    "id": "h10",
    "image": "https://placehold.co/600x400?text=Amritha",
    "images": [],
    "location": "Ambadi Nagar Lane 2",
    "mapLink": "https://maps.app.goo.gl/x5JXLEsKVxVy7Fig8",
    "name": "Amritha",
    "nearbyFacilities": "[{distance: 0.1, code: \"bus...}, {code: \"atm\", distance: 0....}, {code: \"hospital\", distanc...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": 8000,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 52
  },
  {
    "Document ID": "h11",
    "advance": 10000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "",
    "createdAt": 0,
    "description": "Vacancy: 20",
    "distance": 0.6,
    "foodPrice": 0,
    "gender": "girls",
    "id": "h11",
    "image": "https://placehold.co/600x400?text=Ammus",
    "images": [],
    "location": "Opp. CRP Nagar",
    "mapLink": "https://maps.app.goo.gl/7WCtubTc7HxzbUQG6",
    "name": "Ammus",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {distance: 0.75, code: \"at...}, {distance: 1, code: \"hospi...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": 7500,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 20
  },
  {
    "Document ID": "h12",
    "advance": 9000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "9497154582",
    "createdAt": 0,
    "description": "Vacancy: 5",
    "distance": 0.4,
    "foodPrice": 0,
    "gender": "girls",
    "id": "h12",
    "image": "https://placehold.co/600x400?text=Angels+Beth",
    "images": [],
    "location": "Opp. Electrical Gate",
    "mapLink": "https://maps.app.goo.gl/tEJke8QmE8fYVQu67",
    "name": "Angels Beth",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {code: \"atm\", distance: 0....}, {code: \"hospital\", distanc...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": "7500-9500",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 5
  },
  {
    "Document ID": "h13",
    "advance": 5000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "",
    "createdAt": 0,
    "description": "Vacancy: 4",
    "distance": 0.8,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h13",
    "image": "https://placehold.co/600x400?text=Karthika",
    "images": [],
    "location": "Thiru Nagar",
    "mapLink": "",
    "name": "Karthika",
    "nearbyFacilities": "[{distance: 0.8, code: \"bus...}, {distance: 0.75, code: \"at...}, {distance: 1, code: \"hospi...}, {distance: 0.305, code: \"g...}, \"restaurants\"]",
    "price": 3000,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 4
  },
  {
    "Document ID": "h14",
    "advance": 0,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "",
    "createdAt": 0,
    "description": "Vacancy: 2",
    "distance": 0.95,
    "foodPrice": 0,
    "gender": "girls",
    "id": "h14",
    "image": "https://placehold.co/600x400?text=Swapnakoodu",
    "images": [],
    "location": "CRP Nagar",
    "mapLink": "",
    "name": "Swapnakoodu",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {distance: 0.75, code: \"at...}, {code: \"hospital\", distanc...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": 4000,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 2
  },
  {
    "Document ID": "h15",
    "advance": 7000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "9446761911",
    "createdAt": 0,
    "description": "Vacancy: 4",
    "distance": 0.5,
    "foodPrice": 0,
    "gender": "girls",
    "id": "h15",
    "image": "https://placehold.co/600x400?text=PG",
    "images": [],
    "location": "Opp. Electrical Gate",
    "mapLink": "",
    "name": "PG",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {distance: 0.6, code: \"atm...}, {distance: 0.6, code: \"hos...}, {distance: 0.35, code: \"gr...}, \"restaurants\"]",
    "price": 3500,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": "July 29, 2025 at 11:05:44 PM UTC+5:30",
    "vacancies": 4
  },
  {
    "Document ID": "h16",
    "advance": 9000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "9446417167",
    "createdAt": 0,
    "description": "Vacancy: 11",
    "distance": 0.6,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h16",
    "image": "https://placehold.co/600x400?text=Pournami+PG",
    "images": [],
    "location": "Xylem",
    "mapLink": "",
    "name": "Pournami PG",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {code: \"atm\", distance: 0....}, {distance: 1.5, code: \"hos...}, {distance: 0.1, code: \"gro...}, \"restaurants\"]",
    "price": 3000,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 11
  },
  {
    "Document ID": "h17",
    "advance": 7000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "9495995937",
    "createdAt": 0,
    "description": "Vacancy: 6",
    "distance": 0.45,
    "foodPrice": 0,
    "gender": "girls",
    "id": "h17",
    "image": "https://placehold.co/600x400?text=Ragdeep",
    "images": [],
    "location": "Xylem",
    "mapLink": "https://maps.app.goo.gl/76HrAwscTFo682EM9",
    "name": "Ragdeep",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {distance: 0.15, code: \"at...}, {distance: 1, code: \"hospi...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": 3500,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 6
  },
  {
    "Document ID": "h18",
    "advance": 6000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "9526552037",
    "createdAt": 0,
    "description": "Vacancy: 5",
    "distance": 0.6,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h18",
    "image": "https://placehold.co/600x400?text=Shimsha",
    "images": [],
    "location": "Opp. Ashokan Chayakada",
    "mapLink": "https://maps.app.goo.gl/ectfSjZDrBMCw1RL9",
    "name": "Shimsha",
    "nearbyFacilities": "[{distance: 0.3, code: \"bus...}, {code: \"atm\", distance: 0....}, {distance: 1.4, code: \"hos...}, {distance: 0.32, code: \"gr...}, \"restaurants\"]",
    "price": 6000,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 5
  },
  {
    "Document ID": "h19",
    "advance": 5000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "7510954538",
    "createdAt": 0,
    "description": "Vacancy: 20",
    "distance": 0.375,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h19",
    "image": "https://placehold.co/600x400?text=Shivasai",
    "images": [],
    "location": "Bhagat Singh Nagar",
    "mapLink": "https://maps.app.goo.gl/FnxvYthaVv6UyLiN8",
    "name": "Shivasai",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {code: \"atm\", distance: 0....}, {distance: 1.4, code: \"hos...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": "2750-4250",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 20
  },
  {
    "Document ID": "h2",
    "advance": 7000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "9847131533",
    "createdAt": 0,
    "description": "Vacancy: 12",
    "distance": 0.5,
    "foodPrice": 3750,
    "gender": "boys",
    "id": "h2",
    "image": "https://placehold.co/600x400?text=Amala+Gardens",
    "images": [],
    "location": "Xylem",
    "mapLink": "https://maps.app.goo.gl/WrqB79gmXD13efXd9",
    "name": "Amala Gardens",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {distance: 0.15, code: \"at...}, {distance: 1.5, code: \"hos...}, {distance: 0.1, code: \"gro...}, \"restaurants\"]",
    "price": 3500,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 12
  },
  {
    "Document ID": "h20",
    "advance": 10000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "8281166260",
    "createdAt": 0,
    "description": "Vacancy: 25",
    "distance": 0.45,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h20",
    "image": "https://placehold.co/600x400?text=Murugans+Hostel",
    "images": [],
    "location": "Bhagat Singh Nagar",
    "mapLink": "",
    "name": "Murugans Hostel",
    "nearbyFacilities": "[{distance: 0.3, code: \"bus...}, {code: \"atm\", distance: 0....}, {distance: 1.4, code: \"hos...}, {distance: 0.1, code: \"gro...}, \"restaurants\"]",
    "price": "3500-4000",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 25
  },
  {
    "Document ID": "h21",
    "advance": 5000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "9497688950",
    "createdAt": 0,
    "description": "Vacancy: 8",
    "distance": 0.55,
    "foodPrice": 0,
    "gender": "girls",
    "id": "h21",
    "image": "https://placehold.co/600x400?text=Gokulam+PG",
    "images": [],
    "location": "Xylem",
    "mapLink": "https://maps.app.goo.gl/JSSBZmJkMvmvXdr17",
    "name": "Gokulam PG",
    "nearbyFacilities": "[{distance: 0.15, code: \"bu...}, {distance: 0.2, code: \"atm...}, {code: \"hospital\", distanc...}, {distance: 0.15, code: \"gr...}, \"restaurants\"]",
    "price": 5600,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 8
  },
  {
    "Document ID": "h22",
    "advance": 5000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "9249731397",
    "createdAt": 0,
    "description": "Vacancy: 46",
    "distance": 0.05,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h22",
    "image": "https://placehold.co/600x400?text=Al+Jazeera",
    "images": [],
    "location": "College front",
    "mapLink": "https://maps.app.goo.gl/Fb3G9yXCdG6oonsZA",
    "name": "Al Jazeera",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {code: \"atm\", distance: 0....}, {code: \"hospital\", distanc...}, {distance: 0.025, code: \"g...}, \"restaurants\"]",
    "price": "2000-2300",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 46
  },
  {
    "Document ID": "h23",
    "advance": 5000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "9446566673",
    "createdAt": 0,
    "description": "Vacancy: 35",
    "distance": 0.05,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h23",
    "image": "https://placehold.co/600x400?text=Ideal",
    "images": [],
    "location": "College front",
    "mapLink": "https://maps.app.goo.gl/LcpAZSzxTN6PN82q9",
    "name": "Ideal",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {code: \"atm\", distance: 0....}, {distance: 1, code: \"hospi...}, {distance: 0.025, code: \"g...}, \"restaurants\"]",
    "price": "4000-5000",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 35
  },
  {
    "Document ID": "h24",
    "advance": 10000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "9961005327",
    "createdAt": 0,
    "description": "Vacancy: 16",
    "distance": 0.4,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h24",
    "image": "https://placehold.co/600x400?text=Chuzhali",
    "images": [],
    "location": "Bhagat Singh Nagar",
    "mapLink": "https://maps.app.goo.gl/L5ZtepYrJWL1bvn39",
    "name": "Chuzhali",
    "nearbyFacilities": "[{distance: 0.3, code: \"bus...}, {code: \"atm\", distance: 0....}, {code: \"hospital\", distanc...}, {distance: 0.1, code: \"gro...}, \"restaurants\"]",
    "price": "3000-4000",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 16
  },
  {
    "Document ID": "h25",
    "advance": 5000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "7907626676",
    "createdAt": "2025-06-28T12:34:19.274Z",
    "description": "Vacancy: 7",
    "distance": 0.5,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h25",
    "image": "https://placehold.co/600x400?text=Sabitha",
    "images": [],
    "location": "Thirunagar",
    "mapLink": "",
    "name": "Sabitha",
    "nearbyFacilities": "[{distance: 0.55, code: \"bu...}, {distance: 0.8, code: \"atm...}, {distance: 1.3, code: \"hos...}, {distance: 0.4, code: \"gro...}, \"restaurants\"]",
    "price": "3000",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": "2025-06-28T12:34:19.274Z",
    "vacancies": 7
  },
  {
    "Document ID": "h26",
    "advance": 8000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "9400597773",
    "createdAt": "2025-06-28T12:36:33.103Z",
    "description": "Vacancy: 6",
    "distance": 0.6,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h26",
    "image": "https://placehold.co/600x400?text=Mithila",
    "images": [],
    "location": "Thirunagar",
    "mapLink": "",
    "name": "Mithila",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {code: \"atm\", distance: 0....}, {code: \"hospital\", distanc...}, {distance: 0.4, code: \"gro...}, \"restaurants\"]",
    "price": "4000",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": "2025-06-28T12:36:33.103Z",
    "vacancies": 6
  },
  {
    "Document ID": "h27",
    "advance": 5000,
    "amenities": [
      "wifi",
      "food",
      "housekeeping"
    ],
    "contact": "9778135924",
    "createdAt": "2025-06-28T12:42:45.269Z",
    "description": "Vacancy: 14",
    "distance": 0.4,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h27",
    "image": "https://placehold.co/600x400?text=Jayalakshmi",
    "images": [],
    "location": "Opp. Ashokante Chayakada",
    "mapLink": "https://maps.app.goo.gl/89cX5phdkAMm4nir9",
    "name": "Jayalakshmi",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {distance: 0.25, code: \"at...}, {code: \"hospital\", distanc...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": "6800-7000",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": "2025-06-28T12:42:45.269Z",
    "vacancies": 14
  },
  {
    "Document ID": "h28",
    "advance": 7000,
    "amenities": [
      "wifi",
      "housekeeping"
    ],
    "contact": "9526568869",
    "createdAt": "2025-06-28T12:46:42.927Z",
    "description": "Vacancy: 5",
    "distance": 0.7,
    "foodPrice": 0,
    "gender": "girls",
    "id": "h28",
    "image": "https://placehold.co/600x400?text=Upasana",
    "images": [],
    "location": "CRP Nagar",
    "mapLink": "",
    "name": "Upasana",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {distance: 0.65, code: \"at...}, {code: \"hospital\", distanc...}, {distance: 0.5, code: \"gro...}]",
    "price": "7000",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": "2025-06-28T12:46:42.927Z",
    "vacancies": 5
  },
  {
    "Document ID": "h29",
    "advance": 7000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "9947831124",
    "createdAt": "2025-06-28T12:47:49.815Z",
    "description": "Vacancy: 3",
    "distance": 0.7,
    "foodPrice": 0,
    "gender": "girls",
    "id": "h29",
    "image": "https://placehold.co/600x400?text=Nandhana%20Bhavan",
    "images": [],
    "location": "CRP Nagar",
    "mapLink": "",
    "name": "Nandhana Bhavan",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {distance: 0.65, code: \"at...}, {distance: 1.8, code: \"hos...}, {distance: 0.5, code: \"gro...}]",
    "price": "7000",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": "2025-06-28T12:47:49.815Z",
    "vacancies": 3
  },
  {
    "Document ID": "h3",
    "advance": 5000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "7994221662",
    "createdAt": 0,
    "description": "Vacancy: 8",
    "distance": 0.65,
    "foodPrice": 3750,
    "gender": "boys",
    "id": "h3",
    "image": "https://placehold.co/600x400?text=Aradhana+PG",
    "images": [],
    "location": "Xylem",
    "mapLink": "https://maps.app.goo.gl/xxK8aAcrjZWHc9tZ9",
    "name": "Aradhana PG",
    "nearbyFacilities": "[{distance: 0.15, code: \"bu...}, {distance: 0.15, code: \"at...}, {distance: 1, code: \"hospi...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": 3000,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 8
  },
  {
    "Document ID": "h30",
    "advance": 7000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "9446660136",
    "createdAt": "2025-06-28T12:50:38.403Z",
    "description": "Vacancy: 17",
    "distance": 0.8,
    "foodPrice": 3000,
    "gender": "boys",
    "id": "h30",
    "image": "https://placehold.co/600x400?text=Usha",
    "images": [],
    "location": "CRP Nagar",
    "mapLink": "",
    "name": "Usha",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {code: \"atm\", distance: 0....}, {code: \"hospital\", distanc...}, {distance: 0.39, code: \"gr...}, \"restaurants\"]",
    "price": "3500",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": "2025-06-28T12:50:38.403Z",
    "vacancies": 17
  },
  {
    "Document ID": "h31",
    "advance": 8000,
    "amenities": [
      "wifi",
      "food",
      "housekeeping"
    ],
    "contact": "8848908844",
    "createdAt": "2025-06-28T12:52:38.778Z",
    "description": "Vacancy: 5",
    "distance": 0.7,
    "foodPrice": 3000,
    "gender": "girls",
    "id": "h31",
    "image": "https://placehold.co/600x400?text=Royal%20Life",
    "images": [],
    "location": "CRP Nagar",
    "mapLink": "",
    "name": "Royal Life",
    "nearbyFacilities": "[{distance: 0.7, code: \"bus...}, {code: \"atm\", distance: 0....}, {distance: 1.55, code: \"ho...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": "4000-6000",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": "July 1, 2025 at 10:37:39 AM UTC+5:30",
    "vacancies": 5
  },
  {
    "Document ID": "h4",
    "advance": 5000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "",
    "createdAt": 0,
    "description": "Vacancy: 5",
    "distance": 0.45,
    "foodPrice": 3900,
    "gender": "girls",
    "id": "h4",
    "image": "https://placehold.co/600x400?text=Kurukshetra",
    "images": [],
    "location": "Opp. Ashokan's Chayakada",
    "mapLink": "",
    "name": "Kurukshetra",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {code: \"atm\", distance: 0....}, {code: \"hospital\", distanc...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": 3500,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 5
  },
  {
    "Document ID": "h5",
    "advance": 5000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "9207463580",
    "createdAt": 0,
    "description": "Vacancy: 5",
    "distance": 0.6,
    "foodPrice": 4500,
    "gender": "boys",
    "id": "h5",
    "image": "https://placehold.co/600x400?text=Poga",
    "images": [],
    "location": "Ambadi Nagar lane 2",
    "mapLink": "",
    "name": "Poga",
    "nearbyFacilities": "[{distance: 0.1, code: \"bus...}, {distance: 0.5, code: \"atm...}, {distance: 0.3, code: \"hos...}, {distance: 0.25, code: \"gr...}, \"restaurants\"]",
    "price": 2500,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 5
  },
  {
    "Document ID": "h6",
    "advance": 5000,
    "amenities": [
      "wifi",
      "housekeeping",
      "food"
    ],
    "contact": "7025458339",
    "createdAt": 0,
    "description": "Vacancy: 10",
    "distance": 0.12,
    "foodPrice": 3000,
    "gender": "boys",
    "id": "h6",
    "image": "https://placehold.co/600x400?text=Priyanka+Nilayam",
    "images": [],
    "location": "Opp. Post Office Gate",
    "mapLink": "https://maps.app.goo.gl/Bx5gjTds5HcoY9467",
    "name": "Priyanka Nilayam",
    "nearbyFacilities": "[{code: \"bus_stop\", distanc...}, {distance: 0.05, code: \"at...}, {distance: 1, code: \"hospi...}, {distance: 0.075, code: \"g...}, \"restaurants\"]",
    "price": 5000,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 10
  },
  {
    "Document ID": "h7",
    "advance": 6000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "8129292731",
    "createdAt": 0,
    "description": "Vacancy: 4",
    "distance": 0.5,
    "foodPrice": 3000,
    "gender": "boys",
    "id": "h7",
    "image": "https://placehold.co/600x400?text=Liwa+Hostel",
    "images": [],
    "location": "Xylem",
    "mapLink": "https://maps.app.goo.gl/QUgJfMQDSTU4JpBN8",
    "name": "Liwa Hostel",
    "nearbyFacilities": "[{distance: 0.09, code: \"bu...}, {distance: 0.15, code: \"at...}, {code: \"hospital\", distanc...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": 3000,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 4
  },
  {
    "Document ID": "h8",
    "advance": 6000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "",
    "createdAt": 0,
    "description": "Vacancy: 8",
    "distance": 0.9,
    "foodPrice": 0,
    "gender": "boys",
    "id": "h8",
    "image": "https://placehold.co/600x400?text=Kalyani",
    "images": [],
    "location": "CRP Nagar",
    "mapLink": "",
    "name": "Kalyani",
    "nearbyFacilities": "[{distance: 0.8, code: \"bus...}, {distance: 0.75, code: \"at...}, {distance: 1, code: \"hospi...}, {distance: 0.305, code: \"g...}, \"restaurants\"]",
    "price": 7000,
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 8
  },
  {
    "Document ID": "h9",
    "advance": 5000,
    "amenities": [
      "wifi",
      "food"
    ],
    "contact": "",
    "createdAt": 0,
    "description": "Vacancy: 5",
    "distance": 0.85,
    "foodPrice": 0,
    "gender": "girls",
    "id": "h9",
    "image": "https://placehold.co/600x400?text=Niva",
    "images": [],
    "location": "Thiru Nagar",
    "mapLink": "",
    "name": "Niva",
    "nearbyFacilities": "[{distance: 0.8, code: \"bus...}, {distance: 0.75, code: \"at...}, {distance: 1, code: \"hospi...}, {code: \"groceries\", distan...}, \"restaurants\"]",
    "price": "6500-7000",
    "rating": 0,
    "reviewCount": 0,
    "updatedAt": 0,
    "vacancies": 5
  }
];

// Utility to normalize contacts for any hostel object
function normalizeContacts(hostel) {
  if (Array.isArray(hostel.contacts)) {
    return hostel;
  }
  if (hostel.contact && typeof hostel.contact === 'string' && hostel.contact.trim()) {
    hostel.contacts = [{ name: "Contact", phone: hostel.contact.trim() }];
  } else {
    hostel.contacts = [];
  }
  delete hostel.contact;
  return hostel;
}

/* Hostels array populated at runtime ----------------------------------*/
let hostels = [];

/* Dataset loading (static) --------------------------------------------*/
async function fetchHostels() {
  if (hostels.length) return hostels; // already loaded

  try {
    // First, try to fetch from Firebase
    const querySnapshot = await window.firebase.getDocs(
      window.firebase.collection(window.db, "hostels")
    );
    
    if (!querySnapshot.empty) {
      hostels = querySnapshot.docs.map(doc => normalizeContacts({ id: doc.id, ...doc.data() }));
    } else {
      // If no hostels in Firebase, use fallback data and populate Firebase
      hostels = fallbackHostels.map(h => normalizeContacts({ ...h, id: h.id || h["Document ID"] }));
      // Add each hostel to Firebase
      for (const hostel of hostels) {
        await window.firebase.setDoc(
          window.firebase.doc(window.db, "hostels", hostel.id),
          hostel
        );
      }
    }
  } catch (error) {
    console.error("Error fetching hostels:", error);
    hostels = fallbackHostels.map(h => normalizeContacts({ ...h, id: h.id || h["Document ID"] })); // Use fallback on error
  }

  return hostels;
}

/* Utility helpers ------------------------------------------------------- */
function qs(selector, scope = document) {
  return scope.querySelector(selector);
}
function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}
function formatCurrency(amount) {
  const formatSingle = (num) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);

  // If numeric, just format directly
  if (typeof amount === "number") return formatSingle(amount);

  // If string (e.g., "6500-7000" or "6500 – 7000")
  if (typeof amount === "string") {
    const parts = amount.split(/\s*[-–]\s*/); // support hyphen/en-dash
    if (parts.length === 2) {
      const low = parseFloat(parts[0]);
      const high = parseFloat(parts[1]);
      if (!isNaN(low) && !isNaN(high)) {
        return `${formatSingle(low)} - ${formatSingle(high)}`;
      }
    }
    // Fallback: try to format as single number string
    const num = parseFloat(amount);
    if (!isNaN(num)) return formatSingle(num);
    return amount; // give up, return raw
  }
  // Unknown type
  return "";
}

/* Extract a numeric value from price for comparisons */
function priceValue(price) {
  if (typeof price === "number") return price;
  if (typeof price === "string") {
    const match = price.match(/([0-9]+(?:\.[0-9]+)?)/); // first number
    return match ? parseFloat(match[1]) : Infinity;
  }
  return Infinity;
}

function formatDistance(km) {
  if (km == null || !isFinite(km)) return "";
  return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(2)} km`;
}

/* YEAR in footer ------------------------------------------------------- */
(function updateYear() {
  const yearSpan = qs("#year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
})();

/* Index page ----------------------------------------------------------- */
function initIndexPage() {
  const searchForm = qs("#search-form");
  if (!searchForm) return; // not on index page

  // Render amenity buttons
  const amenityContainer = qs("#amenity-filters");
  Object.entries(AMENITIES).forEach(([key, { name }]) => {
    const label = document.createElement("label");
    label.className = "amenity-option";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = key;
    checkbox.dataset.amenity = key;

    const span = document.createElement("span");
    span.textContent = name;

    label.appendChild(checkbox);
    label.appendChild(span);
    amenityContainer.appendChild(label);
  });

  /* Distance slider dynamic label */
  const distanceRange = qs("#distance-range");
  const distanceLabel = qs("#distance-value");
  if (distanceRange && distanceLabel) {
    const updateDistanceText = () => {
      const kmVal = parseFloat(distanceRange.value);
      const display = kmVal < 1 ? `${Math.round(kmVal * 1000)} m` : `${kmVal} km`;
      distanceLabel.textContent = display;
    };
    distanceRange.addEventListener("input", updateDistanceText);
    updateDistanceText(); // initial
  }

  // Handle submit
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = qs("#search-input").value.trim();
    const selectedAmenities = qsa(".amenity-filters input:checked").map(
      (cb) => cb.value
    );

    const distanceVal = qs("#distance-range")?.value;
    const genderVal = qs("input[name='gender']:checked")?.value || "";

    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (selectedAmenities.length)
      params.set("amenities", selectedAmenities.join(","));
    if (distanceVal) params.set("distance", distanceVal);
    if (genderVal) params.set("gender", genderVal);

    // Navigate to hostels page with filters encoded in URL
    window.location.href = `hostels.html?${params.toString()}`;
  });
}

/* Hostels list page ---------------------------------------------------- */
async function initHostelsPage() {
  const listEl = qs("#hostels-list");
  const countEl = qs("#results-count");
  if (!listEl) return;

  // Ensure hostels data is loaded
  await fetchHostels();

  // Set up real-time updates for hostels
  const hostelQuery = window.firebase.query(
    window.firebase.collection(window.db, "hostels")
  );

  window.firebase.onSnapshot(hostelQuery, (snapshot) => {
    hostels = snapshot.docs.map(doc => normalizeContacts({ id: doc.id, ...doc.data() }));
    applyFilters();
  });

  const params = new URLSearchParams(window.location.search);
  const query = (params.get("q") || "").toLowerCase();
  const amenityFilter = params.get("amenities")?.split(",").filter(Boolean) || [];
  const distanceFilter = parseFloat(params.get("distance")) || Infinity;
  const genderParam = params.get("gender") || "";
  // Map UI values (male/female) to dataset codes (boys/girls)
  const genderFilter = genderParam === "male" ? "boys" : genderParam === "female" ? "girls" : "";
  let sortOption = qs("#sort-select").value;

  // --- Gender selector logic ---
  const genderSelector = qs("#gender-selector-hostels");
  if (genderSelector) {
    // Set initial state from URL param
    if (genderParam === "male") {
      qs("#gender-male-h").checked = true;
    } else if (genderParam === "female") {
      qs("#gender-female-h").checked = true;
    } else {
      qs("#gender-male-h").checked = false;
      qs("#gender-female-h").checked = false;
    }
    // Listen for changes
    genderSelector.addEventListener("change", (e) => {
      if (e.target.name === "gender-hostels") {
        const newGender = e.target.value;
        const newParams = new URLSearchParams(window.location.search);
        if (newGender === "male" || newGender === "female") {
          newParams.set("gender", newGender);
        } else {
          newParams.delete("gender");
        }
        // Always preserve sort selection
        const sortVal = qs("#sort-select").value;
        if (sortVal) newParams.set("sort", sortVal);
        window.location.search = newParams.toString();
      }
    });
  }

  function applyFilters() {
    let results = hostels.filter((h) => {
      const nameMatch = h.name.toLowerCase().includes(query);
      const distanceMatch = String(h.distance).includes(query);
      const amenitiesMatch =
        !amenityFilter.length || amenityFilter.every((a) => h.amenities.includes(a));

      const distanceMatchFilter = h.distance <= distanceFilter;

      const genderMatch =
        !genderFilter || h.gender === genderFilter || h.gender === "";

      return (nameMatch || distanceMatch) && amenitiesMatch && distanceMatchFilter && genderMatch;
    });

    switch (sortOption) {
      case "price_asc":
        results.sort((a, b) => priceValue(a.price) - priceValue(b.price));
        break;
      case "price_desc":
        results.sort((a, b) => priceValue(b.price) - priceValue(a.price));
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "distance":
      default:
        results.sort((a, b) => a.distance - b.distance);
    }

    renderList(results);
  }

  function renderList(items) {
    // Update count display
    if (countEl) countEl.textContent = `(${items.length})`;

    listEl.innerHTML = "";
    if (!items.length) {
      qs("#empty-state").hidden = false;
      // Ensure count shows zero when no results
      if (countEl) countEl.textContent = "(0)";
      return;
    }
    qs("#empty-state").hidden = true;

    items.forEach((h) => {
      const card = document.createElement("article");
      card.className = "card";

      // Gender badge markup
      const genderBadge = h.gender === "boys"
        ? '<span class="gender-badge male" title="Male hostel"><i class="fa-solid fa-person"></i> Male</span>'
        : h.gender === "girls"
        ? '<span class="gender-badge female" title="Female hostel"><i class="fa-solid fa-person-dress"></i> Female</span>'
        : '';

      // Rating markup
      let ratingMarkup = '';
      if (typeof h.rating === 'number' && h.rating > 0) {
        const rounded = Math.round(h.rating * 10) / 10;
        const fullStars = Math.floor(h.rating);
        const halfStar = h.rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        ratingMarkup = `<div class='card-rating' title='${rounded} / 5'>` +
          '<span class="stars">' +
          '★'.repeat(fullStars) +
          (halfStar ? '½' : '') +
          '☆'.repeat(emptyStars) +
          `</span> <span class='rating-num'>${rounded} / 5</span></div>`;
      } else {
        ratingMarkup = `<div class='card-rating card-rating-empty'>No ratings yet</div>`;
      }

      card.innerHTML = `
        <img class="card-img" src="${h.image}" alt="${h.name}" />
        <div class="card-body">
          <div class="card-title-row">
            <h3 class="card-title">${h.name}</h3>
            ${genderBadge}
          </div>
          ${ratingMarkup}
          <p class="card-meta">${formatDistance(h.distance) || "N/A"} from campus</p>
          <p class="card-price">${formatCurrency(h.price)} / month</p>
          <a class="card-link" href="hostel-detail.html?id=${h.id}">View Details</a>
        </div>
      `;
      listEl.appendChild(card);
    });
  }

  // Sort select listener
  qs("#sort-select").addEventListener("change", (e) => {
    sortOption = e.target.value;
    // Update URL to preserve sort selection
    const newParams = new URLSearchParams(window.location.search);
    if (sortOption) newParams.set("sort", sortOption);
    window.history.replaceState(null, '', '?' + newParams.toString());
    applyFilters();
  });

  // On page load, set sort dropdown from URL param if present
  const sortParam = params.get("sort");
  if (sortParam) {
    const sortSelect = qs("#sort-select");
    if (sortSelect) sortSelect.value = sortParam;
    sortOption = sortParam;
  }

  // initial render
  applyFilters();
}

/* Detail page ---------------------------------------------------------- */
async function initDetailPage() {
  const detailEl = qs("#hostel-detail");
  if (!detailEl) return; // not on detail page

  // Ensure hostels data is loaded
  await fetchHostels();

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const hostel = hostels.find((h) => h.id === id);
  console.log("Hostel contacts:", hostel.contacts, "Raw hostel object:", hostel);
  if (!hostel) {
    detailEl.innerHTML = `<p class="empty-state">Hostel not found.</p>`;
    return;
  }

  // Add 'female' class to title if hostel is for girls
  const titleClass = hostel.gender === "girls" ? "detail-title female" : "detail-title";

  // Images markup (carousel or single image)
  const imagesArr = hostel.images && hostel.images.length ? hostel.images : [hostel.image];
  const imagesTitle = `<div class='detail-box-title'>Images</div>`;
  let imagesMarkup = "";
  if (imagesArr.length > 1) {
    imagesMarkup = `
      <div class='carousel-container'>
        <button class='carousel-btn prev' aria-label='Previous image'>&#10094;</button>
        <div class='carousel-track'>
          ${imagesArr.map((url, idx) => `<img class='detail-img' src='${url}' alt='${hostel.name} image ${idx+1}' data-idx='${idx}' style='display:${idx === 0 ? 'block' : 'none'};margin-top:1rem;'/>`).join("")}
      </div>
        <button class='carousel-btn next' aria-label='Next image'>&#10095;</button>
    </div>`;
  } else {
    imagesMarkup = imagesArr.map((url, idx) => `<img class='detail-img' src='${url}' alt='${hostel.name} image ${idx+1}' style='margin-top:1rem;'/>`).join("");
  }
  imagesMarkup = imagesTitle + imagesMarkup;

  // Rent and advance
  const rentTitle = `<div class='detail-box-title'>Rent and advance</div>`;
  const foodPrice = hostel.foodPrice ? `<div><b>Food:</b> ${formatCurrency(hostel.foodPrice)} / month</div>` : "";
  const rentMarkup = rentTitle + `<div style='margin-top:1rem;'><b>Rent:</b> ${formatCurrency(hostel.price)} / month</div><div><b>Advance:</b> ${hostel.advance ? formatCurrency(hostel.advance) : "N/A"}</div>${foodPrice}`;

  // Vacancies and distance
  const vacancyTitle = `<div class='detail-box-title'>Vacancies and distance</div>`;
  const vacancyMarkup = vacancyTitle + `<div style='margin-top:1rem;'><b>Vacancies:</b> ${hostel.vacancies != null ? hostel.vacancies : "N/A"}</div><div><b>Distance:</b> ${formatDistance(hostel.distance) || "N/A"}</div>`;

  // Contact details
  const contactTitle = `<div class='detail-box-title'>Contact Details</div>`;
  let contactsMarkup = "Not available";
if (Array.isArray(hostel.contacts) && hostel.contacts.length) {
  contactsMarkup = hostel.contacts.map(
    c => `<div><b>${c.name ? c.name + ":" : "Contact:"}</b> ${c.phone}</div>`
  ).join("");
} else if (hostel.contact && typeof hostel.contact === "string" && hostel.contact.trim()) {
  contactsMarkup = `<div><b>Contact:</b> ${hostel.contact}</div>`;
}
const contactMarkup = contactTitle +
  `<div style='margin-top:1rem;'>${contactsMarkup}</div>
   <div><b>Location:</b> ${hostel.location}</div>
   ${hostel.mapLink ? `<div><a href='${hostel.mapLink}' target='_blank' rel='noopener'>Google Maps</a></div>` : ""}`;
  // Amenities
  const amenitiesMarkup = `<div class='detail-box-title'>Amenities</div>` + ((hostel.amenities && hostel.amenities.length)
    ? `<ul class='amenities-list'>${hostel.amenities.map(a => `<li>${(AMENITIES[a]?.name) || a}</li>`).join("")}</ul>`
    : "No amenities listed.");

  // Facilities
  const facilitiesMarkup = `<div class='detail-box-title'>Nearby Facilities</div>` + ((hostel.nearbyFacilities && hostel.nearbyFacilities.length)
    ? `<ul class='amenities-list'>${hostel.nearbyFacilities.map(f => {
        const code = typeof f === "string" ? f : f.code;
        const canonical = code === "restaurants" ? "restaurant" : code;
        const dist = typeof f === "object" && f.distance != null ? formatDistance(f.distance) : "";
        const label = canonical === "restaurant" ? "Restaurants (multiple nearby)" : (FACILITIES[canonical]?.name || canonical);
        return `<li>${label}${dist ? " - " + dist : ""}</li>`;
      }).join("")}</ul>`
    : "No facilities listed.");

  detailEl.innerHTML = `
    <h1 class="${titleClass}">${hostel.name}
      ${hostel.gender === "boys"
        ? '<span class="gender-badge male" title="Male hostel"><i class="fa-solid fa-person"></i> Male</span>'
        : hostel.gender === "girls"
        ? '<span class="gender-badge female" title="Female hostel"><i class="fa-solid fa-person-dress"></i> Female</span>'
        : ''}
    </h1>
    <div class="detail-grid-redesign">
      <div class="detail-images neu-box">${imagesMarkup}</div>
      <div class="detail-rent neu-box">${rentMarkup}</div>
      <div class="detail-contact neu-box">${contactMarkup}</div>
      <div class="detail-vacancy neu-box">${vacancyMarkup}</div>
      <div class="detail-amenities neu-box">${amenitiesMarkup}</div>
      <div class="detail-facilities neu-box">${facilitiesMarkup}</div>
      </div>
  `;

  // Carousel logic for images
  if (imagesArr.length > 1) {
    const container = detailEl.querySelector('.carousel-container');
    const imgs = Array.from(container.querySelectorAll('.detail-img'));
    const prevBtn = container.querySelector('.carousel-btn.prev');
    const nextBtn = container.querySelector('.carousel-btn.next');
    let idx = 0;
    function showImg(i) {
      imgs.forEach((img, j) => img.style.display = j === i ? 'block' : 'none');
    }
    prevBtn.addEventListener('click', () => {
      idx = (idx - 1 + imgs.length) % imgs.length;
      showImg(idx);
    });
    nextBtn.addEventListener('click', () => {
      idx = (idx + 1) % imgs.length;
      showImg(idx);
    });
  }
  console.log("Hostel contacts:", hostel.contacts, "Raw hostel object:", hostel);  // Add review section logic as before
  initReviewsModule(hostel.id);
}

/* ------------------------------------------------------------------ */
/*  Rating & review helpers                                           */
/* ------------------------------------------------------------------ */
function renderStarIcons(container, value, interactive = false) {
  // Use the selected value if present, otherwise use the passed value
  let selected = +container.dataset.selected || value || 0;
  container.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");
    star.className = `fa-star ${i <= selected ? "fa-solid" : "fa-regular"}`;
      star.dataset.val = i;
    container.appendChild(star);
  }
}

async function initReviewsModule(hostelId) {
  const box = qs("#reviews-box");
  const avgStarsEl = qs("#avg-stars");
  const avgScoreEl = qs("#avg-score");
  const countEl = qs("#review-count");
  const listEl = qs("#reviews-list-box");
  const form = qs("#review-form");
  const starInput = qs("#star-input");
  const reviewText = qs("#review-text");

  if (!box || !avgStarsEl || !avgScoreEl || !countEl || !listEl || !form || !starInput || !reviewText) {
    console.error('[initReviewsModule] One or more elements missing.');
    return;
  }

  // Show the reviews section
  box.hidden = false;

  // Initialize star rating input
  renderStarIcons(starInput, 0, true);

  // Event delegation for star rating selection
  starInput.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('fa-star') && e.target.dataset.val) {
      this.dataset.selected = e.target.dataset.val;
      renderStarIcons(this, +e.target.dataset.val, true);
    }
  });

  // Handle form submission
  form.onsubmit = async (e) => {
    e.preventDefault();
    const rating = parseInt(starInput.dataset.selected || "0");
    if (!rating) {
      alert("Please select a rating");
      return;
    }

    const review = {
      rating,
      text: reviewText.value.trim(),
      createdAt: window.firebase.timestamp,
      hostelId
    };

    try {
      // Add review to subcollection
      const reviewRef = window.firebase.doc(window.db, `hostels/${hostelId}/reviews/${Date.now()}`);
      await window.firebase.setDoc(reviewRef, review);

      // Get all reviews to calculate new average
      const reviewsSnap = await window.firebase.getDocs(
        window.firebase.collection(window.db, `hostels/${hostelId}/reviews`)
      );
      
      const reviews = [];
      reviewsSnap.forEach(doc => reviews.push(doc.data()));
      
      // Calculate new average
      const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
      const newAverage = reviews.length ? totalRating / reviews.length : 0;

      // Update hostel document with new rating
      const hostelRef = window.firebase.doc(window.db, `hostels/${hostelId}`);
      await window.firebase.updateDoc(hostelRef, {
        rating: newAverage,
        updatedAt: window.firebase.timestamp
      });

      // Reset form
      form.reset();
      starInput.dataset.selected = "0";
      renderStarIcons(starInput, 0, true);

      // Show success message
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting review. Please try again.");
    }
  };

  // Listen for reviews in real-time
  const reviewsQuery = window.firebase.query(
    window.firebase.collection(window.db, `hostels/${hostelId}/reviews`),
    window.firebase.orderBy("createdAt", "desc")
  );

  window.firebase.onSnapshot(reviewsQuery, (snapshot) => {
    const reviews = [];
    snapshot.forEach(doc => reviews.push(doc.data()));

    // Update average rating display
    if (reviews.length) {
      const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
      const average = totalRating / reviews.length;
      const rounded = Math.round(average * 10) / 10;

      renderStarIcons(avgStarsEl, rounded);
      avgScoreEl.textContent = `${rounded.toFixed(1)}`;
      countEl.textContent = `${reviews.length} review${reviews.length === 1 ? "" : "s"}`;
    } else {
      renderStarIcons(avgStarsEl, 0);
      avgScoreEl.textContent = "0.0";
      countEl.textContent = "No reviews yet";
    }

    // Update reviews list
    listEl.innerHTML = reviews.length ? reviews.map(review => `
      <li class="review-item">
        <div class="review-stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
        <p class="review-text">${review.text}</p>
        <p class="review-date">${new Date(review.createdAt?.toDate()).toLocaleDateString()}</p>
      </li>
    `).join("") : "<li class='empty-state'>No reviews yet. Be the first to review!</li>";
  });
}

/* Bootstrap all pages -------------------------------------------------- */
// Remove redundant initialization
document.addEventListener("DOMContentLoaded", () => {
  initIndexPage();
  initHostelsPage();
  initDetailPage();
}); 

// Hamburger menu logic (unified, accessible)
(function initHamburgerMenu() {
  function qs(sel, scope=document){return scope.querySelector(sel);}
  function qsa(sel, scope=document){return Array.from(scope.querySelectorAll(sel));}
  document.addEventListener('DOMContentLoaded', function() {
    const header = qs('.site-header');
    if (!header) return;
    let nav = qs('.site-nav', header);
    if (!nav) return;
    const hamburger = qs('.hamburger', header);
    if (!hamburger) return;
    const overlay = qs('.mobile-nav-overlay') || document.querySelector('.mobile-nav-overlay');
    function setAria() {
      hamburger.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
      hamburger.setAttribute('aria-controls', 'main-nav');
      nav.setAttribute('tabindex', '-1');
    }
    function openNav() {
      nav.classList.add('open');
      hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
      setAria();
      if (overlay) overlay.style.display = 'block';
    }
    function closeNav() {
      nav.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
      setAria();
      if (overlay) overlay.style.display = 'none';
    }
    function toggleNav() {
      if (nav.classList.contains('open')) {
        closeNav();
      } else {
        openNav();
      }
    }
    hamburger.addEventListener('click', toggleNav);
    setAria();
    // Close nav on ESC
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && nav.classList.contains('open')) closeNav();
    });
    // Close nav on nav link click (for single-page feel)
    qsa('.site-nav a', nav).forEach(a => a.addEventListener('click', function(){
      if (nav.classList.contains('open')) closeNav();
    }));
    // Close nav on overlay click
    if (overlay) overlay.addEventListener('click', closeNav);
  });
})(); 

// Initialize page based on current path
async function initPage() {
  const path = window.location.pathname;
  
  // Skip auth check for auth.html
  if (path.includes('auth.html')) {
    return;
  }
  
  // Initialize specific page
  if (path.includes('hostels.html')) {
    await initHostelsPage();
  } else if (path.includes('hostel-detail.html')) {
    await initDetailPage();
  } else if (path.includes('index.html') || path === '/') {
    await initIndexPage();
  }
}

// Initialize on load
window.addEventListener('load', initPage); 

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.site-nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });
}

// Initialize amenity filters
const amenities = [
  { value: 'wifi', label: 'Wi-Fi' },
  { value: 'food', label: 'Food' },
  { value: 'housekeeping', label: 'Housekeeping' }
];

function initializeAmenityFilters() {
  const container = document.getElementById('amenity-filters');
  if (!container) return;

  // Clear any existing content
  container.innerHTML = '';

  // Add amenity checkboxes
  amenities.forEach(amenity => {
    const label = document.createElement('label');
    label.className = 'amenity-option';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = amenity.value;
    input.dataset.amenity = amenity.value;

    const span = document.createElement('span');
    span.textContent = amenity.label;

    label.appendChild(input);
    label.appendChild(span);
    container.appendChild(label);
  });
}

// Handle distance range input
const distanceInput = document.getElementById('distance');
const distanceOutput = distanceInput?.nextElementSibling;

if (distanceInput && distanceOutput) {
  distanceInput.addEventListener('input', (e) => {
    distanceOutput.textContent = `${e.target.value} km`;
  });
}

// Handle search form submission
const searchForm = document.getElementById('search-form');
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const searchQuery = document.getElementById('search').value;
    const gender = document.getElementById('gender').value;
    const distance = document.getElementById('distance').value;
    const amenities = Array.from(document.querySelectorAll('#amenity-filters input:checked'))
      .map(input => input.value);
    
    // Build query string
    const params = new URLSearchParams();
    if (searchQuery) params.append('q', searchQuery);
    if (gender) params.append('gender', gender);
    if (distance) params.append('distance', distance);
    amenities.forEach(amenity => params.append('amenities', amenity));
    
    // Redirect to hostels page with filters
    window.location.href = `hostels.html?${params.toString()}`;
  });
}

// Apply filters from URL on hostels page
function applyFiltersFromURL() {
  const params = new URLSearchParams(window.location.search);
  const filters = {
    search: params.get('q') || '',
    gender: params.get('gender') || '',
    distance: params.get('distance') || '2',
    amenities: params.getAll('amenities') || []
  };

  // Update form inputs if they exist
  const searchInput = document.getElementById('search');
  const genderSelect = document.getElementById('gender');
  const distanceInput = document.getElementById('distance');
  const amenityInputs = document.querySelectorAll('#amenity-filters input');

  if (searchInput) searchInput.value = filters.search;
  if (genderSelect) genderSelect.value = filters.gender;
  if (distanceInput) {
    distanceInput.value = filters.distance;
    const output = distanceInput.nextElementSibling;
    if (output) output.textContent = `${filters.distance} km`;
  }
  
  amenityInputs.forEach(input => {
    input.checked = filters.amenities.includes(input.value);
  });

  return filters;
}

// Initialize page
function initPage() {
  initializeAmenityFilters();
  
  // Initialize filters if on hostels page
  if (window.location.pathname.includes('hostels.html')) {
    const filters = applyFiltersFromURL();
    // TODO: Apply filters to hostel list (to be implemented)
  }
}

// Initialize on page load
window.addEventListener('load', initPage); 