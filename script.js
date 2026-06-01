// Quantity selector
let qty = 1;
function changeQty(change) {
  qty = Math.max(1, qty + change);
  document.getElementById('qty').textContent = qty;
}

// Add to cart
function addToCart() {
  const msg = document.getElementById('cart-message');
  msg.textContent = `✅ ${qty} item${qty > 1 ? 's' : ''} added to cart!`;
  setTimeout(() => { msg.textContent = ''; }, 4000);
}

// Contact form
function submitForm(event) {
  event.preventDefault();
  const msg = document.getElementById('form-message');
  msg.textContent = '✅ Thanks! We will get back to you shortly.';
  event.target.reset();
  setTimeout(() => { msg.textContent = ''; }, 5000);
}

// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('open');
}
