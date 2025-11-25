🛍️ StyleShop – E-commerce Frontend

A modern and responsive E-commerce UI built using HTML, CSS, JavaScript, and Bootstrap 5.
This project includes product filtering, a dynamic shopping cart with localStorage, and a stylish UI inspired by real online stores.

🚀 Features
🖥️ UI & Pages

Responsive Landing Page with hero section

Product grid with hover animations

Category filter (All, Electronics, Fashion)

Modern navbar & footer

🛒 Shopping Cart System

Add to Cart

Increase / Decrease quantity

Remove items

Persistent cart using localStorage

Real-time total price calculation

Smooth toast notification when adding items

🎨 Styling

Custom theme using CSS variables

Smooth animations & transitions

Fully responsive design

Uses Bootstrap 5 + FontAwesome + Google Fonts

📂 Project Structure
/project-folder
│── index.html       # Main HTML page
│── styles.css       # Custom styling + theme
│── main.js          # Full cart logic + filtering + UI interactions
│── README.md        # Project documentation

🧩 How It Works
Products

Products are declared inside main.js as an array:

const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99, category: "Electronics", image: "..." },
  ...
];

Filtering

Based on selected category:

filterProducts(category);

Shopping Cart

Cart items are saved in localStorage:

localStorage.setItem('shoppingCart', JSON.stringify(cart));

Toast Notification

A visual confirmation appears after adding an item.

📸 Demo Screenshot (Optional)

You can add a screenshot like:

![Preview](screenshot.png)

🛠️ Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS)

Bootstrap 5

Font Awesome

Google Fonts (Poppins)

📦 How to Run the Project

Download or clone the repo:

git clone https://github.com/SaadAbdelRazek/Mini-E-commerce-Store.git


Open index.html in your browser.

No backend needed — it's fully frontend-based.

✨ Future Improvements

Backend integration (Laravel / Node.js / Django)

Real checkout/payment page

Wishlist system

Pagination & search

Admin dashboard

📄 License

This project is open-source — feel free to use and modify it.
