// ===== CraveBites — Lightweight Script =====

// --- Cart State ---
let cart = JSON.parse(localStorage.getItem('cravebites_cart') || '[]');

// --- DOM Elements ---
const cartToggle = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItemsEl = document.getElementById('cartItems');
const cartEmptyEl = document.getElementById('cartEmpty');
const cartFooterEl = document.getElementById('cartFooter');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeMenuBtn = document.getElementById('closeMenu');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

// --- Top Bar Close ---
const topBarClose = document.querySelector('.top-bar-close');
if (topBarClose) {
    topBarClose.addEventListener('click', () => {
        document.querySelector('.top-bar').classList.add('hidden');
    });
}

// --- Mobile Menu ---
function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu on link click
document.querySelectorAll('.mobile-links a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// --- Cart Drawer ---
function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// --- Add to Cart ---
function addToCart(name, price, image) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, price, image, qty: 1 });
    }
    saveCart();
    renderCart();
    showToast(name + ' added to cart!');
}

// --- Update Quantity ---
function updateQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    renderCart();
}

// --- Render Cart ---
function renderCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    cartCountEl.textContent = totalItems;

    if (cart.length === 0) {
        cartEmptyEl.style.display = 'flex';
        cartFooterEl.style.display = 'none';
        // Remove all cart items but keep empty message
        document.querySelectorAll('.cart-item').forEach(el => el.remove());
        return;
    }

    cartEmptyEl.style.display = 'none';
    cartFooterEl.style.display = 'block';
    cartTotalEl.textContent = '$' + totalPrice.toFixed(2);

    // Remove existing items
    document.querySelectorAll('.cart-item').forEach(el => el.remove());

    // Add items
    cart.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQty(${i}, -1)"><i class="fa-solid fa-minus"></i></button>
                <span class="cart-item-qty">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${i}, 1)"><i class="fa-solid fa-plus"></i></button>
            </div>
        `;
        cartItemsEl.insertBefore(div, cartEmptyEl);
    });
}

// --- Save Cart ---
function saveCart() {
    localStorage.setItem('cravebites_cart', JSON.stringify(cart));
}

// --- Toast ---
let toastTimer;
function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// --- Category Filtering ---
const tabBtns = document.querySelectorAll('.tab-btn');
const productCards = document.querySelectorAll('.product-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;
        productCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// --- Active Nav Link on Scroll ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// --- Navbar Scroll Effect ---
const navbar = document.querySelector('.navbar');
function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', () => {
    updateActiveNav();
    updateNavbar();
}, { passive: true });

// --- Init ---
renderCart();
updateNavbar();
