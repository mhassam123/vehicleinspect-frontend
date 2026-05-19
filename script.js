// ========== AOS INITIALIZATION ==========
AOS.init({ duration: 800, once: true });

// ========== COUNTRIES AND CITIES DATA ==========
const countriesData = [
    { name: "United Kingdom", code: "UK", flag: "🇬🇧", cities: ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Bristol", "Leeds", "Sheffield", "Edinburgh", "Newcastle", "Nottingham", "Leicester", "Southampton", "Cardiff", "Belfast"] },
    { name: "United States", code: "US", flag: "🇺🇸", cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "Austin", "San Francisco", "Boston", "Seattle", "Denver", "Miami"] },
    { name: "Australia", code: "AU", flag: "🇦🇺", cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra", "Wollongong", "Hobart"] },
    { name: "Spain", code: "ES", flag: "🇪🇸", cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas", "Bilbao"] },
    { name: "Canada", code: "CA", flag: "🇨🇦", cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Quebec City", "Winnipeg", "Hamilton", "Halifax"] },
    { name: "New Zealand", code: "NZ", flag: "🇳🇿", cities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Dunedin", "Napier", "Palmerston North", "Rotorua", "Queenstown"] },
    { name: "Italy", code: "IT", flag: "🇮🇹", cities: ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Venice", "Verona"] }
];

// ========== UK CITIES ==========
const ukCities = ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Bristol", "Leeds", "Sheffield", "Edinburgh", "Newcastle", "Nottingham", "Leicester", "Southampton", "Cardiff", "Belfast"];

// ========== VEHICLE CATEGORIES DATA ==========
const vehicleCategories = [
    { id: "car", name: "Car", icon: "fas fa-car", image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=200&h=150&fit=crop", plans: { basic: 1, standard: 149, premium: 249 } },
    { id: "truck", name: "Truck", icon: "fas fa-truck", image: "https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?w=200&h=150&fit=crop", plans: { basic: 1, standard: 189, premium: 299 } },
    { id: "van", name: "Van", icon: "fas fa-shuttle-van", image: "https://images.unsplash.com/photo-1605410791216-3d9653a95667?w=200&h=150&fit=crop", plans: { basic: 1, standard: 169, premium: 279 } },
    { id: "bike", name: "Bike", icon: "fas fa-motorcycle", image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=200&h=150&fit=crop", plans: { basic: 1, standard: 89, premium: 139 } },
    { id: "atv", name: "ATV", icon: "fas fa-tractor", image: "https://images.unsplash.com/photo-1586849299926-28afb54a21f2?w=200&h=150&fit=crop", plans: { basic: 1, standard: 119, premium: 189 } },
    { id: "boat", name: "Boat", icon: "fas fa-ship", image: "https://images.unsplash.com/photo-1525456535336-65e0abf79908?w=200&h=150&fit=crop", plans: { basic: 1, standard: 279, premium: 449 } },
    { id: "yacht", name: "Yacht", icon: "fas fa-sailboat", image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=200&h=150&fit=crop", plans: { basic: 1, standard: 549, premium: 899 } },
    { id: "jetski", name: "Jetski", icon: "fas fa-water", image: "https://images.unsplash.com/photo-1650939489556-a6fc47e28372?w=200&h=150&fit=crop", plans: { basic: 1, standard: 109, premium: 179 } }
];

// ========== DEALERS DATA ==========
const dealers = [
    { name: "AutoTrust London", rating: 4.9, cars: 1240, location: "London" },
    { name: "Premier Motors Manchester", rating: 4.8, cars: 980, location: "Manchester" },
    { name: "Birmingham Car Centre", rating: 4.7, cars: 1120, location: "Birmingham" },
    { name: "Scottish Auto Direct", rating: 4.9, cars: 890, location: "Glasgow" },
    { name: "Bristol Car Specialists", rating: 4.6, cars: 750, location: "Bristol" },
    { name: "Leeds Auto Hub", rating: 4.8, cars: 620, location: "Leeds" }
];

// ========== BLOG POSTS DATA ==========
const blogPosts = [
    {
        id: 1,
        title: "10 Signs Your Car Needs Immediate Inspection",
        excerpt: "Don't ignore these warning signs that indicate your vehicle requires professional attention...",
        fullContent: `<p class="mb-4"><strong>Regular vehicle inspections are crucial for your car's health.</strong> Here are 10 critical signs that your car needs immediate attention:</p>
        <h3 class="text-xl font-bold mt-4 mb-2">1. Strange Noises</h3><p>Unusual sounds like grinding or knocking indicate serious issues.</p>
        <h3 class="text-xl font-bold mt-4 mb-2">2. Warning Lights</h3><p>Never ignore check engine, oil pressure, or battery warnings.</p>
        <h3 class="text-xl font-bold mt-4 mb-2">3. Vibration While Driving</h3><p>Excessive shaking means tire or suspension problems.</p>
        <div class="bg-blue-50 p-4 rounded-lg mt-4"><p class="font-bold">⚠️ Don't wait! Book your inspection today!</p></div>`,
        date: "May 15, 2025",
        readTime: "8 min read",
        category: "Car Maintenance",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop",
        author: "John Smith",
        authorImg: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        title: "How to Prepare Your Car for Winter",
        excerpt: "Essential winter maintenance tips to keep your vehicle safe during cold months...",
        fullContent: `<p class="mb-4"><strong>Winter can be harsh on your vehicle.</strong> Here's your complete winter preparation guide:</p>
        <h3 class="text-xl font-bold mt-4 mb-2">❄️ Battery Check</h3><p>Cold weather reduces battery capacity by up to 50%.</p>
        <h3 class="text-xl font-bold mt-4 mb-2">❄️ Tyre Inspection</h3><p>Check tread depth and consider winter tyres for snow.</p>
        <div class="bg-blue-50 p-4 rounded-lg mt-4"><p class="font-bold">🏔️ Stay safe this winter! Get your winter inspection now.</p></div>`,
        date: "April 28, 2025",
        readTime: "10 min read",
        category: "Seasonal Tips",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
        author: "Sarah Johnson",
        authorImg: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 3,
        title: "Buying a Used Car? Here's What to Check",
        excerpt: "Complete guide for pre-purchase inspection to avoid costly mistakes...",
        fullContent: `<p class="mb-4"><strong>Buying a used car can be stressful.</strong> Here's your pre-purchase inspection checklist:</p>
        <h3 class="text-xl font-bold mt-4 mb-2">🔍 Exterior Inspection</h3><p>Check for rust, dents, and mismatched paint.</p>
        <h3 class="text-xl font-bold mt-4 mb-2">🔍 Test Drive</h3><p>Listen for strange sounds and test acceleration and braking.</p>
        <div class="bg-blue-50 p-4 rounded-lg mt-4"><p class="font-bold">💰 Save thousands! Book a professional inspection before you buy.</p></div>`,
        date: "April 10, 2025",
        readTime: "12 min read",
        category: "Car Buying",
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&h=400&fit=crop",
        author: "Mike Brown",
        authorImg: "https://randomuser.me/api/portraits/men/2.jpg"
    }
];

// ========== GLOBAL VARIABLES ==========
let bookings = JSON.parse(localStorage.getItem("vi_bookings") || "[]");
let currentVehicle = null;

// ========== HELPER FUNCTIONS ==========
function showToast(msg, isError = false) { 
    const existingToast = document.querySelector('.success-toast');
    if (existingToast) existingToast.remove();
    
    let toast = document.createElement("div"); 
    toast.className = "success-toast"; 
    if (isError) toast.classList.add("error");
    toast.innerText = msg; 
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${isError ? '#ef4444' : '#10b981'};
        color: white;
        padding: 14px 24px;
        border-radius: 12px;
        z-index: 999999;
        font-weight: 500;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        pointer-events: none;
    `;
    document.body.appendChild(toast); 
    setTimeout(() => toast.remove(), 4000); 
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ========== RENDER CATEGORIES ==========
function renderCategories() {
    const container = document.getElementById("categoriesGrid");
    if (!container) return;
    container.innerHTML = vehicleCategories.map(cat => `
        <div class="category-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md text-center cursor-pointer" onclick="selectVehicle('${cat.id}')">
            <img src="${cat.image}" alt="${cat.name}" class="w-full h-28 object-cover">
            <div class="p-2"><i class="${cat.icon} text-blue-500 text-xl"></i><p class="font-semibold text-sm mt-1">${cat.name}</p></div>
        </div>
    `).join('');
}

// ========== SELECT VEHICLE ==========
window.selectVehicle = function(vehicleId) {
    currentVehicle = vehicleCategories.find(v => v.id === vehicleId);
    if (currentVehicle) {
        document.getElementById("selectedVehicleTitle").innerHTML = `${currentVehicle.name} Inspection Plans`;
        document.getElementById("selectedVehicleSubtitle").innerHTML = `Choose from our 3 professional inspection packages for ${currentVehicle.name}s`;
        
        const plans = [
            { name: "Basic Inspection", price: currentVehicle.plans.basic, features: "Visual check, Tyres, Lights, Basic diagnostics" },
            { name: "Standard Inspection", price: currentVehicle.plans.standard, features: "Full mechanical check, Engine diagnostics, Brakes, Suspension" },
            { name: "Premium Inspection", price: currentVehicle.plans.premium, features: "Complete 300-point inspection, Road test, Full scan, PDF report" }
        ];
        
        document.getElementById("plansContainer").innerHTML = plans.map(p => `
            <div class="border rounded-2xl p-6 shadow-lg card-hover bg-white dark:bg-gray-800">
                <h3 class="text-2xl font-bold">${p.name}</h3>
                <div class="text-3xl font-bold mt-2 text-blue-600">£${p.price}</div>
                <ul class="my-4 space-y-1">${p.features.split(',').map(f => `<li><i class="fas fa-check-circle text-green-500 mr-2"></i>${f.trim()}</li>`).join('')}</ul>
                <button onclick="openBookingModalWithPlan('${currentVehicle.name} - ${p.name}', ${p.price}, '${currentVehicle.name}')" class="btn-primary text-white w-full py-2 rounded-full mt-4">Book Now →</button>
            </div>
        `).join('');
        document.getElementById("plansSection").scrollIntoView({ behavior: "smooth" });
    }
};

// ========== RENDER CITIES ==========
function renderCities() {
    const container = document.getElementById("ukCitiesGrid");
    if (!container) return;
    container.innerHTML = ukCities.map(city => `<div class="bg-blue-50 dark:bg-gray-700 rounded-xl p-3 text-center"><i class="fas fa-map-marker-alt text-blue-500 text-xl"></i><p class="font-semibold mt-1">${city}</p></div>`).join('');
    
    const citySelect = document.getElementById("bookingCity");
    if(citySelect) citySelect.innerHTML = '<option value="">Select City</option>' + ukCities.map(c => `<option value="${c}">${c}</option>`).join('');
}

// ========== RENDER BLOG ==========
function renderBlog() {
    const container = document.getElementById("blogGrid");
    if (!container) return;
    
    container.innerHTML = blogPosts.map(blog => `
        <div class="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="relative overflow-hidden h-48">
                <img src="${blog.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute top-3 left-3"><span class="bg-blue-600 text-white text-xs px-2 py-1 rounded">${blog.category}</span></div>
            </div>
            <div class="p-5">
                <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span><i class="far fa-calendar-alt mr-1"></i>${blog.date}</span>
                    <span><i class="far fa-clock mr-1"></i>${blog.readTime}</span>
                </div>
                <h3 class="text-xl font-bold mb-2 hover:text-blue-600 cursor-pointer" onclick="viewBlog(${blog.id})">${blog.title}</h3>
                <p class="text-gray-600 text-sm line-clamp-2">${blog.excerpt}</p>
                <button onclick="viewBlog(${blog.id})" class="text-blue-600 font-semibold text-sm mt-3 inline-flex items-center gap-1 hover:gap-2 transition">Read More →</button>
            </div>
        </div>
    `).join('');
}

// ========== VIEW BLOG MODAL ==========
function viewBlog(blogId) {
    const blog = blogPosts.find(b => b.id === blogId);
    if (!blog) return;
    
    const modalHtml = `
        <div id="blogModal" class="modal-overlay active" style="display: flex;">
            <div class="booking-modal" style="max-width: 800px; max-height: 85vh; overflow-y: auto;">
                <span class="close-modal-btn" onclick="closeBlogModal()" style="position: absolute; top: 15px; right: 20px; font-size: 28px; cursor: pointer;">&times;</span>
                <img src="${blog.image}" class="w-full h-64 object-cover rounded-lg mb-4">
                <div class="flex flex-wrap gap-2 mb-3">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">${blog.category}</span>
                    <span class="text-gray-500 text-sm"><i class="far fa-calendar-alt mr-1"></i>${blog.date}</span>
                    <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i>${blog.readTime}</span>
                </div>
                <h2 class="text-2xl font-bold mb-4">${blog.title}</h2>
                <div class="flex items-center gap-3 mb-6 pb-4 border-b">
                    <img src="${blog.authorImg}" class="w-10 h-10 rounded-full">
                    <div><p class="font-semibold">${blog.author}</p><p class="text-sm text-gray-500">Expert</p></div>
                </div>
                <div class="prose max-w-none">${blog.fullContent}</div>
                <button onclick="closeBlogModal()" class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full">Close</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    if (modal) modal.remove();
}

// ========== OPEN BOOKING MODAL WITH PLAN ==========
window.openBookingModalWithPlan = function(planName, price, vehicleType) {
    document.getElementById("planNameInput").value = planName;
    document.getElementById("planPriceInput").value = price;
    document.getElementById("vehicleTypeInput").value = vehicleType;
    document.getElementById("bookingModal").classList.add("active");
    document.getElementById("professionalBookingForm").reset();
    document.querySelectorAll(".error-message").forEach(el => el.innerText = "");
    document.querySelectorAll("input").forEach(el => el.classList.remove("input-error"));
};

window.openBookingModal = function(planName, price, vehicleType) {
    document.getElementById("planNameInput").value = planName;
    document.getElementById("planPriceInput").value = price;
    document.getElementById("vehicleTypeInput").value = vehicleType;
    document.getElementById("bookingModal").classList.add("active");
    document.getElementById("professionalBookingForm").reset();
};

// ========== CLOSE MODAL ==========
document.getElementById("closeModal")?.addEventListener("click", () => document.getElementById("bookingModal").classList.remove("active"));
document.getElementById("bookingModal")?.addEventListener("click", function(e) { if(e.target === this) this.classList.remove("active"); });

// ========== BOOKING FORM SUBMIT ==========
document.getElementById("professionalBookingForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("bookingName").value.trim();
    const email = document.getElementById("bookingEmail").value.trim();
    const city = document.getElementById("bookingCity").value;
    
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("cityError").innerText = "";
    
    let isValid = true;
    if (!name) { document.getElementById("nameError").innerText = "Please enter your full name"; isValid = false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) { document.getElementById("emailError").innerText = "Please enter a valid email"; isValid = false; }
    if (!city) { document.getElementById("cityError").innerText = "Please select a city"; isValid = false; }
    if (!isValid) return;
    
    const plan = document.getElementById("planNameInput").value;
    const price = document.getElementById("planPriceInput").value;
    const vehicle = document.getElementById("vehicleTypeInput").value;
    
    window.pendingBooking = { id: Date.now(), vehicle, plan, price, city, customer: name, email, date: new Date().toLocaleString(), status: "Pending Payment" };
    document.getElementById("bookingModal").classList.remove("active");
    
    if (typeof openPaymentModal === 'function') {
        openPaymentModal(price, plan, name, email);
    } else {
        bookings.push(window.pendingBooking);
        localStorage.setItem("vi_bookings", JSON.stringify(bookings));
        showToast(`✅ Booking confirmed for ${name} - ${plan}`);
        window.pendingBooking = null;
    }
    e.target.reset();
});

// ========== SAVE BOOKING AFTER PAYMENT ==========
window.saveBookingAfterPayment = function(status) {
    if (window.pendingBooking) {
        window.pendingBooking.status = status;
        window.pendingBooking.paymentDate = new Date().toLocaleString();
        bookings.push(window.pendingBooking);
        localStorage.setItem("vi_bookings", JSON.stringify(bookings));
        showToast(`✅ Payment successful! Booking confirmed for ${window.pendingBooking.customer}.`);
        window.pendingBooking = null;
        if (document.getElementById("adminPage")?.classList.contains("active") && typeof renderAdminPage === 'function') renderAdminPage();
    }
};

// ========== COUNTER ANIMATION ==========
function animateCounter(element, target) {
    if (!element) return;
    let current = 0;
    const steps = 60;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) { element.innerText = target.toLocaleString(); clearInterval(timer); }
        else { element.innerText = Math.floor(current).toLocaleString(); }
    }, 33);
}

function startCounters() {
    animateCounter(document.getElementById("dealersCount"), 248);
    animateCounter(document.getElementById("carsSoldCount"), 15420);
    animateCounter(document.getElementById("reviewsCount"), 8650);
}

// ========== RENDER COUNTRIES MARQUEE ==========
function renderCountriesMarquee() {
    const container = document.getElementById("countriesMarquee");
    if (!container) return;
    
    const countries = [
        { name: "United Kingdom", flagCode: "gb" },
        { name: "United States", flagCode: "us" },
        { name: "Australia", flagCode: "au" },
        { name: "Spain", flagCode: "es" },
        { name: "Canada", flagCode: "ca" },
        { name: "New Zealand", flagCode: "nz" },
        { name: "Italy", flagCode: "it" }
    ];
    const allCountries = [...countries, ...countries];
    container.innerHTML = allCountries.map(country => `
        <div class="country-card">
            <div class="flag-circle"><img src="https://flagcdn.com/w80/${country.flagCode}.png" class="flag-img"></div>
            <span class="country-name">${country.name}</span>
        </div>
    `).join('');
}

// ========== RENDER DEALERS ==========
function renderDealers() {
    const container = document.getElementById("dealersList");
    if (!container) return;
    container.innerHTML = dealers.map(d => `<div class="flex justify-between items-center border-b pb-3"><div><span class="font-bold">${d.name}</span><div class="text-sm text-gray-500">★ ${d.rating} (${d.location})</div></div><div class="text-right"><span class="text-green-600 font-bold">${d.cars}+ cars sold</span></div></div>`).join('');
}

// ========== POPULATE COUNTRY DROPDOWN ==========
function populateCountryDropdown() {
    const countrySelect = document.getElementById("bookingCountry");
    if (!countrySelect) return;
    countrySelect.innerHTML = '<option value="">-- Select Country --</option>';
    countriesData.forEach(country => {
        const option = document.createElement("option");
        option.value = country.name;
        option.textContent = `${country.flag} ${country.name}`;
        countrySelect.appendChild(option);
    });
}

// ========== UPDATE CITY DROPDOWN ==========
function updateCityDropdown() {
    const countrySelect = document.getElementById("bookingCountry");
    const citySelect = document.getElementById("bookingCity");
    if (!countrySelect || !citySelect) return;
    const selectedCountry = countrySelect.value;
    if (!selectedCountry) {
        citySelect.innerHTML = '<option value="">-- First Select Country --</option>';
        return;
    }
    const country = countriesData.find(c => c.name === selectedCountry);
    if (country && country.cities) {
        citySelect.innerHTML = '<option value="">-- Select City --</option>';
        country.cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    } else {
        citySelect.innerHTML = '<option value="">-- No cities available --</option>';
    }
}

// ========== ADMIN PAGE RENDER ==========
function renderAdminPage() {
    const priceDiv = document.getElementById("adminPriceList");
    if (!priceDiv) return;
    priceDiv.innerHTML = vehicleCategories.map(v => `<div class="flex justify-between border-b p-3"><span><strong>${v.name}</strong> - Basic:£${v.plans.basic} | Standard:£${v.plans.standard} | Premium:£${v.plans.premium}</span><button onclick="editVehiclePrices('${v.id}')" class="bg-blue-500 text-white px-3 py-1 rounded text-sm">Edit</button></div>`).join('');
    
    const totalRevenue = bookings.reduce((sum, b) => sum + (parseInt(b.price) || 0), 0);
    const statBookings = document.getElementById("statBookings");
    const statRevenue = document.getElementById("statRevenue");
    const statVehicles = document.getElementById("statVehicles");
    const statCities = document.getElementById("statCities");
    const bookingListAdmin = document.getElementById("bookingListAdmin");
    
    if (statBookings) statBookings.innerText = bookings.length;
    if (statRevenue) statRevenue.innerText = `£${totalRevenue}`;
    if (statVehicles) statVehicles.innerText = vehicleCategories.length;
    if (statCities) statCities.innerText = ukCities.length;
    if (bookingListAdmin) {
        bookingListAdmin.innerHTML = bookings.map(b => `<tr class="border-b"><td class="p-2">${b.customer}</td><td class="p-2">${b.vehicle}</td><td class="p-2">${b.plan}</td><td class="p-2">${b.city}</td><td class="p-2">${b.date}</td></tr>`).join('');
    }
}

window.editVehiclePrices = function(vehicleId) {
    const vehicle = vehicleCategories.find(v => v.id === vehicleId);
    if(vehicle) {
        const newBasic = prompt(`Basic price for ${vehicle.name} (current: £${vehicle.plans.basic})`, vehicle.plans.basic);
        const newStandard = prompt(`Standard price (current: £${vehicle.plans.standard})`, vehicle.plans.standard);
        const newPremium = prompt(`Premium price (current: £${vehicle.plans.premium})`, vehicle.plans.premium);
        if(newBasic) vehicle.plans.basic = parseInt(newBasic);
        if(newStandard) vehicle.plans.standard = parseInt(newStandard);
        if(newPremium) vehicle.plans.premium = parseInt(newPremium);
        renderAdminPage();
        if(currentVehicle && currentVehicle.id === vehicleId) selectVehicle(vehicleId);
        showToast(`✅ ${vehicle.name} prices updated!`);
    }
};

// ========== ADMIN LOGIN ==========
document.getElementById("navAdminBtn").onclick = () => document.getElementById("adminLoginModal").classList.add("active");
document.getElementById("closeAdminModal").onclick = () => document.getElementById("adminLoginModal").classList.remove("active");
document.getElementById("adminLoginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("adminUsername").value;
    const pass = document.getElementById("adminPassword").value;
    if(user === "admin" && pass === "admin123") {
        document.getElementById("adminLoginModal").classList.remove("active");
        document.getElementById("mainContent").style.display = "none";
        document.getElementById("adminPage").classList.add("active");
        renderAdminPage();
    } else { alert("Invalid credentials! Use admin / admin123"); }
});
document.getElementById("backToSiteBtn")?.addEventListener("click", () => {
    document.getElementById("adminPage").classList.remove("active");
    document.getElementById("mainContent").style.display = "block";
});

// ========== DARK MODE ==========
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => { document.body.classList.toggle("dark"); localStorage.setItem("darkMode", document.body.classList.contains("dark")); });
if(localStorage.getItem("darkMode") === "true") document.body.classList.add("dark");

// ========== CHATBOT ==========
const chatWin = document.getElementById("chatWindow"), chatToggle = document.getElementById("chatbotToggle"), closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendChat"), chatInput = document.getElementById("chatInput"), chatMsgs = document.getElementById("chatMessages");
function addBotMsg(txt) { let div=document.createElement("div"); div.className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg text-sm mt-1"; div.innerText=txt; chatMsgs.appendChild(div); chatMsgs.scrollTop=chatMsgs.scrollHeight; }
function addUserMsg(txt) { let div=document.createElement("div"); div.className="bg-blue-100 dark:bg-blue-900 self-end text-right p-2 rounded-lg text-sm mt-1 ml-auto max-w-[80%]"; div.innerText=txt; chatMsgs.appendChild(div); chatMsgs.scrollTop=chatMsgs.scrollHeight; }
chatToggle.onclick = () => chatWin.style.display = chatWin.style.display === "flex" ? "none" : "flex";
closeChat.onclick = () => chatWin.style.display = "none";
sendBtn.onclick = () => { let msg=chatInput.value.trim(); if(!msg) return; addUserMsg(msg); chatInput.value=""; setTimeout(()=> handleBotReply(msg), 400); };
function handleBotReply(msg) { let lower = msg.toLowerCase(); if(lower.includes("book")) addBotMsg("Select a vehicle and click Book Now!"); else addBotMsg("We inspect all vehicles! Click on any category to see plans."); }
addBotMsg("Hello! Select a vehicle category to see inspection plans!");

// ========== CONTACT FORM ==========
document.getElementById("contactForm")?.addEventListener("submit", (e) => { e.preventDefault(); showToast("Thanks! We'll contact you soon."); e.target.reset(); });

// ========== EVENT LISTENERS ==========
document.getElementById("bookingCountry")?.addEventListener("change", function() {
    updateCityDropdown();
    document.getElementById("cityError").innerText = "";
});

// ========== INITIALIZE ALL ==========
document.addEventListener("DOMContentLoaded", function() {
    renderCategories();
    renderCities();
    renderBlog();
    renderDealers();
    renderCountriesMarquee();
    populateCountryDropdown();
    updateCityDropdown();
    startCounters();
});