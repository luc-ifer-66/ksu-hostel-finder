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
};

// Fallback dataset – used only if CSV loading fails --------------------
const fallbackHostels = [
  {
    id: "h1",
    name: "Sample Hostel",
    distance: 0.5,
    amenities: ["wifi", "food", "housekeeping", "security", "kitchen"],
    nearbyFacilities: ["bus_stop", "atm", "hospitals", "groceries"],
    rating: 4.5,
    price: 5000,
    advance: 5000,
    location: "123 Main Road, Mysore",
    mapLink: "https://www.google.com/maps?q=12.3051,76.6551",
    gender: "mixed",
    image: "https://placehold.co/600x400/e2e8f0/e2e8f0",
    images: [
      "https://placehold.co/600x400/e2e8f0/e2e8f0?text=Image+1",
      "https://placehold.co/600x400/d1d5db/d1d5db?text=Image+2",
      "https://placehold.co/600x400/cbd5e1/cbd5e1?text=Image+3",
    ],
    description:
      "A modern and vibrant living space located right next to the engineering faculty. Perfect for students who value convenience and a strong community.",
    contact: "+91 98765 43210",
  },
];

/* Hostels array populated at runtime ----------------------------------*/
let hostels = [];

/* CSV loading helpers --------------------------------------------------*/
function parseDistance(distStr = "") {
  const str = String(distStr).trim().toLowerCase();
  if (!str) return Infinity;
  if (str.endsWith("m")) {
    const meters = parseFloat(str);
    return isNaN(meters) ? Infinity : meters / 1000; // convert to km
  }
  if (str.endsWith("km")) {
    const km = parseFloat(str);
    return isNaN(km) ? Infinity : km;
  }
  const num = parseFloat(str);
  return isNaN(num) ? Infinity : num; // assume already in km
}

function csvToHostels(csvText = "") {
  const lines = csvText.trim().split(/\r?\n/);
  if (!lines.length) return [];

  const headers = lines.shift().split(",").map((h) => h.trim().toLowerCase());
  const colIndex = (key) => headers.findIndex((h) => h.startsWith(key));

  return lines.map((line, idx) => {
    const cols = line.split(",").map((c) => c.trim());

    const safe = (key, fallback = "") => {
      const i = colIndex(key);
      return i >= 0 && i < cols.length ? cols[i] : fallback;
    };

    const name = safe("hostel");
    const genderRaw = safe("boys/gir");
    const vacancy = safe("vacancy");
    const rentRaw = safe("rent");
    const foodRaw = safe("food");
    const advanceRaw = safe("advance");
    const place = safe("place");
    const distanceRaw = safe("distance");
    const contact = safe("contact");

    // --- transform fields ---
    const numeric = (str) => {
      const n = parseFloat(String(str).replace(/[^0-9.]/g, ""));
      return isNaN(n) ? 0 : n;
    };

    const gender = /boys/i.test(genderRaw) && /girls/i.test(genderRaw)
      ? "mixed"
      : /boys/i.test(genderRaw)
      ? "boys"
      : /girls/i.test(genderRaw)
      ? "girls"
      : "mixed";

    const amenities = [];
    if (/food/i.test(foodRaw) && !/no food/i.test(foodRaw)) amenities.push("food");

    return {
      id: `h${idx + 1}`,
      name: name || `Hostel ${idx + 1}`,
      distance: parseDistance(distanceRaw),
      amenities,
      nearbyFacilities: [], // can be enriched later
      rating: 0,
      price: numeric(rentRaw),
      advance: numeric(advanceRaw),
      location: place,
      mapLink: "#",
      gender,
      image: `https://placehold.co/600x400?text=${encodeURIComponent(name)}`,
      images: [],
      description: `Vacancy: ${vacancy || "N/A"}.`,
      contact,
    };
  });
}

async function fetchHostels() {
  if (hostels.length) return hostels; // already loaded

  try {
    const res = await fetch("data/hostels.csv");
    if (!res.ok) throw new Error("CSV not found");
    const csvText = await res.text();
    hostels = csvToHostels(csvText);
  } catch (err) {
    console.warn("Failed to load external CSV. Falling back to sample data.", err);
    hostels = fallbackHostels;
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
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
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
  const genderFilter = params.get("gender") || "";
  let sortOption = qs("#sort-select").value;

  function applyFilters() {
    let results = hostels.filter((h) => {
      const nameMatch = h.name.toLowerCase().includes(query);
      const distanceMatch = String(h.distance).includes(query);
      const amenitiesMatch =
        !amenityFilter.length || amenityFilter.every((a) => h.amenities.includes(a));

      const distanceMatchFilter = h.distance <= distanceFilter;

      const genderMatch =
        !genderFilter || genderFilter === "mixed" || h.gender === genderFilter;

      return (nameMatch || distanceMatch) && amenitiesMatch && distanceMatchFilter && genderMatch;
    });

    switch (sortOption) {
      case "price_asc":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        results.sort((a, b) => b.price - a.price);
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
          <p class="card-meta">${h.distance} km from campus</p>
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
      <p class="card-meta">${hostel.distance} km from campus</p>
      <p class="card-price">${formatCurrency(hostel.price)} / month</p>
      <p class="card-advance">
        Advance Amount: ${hostel.advance ? formatCurrency(hostel.advance) : "N/A"}
      </p>
    </section>
    <section class="neu-box detail-description">
      <h3>Description</h3>
      <p>${hostel.description}</p>
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
    </section>
    <section class="neu-box detail-facilities">
      <h3>Nearby Facilities & Location</h3>
      <ul class="amenities-list">
        ${hostel.nearbyFacilities.map((f) => `<li>${FACILITIES[f].name}</li>`).join("")}
      </ul>
      <p style="margin-top: 0.75rem;">${hostel.location}</p>
      <a href="${hostel.mapLink}" target="_blank" rel="noopener">Open in Google Maps</a>
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