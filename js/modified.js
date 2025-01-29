// References
const app = document.getElementById("app");

// Pages
const pages = {
    home: `
<div class="main-container">
  <!-- Left Section -->
<div class="left-section">
  <div class="image-container">
    <img src="assets/logo/logo-nobg.png" alt="Wahran Restaurant & Cafe Logo" class="logo-image" />
    <img src="assets/images/home.jpg" alt="Restaurant" class="restaurant-image" />
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

</div>
<div class="mid-container">
        <div class="midcontent-section">
            <h2 class="title">
                <span>AUTHENTIC</span>
                <span>TIMELESS</span>
                <span>EXQUISITE</span>
            </h2>
            <p class="description">
                Embark on a culinary journey through the heart of Algeria. Our menu celebrates the rich flavors of Mediterranean and Algerian traditions, featuring a selection of carefully curated seafood and local delicacies.
                A dining experience that brings together culture, passion, and taste.
            </p>
            <button class="menu-btn">Explore Our Menu</button>
        </div>
        <div class="mid-image">
            <img src="assets/images/Algerian Salad Dz.jpg" alt="Mediterranean dishes collection">
        </div>
    </div>


    `,
    menu: `
        <div id="menu">
            <h2 align="center">Menu</h2>
            <div id="menu-container" align="center">
            <select name="menu-category" id="menu-category" align="center">
                <option value="All">All</option>
                <option value="Pizza">Pizza</option>
                <option value="Salad">Salad</option>
            </select>
            </div>
          
            <div class="menu-container" id="menu-cards">
                ${menuData.map(item => `
                    <div class="menu-card" data-category="${item.category}">
                        <img src="${item.image}" alt="${item.title}">
                        <h3>${item.title}</h3>
                        <a>${item.description}</a>
                        <p>AED 15.99</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `,
    about: `
        <div id="about">
            <h2>About Us</h2>
            <p>We are a family-owned restaurant dedicated to serving high-quality food with a smile.</p>
        </div>
    `,
    contact: `
        <div id="contact">
            <h2>Contact Us</h2>
            <p>Visit us or give us a call at (123) 456-7890.</p>
            <div class="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509719!2d-122.40136228468173!3d37.785834779757734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5c5e6cb5%3A0x37e4b7d75b87c43d!2sGoogle%20San%20Francisco!5e0!3m2!1sen!2sus!4v1616023504044!5m2!1sen!2sus"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    `
};

// Load Page Content
function loadPage(page) {
    app.innerHTML = pages[page];

    // Initialize filtering functionality on the menu page
    if (page === 'menu') {
        initializeMenuFilter();
    }
}

// Function to render menu dynamically
function renderMenu(category) {
    const menuCardsContainer = document.getElementById('menu-cards');
    const filteredData = category === "All" ? menuData : menuData.filter(item => item.category === category);

    menuCardsContainer.innerHTML = filteredData.map(item => `
        <div class="menu-card" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <a>${item.description}</a>
            <p>AED 15.99</p>
        </div>
    `).join("");
}

// Function to initialize the dropdown filter
function initializeMenuFilter() {
    const dropdown = document.getElementById("menu-category");

    dropdown.addEventListener("change", () => {
        const selectedCategory = dropdown.value;
        renderMenu(selectedCategory);
    });

    // Initial rendering of all menu items
    renderMenu("All");
}

// Load Header and Footer
function loadHeader() {
    const headerHTML = `
        <nav class="navbar">
            <div class="hamburger">
                <span></span><span></span><span></span>
            </div>
            <ul class="nav-links">
            <br>
                <li><a href="#home" class="nav-link" data-page="home">HOME</a></li>
                <li><a href="#menu" class="nav-link" data-page="menu">MENU</a></li> 
                <li><a href="#contact" class="nav-link" data-page="contact">CONTACT</a></li>
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
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                    <a href="#"><i class="fa fa-motorcycle"></i></a>
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
    if (window.scrollY > 300) { // Show button after scrolling 300px
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
