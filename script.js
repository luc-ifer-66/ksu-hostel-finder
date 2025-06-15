/* Shared data ----------------------------------------------------------- */
const AMENITIES = {
  amenity1: { name: "amenity1" },
  amenity2: { name: "amenity2" },
  amenity3: { name: "amenity3" }  
};

const hostels = [
  {
    id: "h1",
    name: "Hostel Name",
    distance: 0.5,
    amenities: ["amenity1", "amenity2", "amenity3"],
    rating: 4.5,
    price: 800,
    advance: 5000,
    location: "123 Main Road, Mysore",
    mapLink: "https://www.google.com/maps?q=12.3051,76.6551",
    gender: "mixed",
    image: "https://placehold.co/600x400/e2e8f0/e2e8f0",
    description:
      "A modern and vibrant living space located right next to the engineering faculty. Perfect for students who value convenience and a strong community.",
  }
];

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
function initHostelsPage() {
  const listEl = qs("#hostels-list");
  if (!listEl) return; // not on hostels page

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
function initDetailPage() {
  const detailEl = qs("#hostel-detail");
  if (!detailEl) return; // not on detail page

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const hostel = hostels.find((h) => h.id === id);
  if (!hostel) {
    detailEl.innerHTML = `<p class="empty-state">Hostel not found.</p>`;
    return;
  }

  detailEl.innerHTML = `
    <h1 class="detail-title">${hostel.name}</h1>
    <img class="detail-img" src="${hostel.image}" alt="${hostel.name}" />
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
    <section class="neu-box detail-location">
      <h3>Location</h3>
      <p>${hostel.location}</p>
      <a href="${hostel.mapLink}" target="_blank" rel="noopener">Open in Google Maps</a>
    </section>
  `;
}

/* Bootstrap all pages -------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initIndexPage();
  initHostelsPage();
  initDetailPage();
}); 