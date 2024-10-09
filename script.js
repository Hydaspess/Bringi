// script.js

let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    cartItems.innerHTML = '';
    
    cart.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.item}: ₹${product.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });
    
    totalElement.textContent = total.toFixed(2);
    
    if (cart.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'Your cart is empty';
        cartItems.appendChild(emptyMessage);
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Thank you for your purchase! Total:₹${total.toFixed(2)}`);
        cart = [];
        total = 0;
        displayCart();
    }
}
