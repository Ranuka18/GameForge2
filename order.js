const cart = JSON.parse(localStorage.getItem("cart")) || [];
const tbody = document.getElementById("summary-body");
const grandTotalEl = document.getElementById("grand-total");
let grandTotal = 0;

cart.forEach(item => {
    const price = parseFloat(item.price.replace('$', ''));
    const total = price * item.quantity;
    grandTotal += total;
    const row = `
        <tr>
            <td>${item.title}</td>
            <td>$${price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${total.toFixed(2)}</td>
        </tr>`;
    tbody.innerHTML += row;
});
grandTotalEl.innerText = `$${grandTotal.toFixed(2)}`;

document.getElementById("payment-method").addEventListener("change", (e) => {
    const cardSection = document.getElementById("card-details");
    cardSection.style.display = e.target.value === "card" ? "block" : "none";
});

document.getElementById("checkout-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const payment = document.getElementById("payment-method").value;

    if (!name || !email || !phone || !address || !payment) {
        alert("Please fill in all fields.");
        return;
    }

    if (payment === "card") {
        const cardNumber = document.getElementById("card-number").value.trim();
        const cardName = document.getElementById("card-name").value.trim();
        if (!cardNumber || !cardName) {
            alert("Please fill in card details.");
            return;
        }
    }

    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 5); // Add 5 calendar days
    
    // Format the date to something like "Friday, April 30, 2025"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDeliveryDate = deliveryDate.toLocaleDateString(undefined, options);
    
    // Now update the thank-you message
    const thankYouDiv = document.getElementById("thank-you-message");
    thankYouDiv.innerHTML = `
        <h2>Personal Details Summary</h2>
        <table>
            <tr><th>Full Name</th><td>${name}</td></tr>
            <tr><th>Email</th><td>${email}</td></tr>
            <tr><th>Phone</th><td>${phone}</td></tr>
            <tr><th>Address</th><td>${address}</td></tr>
            <tr><th>Payment Method</th><td>${payment === "card" ? "Card Payment" : "Cash on Delivery"}</td></tr>
        </table>
    
        <h2 style="margin-top: 30px;">Thank you for your purchase!</h2>
        <p>Estimated Delivery date will be <strong>${formattedDeliveryDate}</strong>.</p>
    `;
    
    thankYouDiv.style.display = "block";
});