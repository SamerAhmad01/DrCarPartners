function getShops() {
  var selectedBrand = document.getElementById("car-brand").value;
  var selectedRating = document.getElementById("shop-rating").value;
  var shopListDiv = document.getElementById("shop-list");
  shopListDiv.innerHTML = ""; // Clear previous shop list

  // Filter shops by selected brand and rating
  var filteredShops = shops.filter(function (shop) {
    var brandMatch = selectedBrand === "" || shop.brand === selectedBrand;
    var ratingMatch = selectedRating === "" || shop.rating === selectedRating;
    return brandMatch && ratingMatch;
  });

  // Display filtered shops
  filteredShops.forEach(function (shop) {
    var shopDiv = document.createElement("div");
    shopDiv.classList.add("col-12", "mb-2"); // Bootstrap grid classes
    shopDiv.innerHTML = `
      <div class="card mx-2">
        <div class="card-body d-flex">
          <div class="details">
            <div class="row">
              <div class="col-12 pb-2">
                  <h2 class="card-title">${shop.name}</h2>
              </div>
              <div class="col-12">
                <div class="row pb-2">
                  <div class="col-6">
                    <i class="fas fa-star"></i> ${shop.rating}
                  </div>
                  <div class="col-6">
                    <i class="fas fa-car"></i> ${shop.brand}
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <i class="fas fa-location-arrow"></i> <a href="${shop.location.location_url}" target="_blank">${shop.location.area_name}</a>
                  </div>
                  <div class="col-6">
                    <i class="fas fa-phone"></i> <a href="tel:${shop.phone_number}" target="_blank"> ${shop.phone_number} </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    shopListDiv.appendChild(shopDiv);
  });
}





// Mock data (replace with actual JSON data)
var shops = [
  {
    "name": "AutoFix",
    "brand": "Toyota",
    "phone_number": "+971 78896600",
    "rating": "Great Shop",
    "location": {
      "area_name": "Al-Barsha",
      "location_url": "https://maps.app.goo.gl/VDibm9TxJAvY5giJ9"
    }
  },
  {
    "name": "Fixer",
    "brand": "Toyota",
    "phone_number": "+971 78896600",
    "rating": "Affordable Shop",
    "location": {
      "area_name": "Al-Barsha",
      "location_url": "https://maps.app.goo.gl/VDibm9TxJAvY5giJ9"
    }
  },
  {
    "name": "FixyCars",
    "brand": "Toyota",
    "phone_number": "+971 78896600",
    "rating": "Luxury Shop",
    "location": {
      "area_name": "JLT",
      "location_url": "https://maps.app.goo.gl/VDibm9TxJAvY5giJ9"
    }
  },
  {
    "name": "CarCare",
    "brand": "Honda",
    "phone_number": "+971 5452454783",
    "rating": "Great Shop",
    "location": {
      "area_name": "JVC",
      "location_url": "https://maps.app.goo.gl/VDibm9TxJAvY5giJ9"
    }
  },
  {
    "name": "SpeedyService",
    "brand": "Ford",
    "phone_number": "+971 5452454783",
    "rating": "Luxury Shop",
    "location": {
      "area_name": "JBR",
      "location_url": "https://maps.app.goo.gl/VDibm9TxJAvY5giJ9"
    }
  }
];
