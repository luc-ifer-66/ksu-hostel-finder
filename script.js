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
    id: "h1",
    name: "Guha Mens Hostel",
    rating: 0,
    vacancies: 10,
    price: 2750,
    foodPrice: 3000, // 100/day * 30 days
    advance: 5000,
    gender: "boys",
    distance: 0.45,
    location: "Opp. Jith Restaurant",
    mapLink: "https://maps.app.goo.gl/hzjFbk2kS3Yze4hx9",
    contact: "9061416983",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.16 },
      { code: "atm", distance: 0.28 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.15 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Guha+Mens+Hostel",
    images: [],
    description: "Vacancy: 10"
  },
  {
    id: "h2",
    name: "Amala Gardens",
    rating: 0,
    vacancies: 12,
    price: 3500,
    foodPrice: 3750, // 125/day * 30 days
    advance: 7000,
    gender: "boys",
    distance: 0.50,
    location: "Xylem",
    mapLink: "https://maps.app.goo.gl/WrqB79gmXD13efXd9",
    contact: "9847131533",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.09 },
      { code: "atm", distance: 0.15 },
      { code: "hospital", distance: 1.5 },
      { code: "groceries", distance: 0.10 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Amala+Gardens",
    images: [],
    description: "Vacancy: 12"
  },
  {
    id: "h3",
    name: "Aradhana PG",
    rating: 0,
    vacancies: 8,
    price: 3000,
    foodPrice: 3750, // 125/day * 30 days
    advance: 5000,
    gender: "boys",
    distance: 0.65,
    location: "Xylem",
    mapLink: "https://maps.app.goo.gl/xxK8aAcrjZWHc9tZ9",
    contact: "7994221662",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.15 },
      { code: "atm", distance: 0.15 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.075 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Aradhana+PG",
    images: [],
    description: "Vacancy: 8"
  },
  {
    id: "h4",
    name: "Kurukshetra",
    rating: 0,
    vacancies: 5,
    price: 3500,
    foodPrice: 3900, // 130/day * 30 days
    advance: 5000,
    gender: "girls",
    distance: 0.45,
    location: "Opp. Ashokan's Chayakada",
    mapLink: "",
    contact: "",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.25 },
      { code: "atm", distance: 0.45 },
      { code: "hospital", distance: 1.2 },
      { code: "groceries", distance: 0.30 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Kurukshetra",
    images: [],
    description: "Vacancy: 5"
  },
  {
    id: "h5",
    name: "Poga",
    rating: 0,
    vacancies: 5,
    price: 2500,
    foodPrice: 4500, // 150/day * 30 days
    advance: 5000,
    gender: "boys",
    distance: 0.60,
    location: "Ambadi Nagar lane 2",
    mapLink: "",
    contact: "9207463580",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.10 },
      { code: "atm", distance: 0.50 },
      { code: "hospital", distance: 0.30 },
      { code: "groceries", distance: 0.25 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Poga",
    images: [],
    description: "Vacancy: 5"
  },
  {
    id: "h6",
    name: "Priyanka Nilayam",
    rating: 0,
    vacancies: 10,
    price: 5000,
    foodPrice: 3000, // 3000 monthly
    advance: 5000,
    gender: "boys",
    distance: 0.12,
    location: "Opp. Post Office Gate",
    mapLink: "https://maps.app.goo.gl/Bx5gjTds5HcoY9467",
    contact: "7025458339",
    amenities: ["wifi", "housekeeping", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.06 },
      { code: "atm", distance: 0.05 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.075 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Priyanka+Nilayam",
    images: [],
    description: "Vacancy: 10"
  },
  {
    id: "h7",
    name: "Liwa Hostel",
    rating: 0,
    vacancies: 4,
    price: 3000,
    foodPrice: 3000, // 3000 monthly
    advance: 6000,
    gender: "boys",
    distance: 0.50,
    location: "Xylem",
    mapLink: "https://maps.app.goo.gl/QUgJfMQDSTU4JpBN8",
    contact: "8129292731",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.09 },
      { code: "atm", distance: 0.15 },
      { code: "hospital", distance: 1.5 },
      { code: "groceries", distance: 0.10 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Liwa+Hostel",
    images: [],
    description: "Vacancy: 4"
  },
  {
    id: "h8",
    name: "Kalyani",
    rating: 0,
    vacancies: 8,
    price: 7000,
    foodPrice: 0, // food included
    advance: 6000,
    gender: "girls",
    distance: 0.90,
    location: "CRP Nagar",
    mapLink: "",
    contact: "",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.80 },
      { code: "atm", distance: 0.75 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.305 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Kalyani",
    images: [],
    description: "Vacancy: 8"
  },
  {
    id: "h9",
    name: "Niva",
    rating: 0,
    vacancies: 5,
    price: "6500-7000",
    foodPrice: 0, // food included
    advance: 5000,
    gender: "girls",
    distance: 0.85,
    location: "Thiru Nagar",
    mapLink: "",
    contact: "",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.80 },
      { code: "atm", distance: 0.75 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.305 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Niva",
    images: [],
    description: "Vacancy: 5"
  },
  {
    id: "h10",
    name: "Amritha",
    rating: 0,
    vacancies: 52,
    price: 8000,
    foodPrice: 0, // food included
    advance: 10000,
    gender: "girls",
    distance: 0.65,
    location: "Ambadi Nagar Lane 2",
    mapLink: "https://maps.app.goo.gl/x5JXLEsKVxVy7Fig8",
    contact: "9995740977",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.10 },
      { code: "atm", distance: 0.50 },
      { code: "hospital", distance: 0.30 },
      { code: "groceries", distance: 0.25 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Amritha",
    images: [],
    description: "Vacancy: 52"
  },
  {
    id: "h11",
    name: "Ammus",
    rating: 0,
    vacancies: 20,
    price: 7500,
    foodPrice: 0, // food included
    advance: 10000,
    gender: "girls",
    distance: 0.60,
    location: "Opp. CRP Nagar",
    mapLink: "https://maps.app.goo.gl/7WCtubTc7HxzbUQG6",
    contact: "",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.80 },
      { code: "atm", distance: 0.75 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.305 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Ammus",
    images: [],
    description: "Vacancy: 20"
  },
  {
    id: "h12",
    name: "Angels Beth",
    rating: 0,
    vacancies: 5,
    price: "7500-9500",
    foodPrice: 0, // food included
    advance: 9000,
    gender: "girls",
    distance: 0.40,
    location: "Opp. Electrical Gate",
    mapLink: "https://maps.app.goo.gl/tEJke8QmE8fYVQu67",
    contact: "9497154582",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.22 },
      { code: "atm", distance: 0.60 },
      { code: "hospital", distance: 0.60 },
      { code: "groceries", distance: 0.35 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Angels+Beth",
    images: [],
    description: "Vacancy: 5"
  },
  {
    id: "h13",
    name: "Karthika",
    rating: 0,
    vacancies: 4,
    price: 3000,
    foodPrice: 0, // not included
    advance: 5000,
    gender: "boys",
    distance: 0.80,
    location: "Thiru Nagar",
    mapLink: "",
    contact: "",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.80 },
      { code: "atm", distance: 0.75 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.305 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Karthika",
    images: [],
    description: "Vacancy: 4"
  },
  {
    id: "h14",
    name: "Swapnakoodu",
    rating: 0,
    vacancies: 2,
    price: 4000,
    foodPrice: 0, // not included
    advance: 0, // no advance mentioned
    gender: "girls",
    distance: 0.95,
    location: "CRP Nagar",
    mapLink: "",
    contact: "",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.80 },
      { code: "atm", distance: 0.75 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.305 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Swapnakoodu",
    images: [],
    description: "Vacancy: 2"
  },
  {
    id: "h15",
    name: "PG",
    rating: 0,
    vacancies: 4,
    price: 3500,
    foodPrice: 0, // not included
    advance: 7000,
    gender: "girls",
    distance: 0.50,
    location: "Opp. Electrical Gate",
    mapLink: "",
    contact: "9446761911",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.22 },
      { code: "atm", distance: 0.60 },
      { code: "hospital", distance: 0.60 },
      { code: "groceries", distance: 0.35 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=PG",
    images: [],
    description: "Vacancy: 4"
  },
  {
    id: "h16",
    name: "Pournami PG",
    rating: 0,
    vacancies: 11,
    price: 3000,
    foodPrice: 0, // not included
    advance: 9000,
    gender: "boys",
    distance: 0.60,
    location: "Xylem",
    mapLink: "",
    contact: "9446417167",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.09 },
      { code: "atm", distance: 0.15 },
      { code: "hospital", distance: 1.5 },
      { code: "groceries", distance: 0.10 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Pournami+PG",
    images: [],
    description: "Vacancy: 11"
  },
  {
    id: "h17",
    name: "Ragdeep",
    rating: 0,
    vacancies: 6,
    price: 3500,
    foodPrice: 0, // not included
    advance: 7000,
    gender: "girls",
    distance: 0.45,
    location: "Xylem",
    mapLink: "https://maps.app.goo.gl/76HrAwscTFo682EM9",
    contact: "9495995937",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.06 },
      { code: "atm", distance: 0.15 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.075 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Ragdeep",
    images: [],
    description: "Vacancy: 6"
  },
  {
    id: "h18",
    name: "Shimsha",
    rating: 0,
    vacancies: 5,
    price: 6000,
    foodPrice: 0, // not included
    advance: 6000,
    gender: "boys",
    distance: 0.60,
    location: "Opp. Ashokan Chayakada",
    mapLink: "https://maps.app.goo.gl/ectfSjZDrBMCw1RL9",
    contact: "9526552037",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.30 },
      { code: "atm", distance: 0.55 },
      { code: "hospital", distance: 1.4 },
      { code: "groceries", distance: 0.32 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Shimsha",
    images: [],
    description: "Vacancy: 5"
  },
  {
    id: "h19",
    name: "Shivasai",
    rating: 0,
    vacancies: 20,
    price: "2750-4250",
    foodPrice: 0, // not included
    advance: 5000,
    gender: "boys",
    distance: 0.375,
    location: "Bhagat Singh Nagar",
    mapLink: "https://maps.app.goo.gl/FnxvYthaVv6UyLiN8",
    contact: "7510954538",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.30 },
      { code: "atm", distance: 0.55 },
      { code: "hospital", distance: 1.4 },
      { code: "groceries", distance: 0.10 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Shivasai",
    images: [],
    description: "Vacancy: 20"
  },
  {
    id: "h20",
    name: "Murugans Hostel",
    rating: 0,
    vacancies: 25,
    price: "3500-4000",
    foodPrice: 0, // not included
    advance: 10000,
    gender: "boys",
    distance: 0.45,
    location: "Bhagat Singh Nagar",
    mapLink: "",
    contact: "8281166260",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.30 },
      { code: "atm", distance: 0.55 },
      { code: "hospital", distance: 1.4 },
      { code: "groceries", distance: 0.10 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Murugans+Hostel",
    images: [],
    description: "Vacancy: 25"
  },
  {
    id: "h21",
    name: "Gokulam PG",
    rating: 0,
    vacancies: 8,
    price: 5600,
    foodPrice: 0, // not included
    advance: 5000,
    gender: "girls",
    distance: 0.55,
    location: "Xylem",
    mapLink: "https://maps.app.goo.gl/JSSBZmJkMvmvXdr17",
    contact: "9497688950",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.15 },
      { code: "atm", distance: 0.20 },
      { code: "hospital", distance: 1.7 },
      { code: "groceries", distance: 0.15 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Gokulam+PG",
    images: [],
    description: "Vacancy: 8"
  },
  {
    id: "h22",
    name: "Al Jazeera",
    rating: 0,
    vacancies: 46,
    price: "2000-2300",
    foodPrice: 0, // not included
    advance: 5000,
    gender: "boys",
    distance: 0.05,
    location: "College front",
    mapLink: "https://maps.app.goo.gl/Fb3G9yXCdG6oonsZA",
    contact: "9249731397",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.03 },
      { code: "atm", distance: 0.002 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.025 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Al+Jazeera",
    images: [],
    description: "Vacancy: 46"
  },
  {
    id: "h23",
    name: "Ideal",
    rating: 0,
    vacancies: 35,
    price: "4000-5000",
    foodPrice: 0, // not included
    advance: 5000,
    gender: "boys",
    distance: 0.05,
    location: "College front",
    mapLink: "https://maps.app.goo.gl/LcpAZSzxTN6PN82q9",
    contact: "9446566673",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.03 },
      { code: "atm", distance: 0.05 },
      { code: "hospital", distance: 1.0 },
      { code: "groceries", distance: 0.025 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Ideal",
    images: [],
    description: "Vacancy: 35"
  },
  {
    id: "h24",
    name: "Chuzhali",
    rating: 0,
    vacancies: 16,
    price: "3000-4000", // Original format: "3000 - 4, 4000 - 2" rooms
    foodPrice: 0, // not included
    advance: 10000,
    gender: "boys",
    distance: 0.40,
    location: "Bhagat Singh Nagar",
    mapLink: "https://maps.app.goo.gl/L5ZtepYrJWL1bvn39",
    contact: "9961005327",
    amenities: ["wifi", "housekeeping"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.30 },
      { code: "atm", distance: 0.55 },
      { code: "hospital", distance: 1.4 },
      { code: "groceries", distance: 0.10 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Chuzhali",
    images: [],
    description: "Vacancy: 16"
  }
];

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
      hostels = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } else {
      // If no hostels in Firebase, use fallback data and populate Firebase
      hostels = fallbackHostels;
      
      // Add each hostel to Firebase
      for (const hostel of fallbackHostels) {
        await window.firebase.setDoc(
          window.firebase.doc(window.db, "hostels", hostel.id),
          hostel
        );
      }
    }
  } catch (error) {
    console.error("Error fetching hostels:", error);
    hostels = fallbackHostels; // Use fallback on error
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
    hostels = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
  const contactMarkup = contactTitle + `<div style='margin-top:1rem;'><b>Contact:</b> ${hostel.contact || "Not available"}</div><div><b>Location:</b> ${hostel.location}</div>${hostel.mapLink ? `<div><a href='${hostel.mapLink}' target='_blank' rel='noopener'>Google Maps</a></div>` : ""}`;

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

  // Add review section logic as before
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