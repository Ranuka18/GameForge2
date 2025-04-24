const loadCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = " <div class='empty-cart'> <p>Your cart is empty.</p> </div>";
        document.querySelector(".total-cart h2").innerText = "Grand Total : $0.00";
        return;
    }

    cartContainer.innerHTML = cart
        .map((item, index) => {
            let price = parseFloat(item.price.replace('$', '')); 

            if (isNaN(price)) price = 0; 

            let itemTotal = price * item.quantity;  
            total += itemTotal;  

            return `
            <div class="cart-item">
                <img src="${item.image}" >
                <div class="cart-process">
                    <h2>${item.title}</h2>
                    <p>Price: $${itemTotal.toFixed(2)}</p>
                    <div class="inc-quan"> <p>Quantity: ${item.quantity} <button onclick="increaseQuantity(${index})">+</button>  </p> </div>
                    <div class="cart-butt">
                    <button class="buy-butt" onclick="">Buy Now</button>
                    <button class="remove-butt" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>  
            </div>`;   
        })
        .join("");

    document.querySelector(".total-cart h2").innerText = `Grand Total : $${total.toFixed(2)}`;
};



const removeFromCart = (index) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1; 
    } else {
        cart.splice(index, 1); 
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
};

const increaseQuantity = (index) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
};

// Clear all items from cart
const clearCart = () => {
    localStorage.removeItem("cart");
    loadCart();
};

loadCart();

const addToFavorites = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Cart is empty. Nothing to add to favorites.");
        return;
    }

    localStorage.setItem("favorites", JSON.stringify(cart));
    alert("All cart items added to favorites!");
};

const loadFavoritesToCart = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    favorites.forEach(favItem => {
        // Check if item already exists in the cart
        const existingIndex = cart.findIndex(cartItem => cartItem.title === favItem.title);

        if (existingIndex !== -1) {
            cart[existingIndex].quantity += favItem.quantity || 1;
        } else {
            cart.push({ ...favItem, quantity: favItem.quantity || 1 });
        }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    alert("Favorites added back to cart!");
};

const handleBuyAll = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // Proceed to order page if cart is not empty
    window.location.href = "order.html";
};