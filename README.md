<div align="center">

# 🛍️ StyleShop – Modern E-commerce Frontend

responsive and elegant **E-commerce UI** built with  
**HTML, CSS, JavaScript, and Bootstrap 5**.  
Includes product filtering, a dynamic shopping cart with localStorage, and a polished UI inspired by real online stores.

<img src="https://img.shields.io/badge/Status-Finished-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-blue?style=for-the-badge" />

</div>

---


---

## 🚀 Features

### 🎨 UI / Frontend
- Modern landing page with hero section  
- Fully responsive layout  
- Clean product grid with hover animations  
- Category filtering (All / Electronics / Fashion)  
- Professional navbar and footer design  

### 🛒 Shopping Cart System
- Add to cart  
- Increase / decrease item quantity  
- Remove items  
- Real-time total price calculation  
- Toast notification when adding items  
- Cart persists using **localStorage**  

---

## 📂 Project Structure

📦 project
├── index.html → Main interface
├── styles.css → Custom styles & animations
├── main.js → Cart logic & product filtering
└── README.md → Project documentation


---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure & layout |
| **CSS3** | Styling, gradients, animations |
| **Bootstrap 5** | Grid system & components |
| **JavaScript (Vanilla)** | Cart logic, filtering, DOM handling |
| **Font Awesome** | Icons |
| **Google Fonts (Poppins)** | Modern typography |
| **LocalStorage** | Save cart data |

---

## 🧠 How It Works

### 🔹 Product Data  
Products are stored in `main.js`:

```js
const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99, category: "Electronics", image: "..." },
  ...
];


🔹 Filtering
Products are dynamically filtered based on category:
filterProducts(category);


🔹 Cart System
Items are added to cart and saved persistently:
localStorage.setItem("shoppingCart", JSON.stringify(cart));

📦 How to Run
Download or clone the repository:
git clone https://github.com/SaadAbdelRazek/Mini-E-commerce-Store.git

Open:
index.html
The project works instantly—no backend required.

🧭 Future Enhancements

Checkout page

Admin dashboard

Search functionality

Backend integration (Laravel / Node.js)
