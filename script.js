/* Shared data ----------------------------------------------------------- */
const AMENITIES = {
  wifi: { name: "Wi-Fi" },
  food: { name: "Food" },
  housekeeping: { name: "Housekeeping" },
  security: { name: "Security" },
  kitchen: { name: "Kitchen" },
};

const FACILITIES = {
  bus_stop: { name: "Bus Stop" },
  atm: { name: "ATM" },
  hospitals: { name: "Hospitals" },
  groceries: { name: "Groceries" },
  restaurant: { name: "Restaurant" },
};

//  ----------  CSV → JS  (24 hostels)  ----------
const fallbackHostels = [
  {
    id: "h1",
    name: "Priyanka Nilayam",
    rating: 0,
    vacancies: 10,
    price: 5000,
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
      { code: "hospitals", distance: 1.0 },
      { code: "groceries", distance: 0.075 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Priyanka+Nilayam",
    images: [],
    description: "Vacancy: 10"
  },

  {
    id: "h2",
    name: "Kalyani",
    rating: 0,
    vacancies: 8,
    price: 7000,
    advance: 6000,
    gender: "girls",
    distance: 0.9,
    location: "CRP Nagar",
    mapLink: "https://www.google.com/maps?q=CRP+Nagar",
    contact: "",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.8 },
      { code: "atm", distance: 0.75 },
      { code: "hospitals", distance: 1.0 },
      { code: "groceries", distance: 0.305 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Kalyani",
    images: [],
    description: "Vacancy: 8"
  },

  {
    id: "h3",
    name: "Karthika",
    rating: 0,
    vacancies: 4,
    price: 3000,
    advance: 5000,
    gender: "boys",
    distance: 0.8,
    location: "Thiru Nagar",
    mapLink: "https://www.google.com/maps?q=Thiru+Nagar",
    contact: "",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.8 },
      { code: "atm", distance: 0.75 },
      { code: "hospitals", distance: 1.0 },
      { code: "groceries", distance: 0.305 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Karthika",
    images: [],
    description: "Vacancy: 4"
  },

  {
    id: "h4",
    name: "Niva",
    rating: 0,
    vacancies: 5,
    price: "6500-7000",
    advance: 5000,
    gender: "girls",
    distance: 0.85,
    location: "Thiru Nagar",
    mapLink: "https://www.google.com/maps?q=Thiru+Nagar",
    contact: "",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.8 },
      { code: "atm", distance: 0.75 },
      { code: "hospitals", distance: 1.0 },
      { code: "groceries", distance: 0.305 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Niva",
    images: [],
    description: "Vacancy: 5"
  },

  {
    id: "h5",
    name: "Swapnakoodu",
    rating: 0,
    vacancies: 2,
    price: 4000,
    advance: 0,
    gender: "girls",
    distance: 0.95,
    location: "CRP Nagar",
    mapLink: "https://www.google.com/maps?q=CRP+Nagar",
    contact: "",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.8 },
      { code: "atm", distance: 0.75 },
      { code: "hospitals", distance: 1.0 },
      { code: "groceries", distance: 0.305 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Swapnakoodu",
    images: [],
    description: "Vacancy: 2"
  },

  {
    id: "h6",
    name: "Amritha",
    rating: 0,
    vacancies: 52,
    price: 8000,
    advance: 10000,
    gender: "girls",
    distance: 0.65,
    location: "Ambadi Nagar Lane 2",
    mapLink: "https://maps.app.goo.gl/x5JXLEsKVxVy7Fig8",
    contact: "9995740977",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.1 },
      { code: "atm", distance: 0.5 },
      { code: "hospitals", distance: 0.3 },
      { code: "groceries", distance: 0.25 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Amritha",
    images: [],
    description: "Vacancy: 52"
  },

  {
    id: "h7",
    name: "Kurukshetra",
    rating: 0,
    vacancies: 5,
    price: 3500,
    advance: 5000,
    gender: "girls",
    distance: 0.45,
    location: "Opp. Ashokan's Chayakada",
    mapLink: "https://www.google.com/maps?q=Ashokan+Chayakada",
    contact: "",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.25 },
      { code: "atm", distance: 0.45 },
      { code: "hospitals", distance: 1.2 },
      { code: "groceries", distance: 0.3 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Kurukshetra",
    images: [],
    description: "Vacancy: 5"
  },

  {
    id: "h8",
    name: "Ammus",
    rating: 0,
    vacancies: 20,
    price: 7500,
    advance: 10000,
    gender: "girls",
    distance: 0.6,
    location: "Opp. CRP Nagar",
    mapLink: "https://maps.app.goo.gl/7WCtubTc7HxzbUQG6",
    contact: "",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.8 },
      { code: "atm", distance: 0.75 },
      { code: "hospitals", distance: 1.0 },
      { code: "groceries", distance: 0.305 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Ammus",
    images: [],
    description: "Vacancy: 20"
  },

  {
    id: "h9",
    name: "Angels Beth",
    rating: 0,
    vacancies: 5,
    price: "7500-9500",
    advance: 9000,
    gender: "girls",
    distance: 0.4,
    location: "Opp. Electrical Gate",
    mapLink: "https://maps.app.goo.gl/tEJke8QmE8fYVQu67",
    contact: "9497154582",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.22 },
      { code: "atm", distance: 0.6 },
      { code: "hospitals", distance: 0.6 },
      { code: "groceries", distance: 0.35 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Angels+Beth",
    images: [],
    description: "Vacancy: 5"
  },

  {
    id: "h10",
    name: "PG",
    rating: 0,
    vacancies: 4,
    price: 3500,
    advance: 7000,
    gender: "girls",
    distance: 0.5,
    location: "Opp. Electrical Gate",
    mapLink: "https://www.google.com/maps?q=Electrical+Gate",
    contact: "9446761911",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.22 },
      { code: "atm", distance: 0.6 },
      { code: "hospitals", distance: 0.6 },
      { code: "groceries", distance: 0.35 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=PG",
    images: [],
    description: "Vacancy: 4"
  },

  {
    id: "h11",
    name: "Amala Gardens",
    rating: 0,
    vacancies: 12,
    price: 3500,
    advance: 7000,
    gender: "boys",
    distance: 0.5,
    location: "Xylem",
    mapLink: "https://maps.app.goo.gl/WrqB79gmXD13efXd9",
    contact: "9847131533",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.09 },
      { code: "atm", distance: 0.15 },
      { code: "hospitals", distance: 1.5 },
      { code: "groceries", distance: 0.1 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Amala+Gardens",
    images: [],
    description: "Vacancy: 12"
  },

  {
    id: "h12",
    name: "Pournami PG",
    rating: 0,
    vacancies: 11,
    price: 3000,
    advance: 9000,
    gender: "boys",
    distance: 0.6,
    location: "Xylem",
    mapLink: "https://www.google.com/maps?q=Xylem",
    contact: "9446417167",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.09 },
      { code: "atm", distance: 0.15 },
      { code: "hospitals", distance: 1.5 },
      { code: "groceries", distance: 0.1 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Pournami+PG",
    images: [],
    description: "Vacancy: 11"
  },

  {
    id: "h13",
    name: "Liwa Hostel",
    rating: 0,
    vacancies: 4,
    price: 3000,
    advance: 6000,
    gender: "boys",
    distance: 0.5,
    location: "Xylem",
    mapLink: "https://maps.app.goo.gl/QUgJfMQDSTU4JpBN8",
    contact: "8129292731",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.09 },
      { code: "atm", distance: 0.15 },
      { code: "hospitals", distance: 1.5 },
      { code: "groceries", distance: 0.1 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Liwa+Hostel",
    images: [],
    description: "Vacancy: 4"
  },

  {
    id: "h14",
    name: "Poga",
    rating: 0,
    vacancies: 5,
    price: 2500,
    advance: 5000,
    gender: "boys",
    distance: 0.6,
    location: "Ambadi Nagar Lane 2",
    mapLink: "https://www.google.com/maps?q=Ambadi+Nagar",
    contact: "9207463580",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.1 },
      { code: "atm", distance: 0.5 },
      { code: "hospitals", distance: 0.3 },
      { code: "groceries", distance: 0.25 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Poga",
    images: [],
    description: "Vacancy: 5"
  },

  {
    id: "h15",
    name: "Aradhana PG",
    rating: 0,
    vacancies: 8,
    price: 3000,
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
      { code: "hospitals", distance: 1.0 },
      { code: "groceries", distance: 0.075 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Aradhana+PG",
    images: [],
    description: "Vacancy: 8"
  },

  {
    id: "h16",
    name: "Ragdeep Residency",
    rating: 0,
    vacancies: 6,
    price: 3500,
    advance: 7000,
    gender: "girls",
    distance: 0.45,
    location: "Xylem",
    mapLink: "https://maps.app.goo.gl/76HrAwscTFo682EM9",
    contact: "9495995937",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.06 },
      { code: "atm", distance: 0.15 },
      { code: "hospitals", distance: 1.0 },
      { code: "groceries", distance: 0.075 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Ragdeep+Residency",
    images: [],
    description: "Vacancy: 6"
  },

  {
    id: "h17",
    name: "Guha Mens Hostel",
    rating: 0,
    vacancies: 10,
    price: 2750,
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
      { code: "hospitals", distance: 1.0 },
      { code: "groceries", distance: 0.15 },
      "restaurants"
    ],
    image: "https://placehold.co/600x400?text=Guha+Mens+Hostel",
    images: [],
    description: "Vacancy: 10"
  },

  {
    id: "h18",
    name: "Shimsha",
    rating: 0,
    vacancies: 5,
    price: 6000,
    advance: 6000,
    gender: "boys",
    distance: 0.6,
    location: "Opp. Ashokan Chayakada",
    mapLink: "https://maps.app.goo.gl/ectfSjZDrBMCw1RL9",
    contact: "9526552037",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.3 },
      { code: "atm", distance: 0.55 },
      { code: "hospitals", distance: 1.4 },
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
    advance: 5000,
    gender: "boys",
    distance: 0.375,
    location: "Bhagat Singh Nagar",
    mapLink: "https://maps.app.goo.gl/FnxvYthaVv6UyLiN8",
    contact: "7510954538",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.3 },
      { code: "atm", distance: 0.55 },
      { code: "hospitals", distance: 1.4 },
      { code: "groceries", distance: 0.1 },
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
    advance: 10000,
    gender: "boys",
    distance: 0.45,
    location: "Bhagat Singh Nagar",
    mapLink: "https://www.google.com/maps?q=Bhagat+Singh+Nagar",
    contact: "8281166260",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.3 },
      { code: "atm", distance: 0.55 },
      { code: "hospitals", distance: 1.4 },
      { code: "groceries", distance: 0.1 },
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
    advance: 5000,
    gender: "girls",
    distance: 0.55,
    location: "Xylem",
    mapLink: "https://maps.app.goo.gl/JSSBZmJkMvmvXdr17",
    contact: "9497688950",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.15 },
      { code: "atm", distance: 0.2 },
      { code: "hospitals", distance: 1.7 },
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
    advance: 5000,
    gender: "boys",
    distance: 0.05,
    location: "College Front",
    mapLink: "https://maps.app.goo.gl/Fb3G9yXCdG6oonsZA",
    contact: "9249731397",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.03 },
      { code: "atm", distance: 0.002 },
      { code: "hospitals", distance: 1.0 },
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
    advance: 5000,
    gender: "boys",
    distance: 0.05,
    location: "College Front",
    mapLink: "https://maps.app.goo.gl/LcpAZSzxTN6PN82q9",
    contact: "9446566673",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.03 },
      { code: "atm", distance: 0.05 },
      { code: "hospitals", distance: 1.0 },
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
    price: "3000-4000", // 3000 for 4-sharing, 4000 for 2-sharing
    advance: 10000,
    gender: "boys",
    distance: 0.4,
    location: "Bhagat Singh Nagar",
    mapLink: "https://maps.app.goo.gl/L5ZtepYrJWL1bvn39",
    contact: "9961005327",
    amenities: ["wifi", "food"],
    nearbyFacilities: [
      { code: "bus_stop", distance: 0.3 },
      { code: "atm", distance: 0.55 },
      { code: "hospitals", distance: 1.4 },
      { code: "groceries", distance: 0.1 },
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
  hostels = fallbackHostels;
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
  if (!listEl) return; // not on hostels page

  // Ensure hostels data is loaded
  await fetchHostels();

  const params = new URLSearchParams(window.location.search);
  const query = (params.get("q") || "").toLowerCase();
  const amenityFilter = params.get("amenities")?.split(",").filter(Boolean) || [];
  const distanceFilter = parseFloat(params.get("distance")) || Infinity;
  const genderParam = params.get("gender") || "";
  // Map UI values (male/female) to dataset codes (boys/girls)
  const genderFilter = genderParam === "male" ? "boys" : genderParam === "female" ? "girls" : "";
  let sortOption = qs("#sort-select").value;

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
    listEl.innerHTML = "";
    if (!items.length) {
      qs("#empty-state").hidden = false;
      return;
    }
    qs("#empty-state").hidden = true;

    items.forEach((h) => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <img class="card-img" src="${h.image}" alt="${h.name}" />
        <div class="card-body">
          <h3 class="card-title">${h.name}</h3>
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
    applyFilters();
  });

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

  /* NEW: make sure "restaurant" is always present ------------------- */
  const hasRestaurant = hostel.nearbyFacilities.some((f) => {
    const code = typeof f === "string" ? f : f.code;
    return code === "restaurant" || code === "restaurants";
  });
  if (!hasRestaurant) {
    hostel.nearbyFacilities.push("restaurant");
  }

  const imagesArr = hostel.images && hostel.images.length ? hostel.images : [hostel.image];
  const carouselMarkup = `
    <div class="detail-carousel">
      <button class="carousel-btn prev" aria-label="Previous image">&#10094;</button>
      <div class="carousel-track">
        ${imagesArr
          .map(
            (url, idx) =>
              `<img class="detail-img" src="${url}" alt="${hostel.name} image ${idx + 1}" />`
          )
          .join("")}
      </div>
      <button class="carousel-btn next" aria-label="Next image">&#10095;</button>
    </div>`;

  detailEl.innerHTML = `
    <h1 class="detail-title">${hostel.name}</h1>
    ${carouselMarkup}
    <section class="neu-box detail-overview">
      <h3>Rent:</h3>
      <p class="card-price">${formatCurrency(hostel.price)} / month</p>
      <br/>
      <h3>Advance Amount:</h3>
      <p class="card-advance">
      ${hostel.advance ? formatCurrency(hostel.advance) : "N/A"}
      </p>
    </section>
    <section class="neu-box detail-description">
      <h3>Vacancies:</h3>
      <p>${hostel.vacancies != null ? hostel.vacancies : "N/A"}</p>
      <br />
      <h3>Distance:</h3>
      <p>${formatDistance(hostel.distance) || "N/A"}</p>
    </section>
    <section class="neu-box detail-amenities">
      <h3>Amenities</h3>
      <ul class="amenities-list">
        ${hostel.amenities.map((a) => `<li>${AMENITIES[a].name}</li>`).join("")}
      </ul>
    </section>
    <section class="neu-box detail-contact">
      <h3>Contact Details</h3>
      <p>${hostel.contact || "Not available"}</p>
      <div class="detail-location">
        <h3 style="margin-top: 0.5rem;">Location</h3>
        <p style="margin-top: 0.1rem;">${hostel.location}</p>
        <a href="${hostel.mapLink}" target="_blank" rel="noopener">Open in Google Maps</a>
      </div>
    </section>
    <section class="neu-box detail-facilities">
      <h3>Nearby Facilities</h3>
      <ul class="amenities-list">
        ${hostel.nearbyFacilities
          .map((f) => {
            const code = typeof f === "string" ? f : f.code;
            const canonical = code === "restaurants" ? "restaurant" : code;
            const dist =
              typeof f === "object" && f.distance != null
                ? formatDistance(f.distance)
                : "";

            /* NEW: friendlier label for restaurants */
            const label =
              canonical === "restaurant"
                ? "Restaurants (multiple nearby)"
                : (FACILITIES[canonical]?.name || canonical);

            return `<li>${label}${dist ? " - " + dist : ""}</li>`;
          })
          .join("")}
      </ul>
    </section>
    <section class="neu-box detail-disclaimer">
      <p>*Distance of hostels are measured from the main gate of the college.</p>
      <p>*Distance of nearby facilities are measured from the hostel.</p>      
      <p>*All information is provided by the hostel owners and maybe subject to change.</p>
    </section>
  `;

  // ----- Carousel logic -----
  const track = qs(".carousel-track", detailEl);
  if (track) {
    let index = 0;
    const slides = qsa(".detail-img", track);
    const prevBtn = qs(".carousel-btn.prev", detailEl);
    const nextBtn = qs(".carousel-btn.next", detailEl);

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      // Show prev button only from second image onwards
      if (prevBtn) prevBtn.style.visibility = index === 0 ? "hidden" : "visible";
      // Hide next button on last image
      if (nextBtn) nextBtn.style.visibility = index === slides.length - 1 ? "hidden" : "visible";
    };

    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index -= 1;
        update();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (index < slides.length - 1) {
        index += 1;
        update();
      }
    });

    update();
  }
}

/* Bootstrap all pages -------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initIndexPage();
  initHostelsPage();
  initDetailPage();
}); 