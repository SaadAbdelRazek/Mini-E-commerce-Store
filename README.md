StyleShop E-Commerce

StyleShop is a modern, responsive front-end e-commerce website built with vanilla JavaScript, HTML5, and CSS3. It features dynamic product rendering, a functional shopping cart with state management, and category filtering.

🚀 Features

Responsive Design: Fully responsive layout using Bootstrap 5 and custom CSS for mobile, tablet, and desktop views.

Dynamic Product Grid: Products are rendered dynamically from a JavaScript object array.

Product Filtering: Filter products by categories (Electronics, Fashion, All).

Shopping Cart System:

Add items to the cart.

Adjust quantities directly in the cart.

Remove items.

Real-time total price calculation.

Local Storage Persistence: Cart data survives page refreshes.

UI/UX Enhancements:

Offcanvas cart drawer.

Toast notifications when adding items.

Pulse animations for cart updates.

Hover effects on product cards.

🛠️ Technologies Used

HTML5: Semantic markup structure.

CSS3: Custom styling, variables for theming, and animations.

JavaScript (ES6+): logic for state management, DOM manipulation, and local storage.

Bootstrap 5.3: Grid system, utility classes, and components (Navbar, Offcanvas, Modals).

Font Awesome: Icons for UI elements.

Google Fonts: Typography (Poppins).

📂 Project Structure

├── index.html      # Main HTML structure
├── styles.css      # Custom styles and variables
├── main.js         # Application logic and data
└── README.md       # Project documentation


📦 Setup & Installation

Since this is a static front-end project, no build process or package manager is required.

Clone the repository:

git clone [https://github.com/yourusername/styleshop.git](https://github.com/yourusername/styleshop.git)


Navigate to the project folder:

cd styleshop


Run the project:

Open index.html directly in your browser.

OR use a local server like Live Server (VS Code Extension) for the best experience.

💻 Usage

Browsing: Scroll down to view the "Featured Products" section.

Filtering: Use the buttons above the product grid to filter by "Electronics" or "Fashion".

Buying: Click "Add to Cart" on any item. A toast notification will appear confirming the action.

Managing Cart: Click the Cart icon in the navbar to open the side drawer. You can increase/decrease quantities or remove items here.

Checkout: The checkout button is a placeholder for future backend integration.

🎨 Customization

To change the color scheme, modify the CSS variables in the :root section of styles.css:

:root {
    --primary: #6C63FF;  /* Main Brand Color */
    --secondary: #FF6584; /* Accent Color */
    --dark: #2A2D3E;      /* Dark Theme Elements */
    /* ... */
}


📄 License

This project is open source and available under the MIT License.
