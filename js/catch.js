// catch.js

// Get the current page URL
const currentUrl = window.location.href;

// Create a URL object
const url = new URL(currentUrl);

// Use URLSearchParams to extract query parameters
const params = new URLSearchParams(url.search);

// Get the value of the "title" parameter
const category = params.get("category");
const title = params.get("title");

// Check if the title exists
if (title || category) {
  // Log the value to the console
  console.log("Title from URL:", title);

  // Display the title on the page
  const titleElement = document.createElement("h1");
  const categoryElement = document.createElement("h1");
  categoryElement.textContent = `Category: ${category}`;
  titleElement.textContent = `Title: ${title}`;
  document.body.appendChild(titleElement);
  document.body.appendChild(categoryElement);

} else {
  console.log("No 'title' parameter found in the URL.");
  const errorElement = document.createElement("p");
  errorElement.textContent = "No 'title' parameter found in the URL.";
  document.body.appendChild(errorElement);
}
