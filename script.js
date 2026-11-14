
// Shopping Cart
let cart = JSON.parse(localStorage.getItem("btimesCart")) || [];

// Create Cart Button
const cartButton = document.createElement("button");
cartButton.innerText = "🛒 Cart (0)";
cartButton.className = "cart-button";
document.querySelector(".navbar").appendChild(cartButton);

// Add Watch to Cart
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("btimesCart", JSON.stringify(cart));

    updateCart();

    alert(name + " added to your cart!");
}

// Update Cart Count
function updateCart() {
    cartButton.innerText = `🛒 Cart (${cart.length})`;
}

// View Cart
cartButton.addEventListener("click", function () {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = 0;
    let details = "YOUR B TIMES CART\n\n";

    cart.forEach(function(item, index) {
        details += `${index + 1}. ${item.name} - ₹${item.price}\n`;
        total += item.price;
    });

    details += `\nTotal Amount: ₹${total}`;

    alert(details);
});

// Load Saved Cart
updateCart();
