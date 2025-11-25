   // Product Data Structure with real images
        const products = [
            {
                id: 1,
                name: "Wireless Headphones",
                price: 99.99,
                category: "Electronics",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 2,
                name: "Smartphone Pro",
                price: 599.99,
                category: "Electronics",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 3,
                name: "Laptop Ultra",
                price: 999.99,
                category: "Electronics",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 4,
                name: "Designer T-Shirt",
                price: 29.99,
                category: "Fashion",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 5,
                name: "Slim Fit Jeans",
                price: 49.99,
                category: "Fashion",
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 6,
                name: "Premium Sneakers",
                price: 79.99,
                category: "Fashion",
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 7,
                name: "Smart Watch",
                price: 199.99,
                category: "Electronics",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 8,
                name: "Summer Dress",
                price: 39.99,
                category: "Fashion",
                image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            }
        ];

        // Cart Management
        let cart = [];

        // DOM Elements
        const productsGrid = document.getElementById('productsGrid');
        const cartItems = document.getElementById('cartItems');
        const cartBadge = document.getElementById('cartBadge');
        const totalPrice = document.getElementById('totalPrice');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const toastNotification = document.getElementById('toastNotification');
        const toastMessage = document.getElementById('toastMessage');

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            loadCartFromStorage();
            renderProducts(products);
            setupEventListeners();
        });

        // Event Listeners Setup
        function setupEventListeners() {
            // Filter buttons
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active state
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Filter products
                    const category = this.getAttribute('data-category');
                    filterProducts(category);
                });
            });
        }

        // Render Products to the Grid
        function renderProducts(productsArray) {
            productsGrid.innerHTML = '';
            
            productsArray.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
        }

        // Create Product Card HTML
        function createProductCard(product) {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4 col-xl-3';
            
            col.innerHTML = `
                <div class="card product-card h-100">
                    <div class="position-relative">
                        <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                        <span class="product-badge">${product.category}</span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <div class="mt-auto">
                            <p class="card-text product-price">$${product.price.toFixed(2)}</p>
                            <button class="btn add-to-cart-btn" data-id="${product.id}">
                                <i class="fas fa-cart-plus me-2"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Add event listener to the Add to Cart button
            const addToCartBtn = col.querySelector('.add-to-cart-btn');
            addToCartBtn.addEventListener('click', () => addToCart(product.id));
            
            return col;
        }

        // Filter Products by Category
        function filterProducts(category) {
            if (category === 'all') {
                renderProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                renderProducts(filteredProducts);
            }
        }

        // ADD TO CART FUNCTION
        function addToCart(productId) {
            // Find the product in the products array
            const product = products.find(p => p.id === productId);
            
            if (!product) {
                console.error('Product not found');
                return;
            }
            
            // Check if product already exists in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                // If product exists, increase quantity
                existingItem.quantity += 1;
            } else {
                // If product is new, add to cart with quantity 1
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            // Update UI and save to localStorage
            updateCartUI();
            saveCartToStorage();
            
            // Show feedback to user
            showAddToCartFeedback(product.name);
        }

        // UPDATE TOTAL FUNCTION
        function updateTotal() {
            // Calculate total price by summing (price * quantity) for all items
            const total = cart.reduce((sum, item) => {
                return sum + (item.price * item.quantity);
            }, 0);
            
            // Update the total price display
            totalPrice.textContent = `$${total.toFixed(2)}`;
            
            return total;
        }

        // Update Cart UI
        function updateCartUI() {
            // Update cart badge with animation
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartBadge.textContent = totalItems;
            cartBadge.classList.add('pulse');
            setTimeout(() => cartBadge.classList.remove('pulse'), 500);
            
            // Update cart items list
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="text-center py-5">
                        <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                        <p class="text-muted">Your cart is empty</p>
                        <button class="btn btn-primary mt-2" data-bs-dismiss="offcanvas">Continue Shopping</button>
                    </div>
                `;
            } else {
                cart.forEach(item => {
                    const cartItemElement = createCartItemElement(item);
                    cartItems.appendChild(cartItemElement);
                });
            }
            
            // Update total
            updateTotal();
        }

        // Create Cart Item Element
        function createCartItemElement(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            
            itemDiv.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" class="cart-item-image me-3" alt="${item.name}">
                        <div>
                            <h6 class="mb-0">${item.name}</h6>
                            <p class="mb-0 text-muted">$${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="quantity-controls me-3">
                            <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                            <span class="mx-2 fw-bold">${item.quantity}</span>
                            <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                        </div>
                        <button class="btn remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            // Add event listeners for quantity controls and remove button
            const decreaseBtn = itemDiv.querySelector('.decrease-quantity');
            const increaseBtn = itemDiv.querySelector('.increase-quantity');
            const removeBtn = itemDiv.querySelector('.remove-item');
            
            decreaseBtn.addEventListener('click', () => updateQuantity(item.id, -1));
            increaseBtn.addEventListener('click', () => updateQuantity(item.id, 1));
            removeBtn.addEventListener('click', () => removeFromCart(item.id));
            
            return itemDiv;
        }

        // Update Item Quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                item.quantity += change;
                
                // Remove item if quantity becomes 0 or less
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    // Update UI and save to localStorage
                    updateCartUI();
                    saveCartToStorage();
                }
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            
            updateCartUI();
            saveCartToStorage();
        }

        function showAddToCartFeedback(productName) {
            toastMessage.textContent = `${productName} added to cart!`;
            toastNotification.classList.add('show');
            
            setTimeout(() => {
                toastNotification.classList.remove('show');
            }, 3000);
        }

        function saveCartToStorage() {
            localStorage.setItem('shoppingCart', JSON.stringify(cart));
        }

        // Load Cart from localStorage
        function loadCartFromStorage() {
            const savedCart = localStorage.getItem('shoppingCart');
            
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCartUI();
            }
        }