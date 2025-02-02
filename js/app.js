// References
const app = document.getElementById("app");

// Clear Hash Function with Exceptions
// Clear Hash Function
function clearHash(a, f) {
    const currentHash = window.location.hash.substring(1).split('?')[0];
    if (currentHash !== a & f) {
        history.pushState("", document.title, window.location.pathname);
    }
}

// Function to clear hash after dropdown selected
function clearAllHash() {
    history.pushState("", document.title, window.location.pathname);
}

// Pages
const pages = {
    home: `
    <div class="main-container" align="center" style="">
        <!-- Left Section -->
        <div class="left-section">
            <div class="image-container">
                <img src="assets/logo/logo-nobg.png" alt="Wahran Restaurant & Cafe Logo" class="logo-image" />
                <img src="assets/images/bg/home.jpeg" alt="Restaurant" class="restaurant-image" />
            </div>
        </div>
    
    
        <!-- Right Section -->
        <div class="right-section">
            <h3> An Oasis of Flavors
                <br>in the Heart
                <br>of Dubai
            </h3>
            <p>
                An Algerian haven in the heart of Dubai, where Mediterranean charm meets vibrant tradition.
                Discover a hidden gem blending cultural essence with exquisite dining.
            </p>
            <br>
            <p class="tagline">
                "Mediterranean Essence with Algerian Charm"
            </p>
        </div>
    </div>
    
    <div class="mid-container">
        <div class="midcontent-section">
            <h2 class="title">
                <span>AUTHENTIC</span>
                <span>TIMELESS</span>
                <span>EXQUISITE</span>
            </h2>
            <p class="description">
                Embark on a culinary journey through the heart of Algeria. Our menu celebrates the rich flavors of
                Mediterranean and Algerian traditions, featuring a selection of carefully curated seafood and local
                delicacies.
                A dining experience that brings together culture, passion, and taste.
            </p>
            <button class="menu-btn">Explore Our Menu</button>
        </div>
        <div class="mid-image">
            <img src="assets/images/home/mid-section.jpeg" alt="Mediterranean dishes collection">
        </div>
    </div>
        <div class="mid-container">
            <div class="mid-image">
                <div class="list-wrapper">
                    <ul class="list">
                        <li class="item">
                            <div class="corousal-content">
                                <img src="assets/images/home/c1.jpeg" alt="Mediterranean dishes collection">
                            </div>
                        </li>
                        <li class="item">
                            <div class="corousal-content">
                                <img src="assets/images/home/c2.jpeg" alt="Mediterranean dishes collection">
                            </div>
                        </li>
                        <li class="item">
                            <div class="corousal-content">
                                <img src="assets/images/home/c3.jpeg" alt="Mediterranean dishes collection">
                            </div>
                        </li>
                        <li class="item">
                            <div class="corousal-content">
                                <img src="assets/images/home/c4.jpg" alt="Mediterranean dishes collection">
                            </div>
                        </li>
                        <li class="item">
                            <div class="corousal-content">
                                <img src="assets/images/home/c5.jpeg" alt="Mediterranean dishes collection">
                            </div>
                        </li>
                        <li class="item">
                            <div class="corousal-content">
                                <img src="assets/images/home/c6.jpg" alt="Mediterranean dishes collection">
                            </div>
                        </li>
                    </ul>
                    <button onclick="handleClick('previous')" class="button button--previous" type="button">➜</button>
                    <button onclick="handleClick('next')" class="button button--next" type="button">➜</button>
                </div>
            </div>
            <div class="midcontent-section">
                <h2 class="title">
                    <span>AUTHENTIC</span>
                    <span>TIMELESS</span>
                    <span>EXQUISITE</span>
                </h2>
                <p class="description">
                    Embark on a culinary journey through the heart of Algeria. Our menu celebrates the rich flavors of
                    Mediterranean and Algerian traditions, featuring a selection of carefully curated seafood and local
                    delicacies.
                    A dining experience that brings together culture, passion, and taste.
                </p>
                <button class="menu-btn">Explore Our Menu</button>
            </div>
        </div>


        <div class="end-container">
        <div class="base-image-wrapper">
            <div class="black-background">
            <div class="text-content">
                    <h2>Experience the True Taste of Fine Dining</h2>
                    <p></p>
                </div>
            </div>
            <div class="overlay-image-wrapper">
                <img src="./assets/images/bg/algerian food.jpg" alt="Overlay image" class="overlay-image">
            </div>
        </div>
    </div>


    </div>
    `,
    menu: `
        <div id="menu">
            <h2 align="center">Bon Appéti</h2>
            <div id="menu-container" align="center">
            <select name="menu-category" id="menu-category" align="center">
                <option value="All">View Categories</option>
                <option value="All">All Items</option>
                <option value="Algerian Traditional">Algerian Traditional</option>
                <option value="Salads">Salads</option>
                <option value="Couscous">Couscous</option>
                <option value="Tadjines">Tadjines</option>
                <option value="Special Dishes">Special Dishes</option>
                <option value="International food">International food</option>
                <option value="Sandwiches">Sandwiches</option>
                <option value="Tacos">Tacos</option>
                <option value="Panini">Panini</option>
                <option value="Traditional sweets">Traditional sweets</option>
                <option value="Beverages">Beverages</option>
            </select>
            </div>
          

            <div class="menu-container" id="menu-cards">
                ${menuData.map(item => `
                    <div class="menu-card" data-category="${item.category}">
                    <a href="#view?category=${item.category}&title=${item.title}" class="nav-link" data-page="view">
                    <img src="${item.image}" alt="${item.title}">
                    </a>
                        <h3>${item.title}</h3>
                        <a>${item.description}</a>
                        <p>AED 15.99</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `,
    view: `
        <div id="view">
            
        </div>
    `,
    contact: `
         <div id="menu">
            <h2 align="center">Get In Touch</h2>
            <div id="contact-container" align="center">
                    <div class="container">
                    <div>
                        <div class="content">
                            <h2 class="corousal">For Reservation</h2>
                            <span><a href="tel:+9710509277053">+971 0509277053</a></span>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <h2 class="corousal">Email Us</h2>
                            <span><a href="mailto:support@wahran-cafe.com">support@wahran-cafe.com</a></span>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <h2 class="corousal">For Delivery</h2>
                            <span><a href="tel:+9710509277053">+971 0509277053</a></span>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <h2 class="corousal">Catering</h2>
                            <span><a href="tel:+9710509277053">+971 0509277053</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="social-header">    
        <h2 align="center" >Find Us On</h2>
        </div>
        <div class="social-container">

    <div class="social-item">
        <a href="https://maps.app.goo.gl/5WWoQBYTkF8RdypK7" target="#">
            <img src="./assets/icons/maps.png" alt="">
        </a>
    </div>
    <div class="social-item">
        <a href="https://www.talabat.com/uae/wahran-restaurant-cafe" target="#">
            <img src="./assets/icons/talabat.png" alt="">
        </a>
    </div>
    <div class="social-item">
        <a href="" target="#">
            <img src="./assets/icons/tripadvisor.png" alt="">
        </a>
    </div>
    <div class="social-item">
        <a href="" target="#">
            <img src="./assets/icons/fb.png" alt="">
        </a>
    </div>
</div>

    `
};



// Load Page Content
function loadPage(page) {
    // Clear the hash unless the current page is the one requiring parameters
    clearHash('view,menu');

    // Load the page content
    app.innerHTML = pages[page] || `<h1>Oops ! - Page Not Found</h1>`;

    // Additional logic for specific pages
    if (page === "menu") {
        // Initialize the menu filter when the menu page is loaded
        initializeMenuFilter();
    } else if (page === "view") {
        loadViewPage();
    }

    //  Auto-scroll to top on page load
    window.scrollTo({ top: 10, behavior: "smooth" });

    // Attach click event to all <a> tags again (since content is dynamically loaded)
    document.querySelectorAll("a[href]").forEach(link => {
        link.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });


}


// Function to render menu dynamically
function renderMenu(category) {
    // Get the current hash and parse the category from the URL if present
    const hash = window.location.hash.substring(1);
    const [page, params] = hash.split('?');
    const urlParams = new URLSearchParams(params);
    const backlinkedcategory = urlParams.get('category'); // Get category from URL if present

    // If a backlinked category is found in the URL, use it. Otherwise, fallback to the provided category.
    const finalCategory = backlinkedcategory || category;

    // Filter the menu based on the selected category (either from the URL or the passed category)
    const menuCardsContainer = document.getElementById('menu-cards');
    const filteredData = finalCategory === "All" ? menuData : menuData.filter(item => item.category === finalCategory);

    // Render the filtered menu items
    menuCardsContainer.innerHTML = filteredData.map(item => `
        <div class="menu-card" data-category="${item.category}">
            <a href="#view?category=${encodeURIComponent(item.category)}&title=${encodeURIComponent(item.title)}&price=${encodeURIComponent(item.price)}" class="menu-item-link">
            <img src="${item.image}" alt="${item.title}">
            </a>
            <h3>${item.title}</h3>
            <a class="item-description">${item.description}</a>
            <p>AED ${item.price}</p>
        </div>
    `).join("");
}



// Function to initialize the dropdown filter
function initializeMenuFilter() {
    const dropdown = document.getElementById("menu-category");

    dropdown.addEventListener("change", () => {
        clearAllHash();
        const selectedCategory = dropdown.value;
        renderMenu(selectedCategory);

        // Reattach click event listeners to dynamically generated links
        attachMenuItemClickListeners();
    });

    // Initial rendering of all menu items
    renderMenu("All");

    // Attach event listeners to menu items
    attachMenuItemClickListeners();
}

function attachMenuItemClickListeners() {
    const menuItemLinks = document.querySelectorAll('.menu-item-link');

    menuItemLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Get the target page and parameters from the href
            const href = event.target.closest('a').getAttribute('href');
            const [page, params] = href.substring(1).split('?');
            window.location.hash = href; // Update the hash to trigger `hashchange`

            // Load the appropriate page (if needed)
            if (page === "view") {
                loadViewPage();
            }
        });
    });
}




// Load View Page Content
function loadViewPage() {
    const hash = window.location.hash.substring(1);
    const [page, params] = hash.split('?');
    const urlParams = new URLSearchParams(params);
    const category = urlParams.get('category') || "Unknown";
    const title = urlParams.get('title') || "Untitled";
    const price = urlParams.get('price') || "Untitled";

    // Find the selected item
    const selectedItem = menuData.find(item => item.title === title);

    // Generate View Content
    const viewContent = `
    <div class="return-menu">
    <div class="back-button">
    <a href="#menu?category=${category}" class="back-to-menu" data-page="menu">
    <i class="fa fa-arrow-circle-left" aria-hidden="true"> </i>
     Back </a>
    </div>
        <div class="return-section">
            <a href="#menu?category=${category}" class="back-to-menu" data-page="menu">Home / Categories / ${category}</a>
            <span class="back-to-menu"> / ${title}</span>
        </div>
    </div>

    <div class="item-main-container" align="center">
        <!-- Left Section -->
        <div class="item-left-section">
            <div class="item-image-container">
                <img src="${selectedItem ? selectedItem.image : ''}" alt="${selectedItem ? selectedItem.title : 'Image not found'}" class="item-image" />
            </div>
        </div>

        <!-- Right Section -->
        <div class="item-right-section">
            <h3>${title}</h3>
            <p>AED ${price}</p>
            <br>
            <p class="tagline">Category: #${category}</p>
        </div>
    </div>

    <br>
    <h2 class="related">Related Dishes</h2>
    <div class="related-container" id="related-cards">
        
        <div class="related-card" id="related-card">
        
        </div>
    </div>
    `;

    // Render the view content
    document.getElementById("view").innerHTML = viewContent;

    // Call function to display related dishes
    displayRelatedDishes(category, title);
}

// Function to display related dishes based on the category
function displayRelatedDishes(category, currentTitle) {
    const menuCardsContainer = document.getElementById('related-cards');

    if (!menuCardsContainer) {
        console.error("Element with ID 'related-card' not found.");
        return;
    }

    // Filter menuData based on the category, but exclude the current item
    const filteredData = menuData.filter(item => item.category === category && item.title !== currentTitle);

    // Render the filtered menu items
    menuCardsContainer.innerHTML = filteredData.length > 0
        ? filteredData.map(item => `
            <div class="related-card" data-category="${item.category}">
                <a href="#view?category=${encodeURIComponent(item.category)}&title=${encodeURIComponent(item.title)}&price=${encodeURIComponent(item.price)}" class="menu-item-link">
                    <img src="${item.image}" alt="${item.title}">
                </a>
                <h3>${item.title}</h3>
                <p>AED ${item.price}</p>
            </div>
        `).join("")
        : "<p>No related dishes found.</p>"; // Show message if no related dishes
}


// Listen for Hash Changes
window.addEventListener("hashchange", () => {
    const hash = window.location.hash.substring(1);
    const [page] = hash.split('?');
    loadPage(page);
});


// Initial Page Load
window.addEventListener("load", () => {
    const hash = window.location.hash.substring(1);
    const page = hash.split('?')[0] || "home";
    loadPage(page);
});

// Example navigation links (dynamic or from HTML)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetPage = event.target.getAttribute('href').substring(1).split('?')[0];
        loadPage(targetPage);
    });
});





// Load Header and Footer
function loadHeader() {
    const headerHTML = `
        <nav class="navbar">
            <div class="hamburger">
                <span></span><span></span><span></span>
            </div>
            <ul class="nav-links">
            <br>
                <li><a href="#home" onclick="clearAllHash();" class="nav-link" data-page="home">HOME</a></li>
                <li><a href="#menu" onclick="clearHash();" class="nav-link" data-page="menu">MENU</a></li> 
                <li><a href="#contact" onclick="clearAllHash();" class="nav-link" data-page="contact">CONTACT</a></li>
            </ul>
        </nav>
    `;
    document.getElementById('header').innerHTML = headerHTML;

    // Get references after elements are created
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    // Hamburger menu toggle with animation
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });

    // Set up navigation
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            e.target.classList.add('active');

            // Get the data-page attribute value
            const page = e.target.dataset.page;

            // Load the page based on data-page
            loadPage(page);

            // Close the hamburger menu if present
            if (hamburger && navMenu) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    });
}

function loadFooter() {
    const footerHTML = `
        <div class="footer-container">
            <div class="footer-logo">
        <img src="assets/logo/logo-nobg.png" alt="Wahran Restaurant & Cafe Logo" class="footer-logo-image" />
            </div>
            <div class="footer-info">
                <p>19A St Jawhara Metro Hotel ground Floor - Deira, Dubai</p>
                <p>Open Daily From 12:00 PM - 1:00 AM</p>
                <p>+971 0509277053 | <a href="mailto:info@x-group.com">info@x-group.com</a></p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
                <a href="#" class="privacy-policy">Privacy Policy</a>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Wahran Restaurant & Cafe. All Rights Reserved</p>
            </div>
            <div class="footer-buttons">
                <a href="#" class="scroll-top"><i class="fas fa-arrow-up"></i></a>
            </div>
        </div>  
    `;
    document.getElementById('footer').innerHTML = footerHTML;


    // Scroll to Top functionality
    document.addEventListener("scroll", function () {
        const scrollButton = document.querySelector(".scroll-top");
        if (window.scrollY > 400) { // Show button after scrolling 300px
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    // Smooth scroll when scroll-to-top button is clicked
    document.querySelector(".scroll-top").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll effect
        });
    });
}

// Initialize
loadHeader();
loadFooter();
loadPage("menu");

// Hamburger menu toggle
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

