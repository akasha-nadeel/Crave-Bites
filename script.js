// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');

if (openSidebarBtn) {
    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

// Mobile Menu Toggle (Legacy - can be removed if not used, but keeping for safety)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Language Selector Logic
const languageSelect = document.getElementById('languageSelect');

const translations = {
    'EN': {
        'nav-home': 'Home',
        'nav-menu': 'Menu',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'nav-track': 'Track Order',
        'hero-tagline': 'Welcome to CraveBites',
        'hero-title': 'Delicious Food <br /> <span>Delivered Fast</span>',
        'hero-desc': 'Experience the best fast food in town with fresh ingredients and quick delivery.',
        'hero-btn-order': 'Order Now',
        'hero-btn-learn': 'Learn More',
        'stat-delivery': 'Mins Delivery',
        'stat-customers': 'Happy Customers',
        'feat-fast-title': 'Fast Delivery',
        'feat-fast-desc': 'We deliver your food hot and fresh in under 30 minutes.',
        'feat-fresh-title': 'Fresh Taste',
        'feat-fresh-desc': 'Made with 100% real meat and fresh vegetables daily.',
        'feat-price-title': 'Best Price',
        'feat-price-desc': 'Affordable meals that don\'t compromise on quality.',
        'offer-subtitle': 'Exclusive Deals',
        'offer-title': 'Today\'s Specials',
        'menu-subtitle': 'Our Menu',
        'menu-title': 'Popular Dishes',
        'cat-all': 'All',
        'cat-burger': 'Burgers',
        'cat-pizza': 'Pizza',
        'cat-sides': 'Sides',
        'cat-drinks': 'Drinks',
        'about-subtitle': 'About Us',
        'about-title': 'We Cook With Passion',
        'about-desc1': 'At CraveBites, we believe that fast food should be fresh, delicious, and affordable. Our chefs use only the finest ingredients to create mouth-watering burgers, pizzas, and more.',
        'about-desc2': 'Founded in 2020, we have quickly become a local favorite for our commitment to quality and speed. Come taste the difference today!',
        'about-btn': 'Check Our Menu',
        'contact-subtitle': 'Contact Us',
        'contact-title': 'Get In Touch',
        'footer-desc': 'The best fast food in town, delivered to your door.',
        'footer-company': 'Company',
        'footer-support': 'Support',
        'footer-contact': 'Contact'
    },
    'SI': {
        'nav-home': 'මුල් පිටුව',
        'nav-menu': 'මෙනුව',
        'nav-about': 'අපි ගැන',
        'nav-contact': 'සම්බන්ධ වන්න',
        'nav-track': 'ඇණවුම සොයන්න',
        'hero-tagline': 'CraveBites වෙත සාදරයෙන් පිළිගනිමු',
        'hero-title': 'රසවත් ආහාර <br /> <span>ඉක්මනින් ගෙන්වා ගන්න</span>',
        'hero-desc': 'නැවුම් අමුද්‍රව්‍ය සහ ඉක්මන් බෙදා හැරීම සමඟ නගරයේ හොඳම ක්ෂණික ආහාර අත්විඳින්න.',
        'hero-btn-order': 'දැන් ඇණවුම් කරන්න',
        'hero-btn-learn': 'තව දැනගන්න',
        'stat-delivery': 'මිනිත්තු ඇතුලත',
        'stat-customers': 'සතුටු පාරිභෝගිකයින්',
        'feat-fast-title': 'ඉක්මන් බෙදාහැරීම',
        'feat-fast-desc': 'අපි විනාඩි 30 ට අඩු කාලයකදී ඔබේ ආහාර උණුසුම්ව සහ නැවුම්ව ලබා දෙන්නෙමු.',
        'feat-fresh-title': 'නැවුම් රසය',
        'feat-fresh-desc': 'දිනපතා 100% සැබෑ මස් සහ නැවුම් එළවළු සමඟ සාදා ඇත.',
        'feat-price-title': 'හොඳම මිල',
        'feat-price-desc': 'ගුණාත්මක භාවයට හානියක් නොවන දැරිය හැකි ආහාර.',
        'offer-subtitle': 'විශේෂ දීමනා',
        'offer-title': 'අද විශේෂ',
        'menu-subtitle': 'අපගේ මෙනුව',
        'menu-title': 'ජනප්‍රිය කෑම',
        'cat-all': 'සියල්ල',
        'cat-burger': 'බර්ගර්',
        'cat-pizza': 'පීසා',
        'cat-sides': 'අතුරුපස',
        'cat-drinks': 'බීම',
        'about-subtitle': 'අපි ගැන',
        'about-title': 'අපි ආශාවෙන් උයනවා',
        'about-desc1': 'CraveBites හිදී, අපි විශ්වාස කරන්නේ ක්ෂණික ආහාර නැවුම්, රසවත් සහ දැරිය හැකි මිලකට තිබිය යුතු බවයි. රසවත් බර්ගර්, පීසා සහ තවත් දේ නිර්මාණය කිරීමට අපගේ සූපවේදීන් හොඳම අමුද්‍රව්‍ය පමණක් භාවිතා කරයි.',
        'about-desc2': '2020 දී ආරම්භ කරන ලද, ගුණාත්මකභාවය සහ වේගය සඳහා අපගේ කැපවීම නිසා අපි ඉක්මනින් දේශීය ප්‍රියතමයක් බවට පත් වී සිටිමු. අදම වෙනස රසවිඳින්න!',
        'about-btn': 'අපගේ මෙනුව බලන්න',
        'contact-subtitle': 'අමතන්න',
        'contact-title': 'සම්බන්ධ වන්න',
        'footer-desc': 'නගරයේ හොඳම ක්ෂණික ආහාර, ඔබේ දොරකඩටම.',
        'footer-company': 'ආයතනය',
        'footer-support': 'සහාය',
        'footer-contact': 'අමතන්න'
    }
};

function changeLanguage(lang) {
    const texts = translations[lang];
    if (!texts) return;

    // Helper to safely set HTML or Text
    const setContent = (id, text, isHtml = false) => {
        const el = document.getElementById(id); // If elements have IDs
        if (el) {
            if (isHtml) el.innerHTML = text;
            else el.innerText = text;
        }
    };

    // We need to target elements by class or ID. Since index.html doesn't have many IDs for text,
    // we might need to rely on querySelector or adding IDs relative to the plan.
    // For now, I will use a mix of existing IDs and specific selectors suited for this layout.

    // Navbar
    document.querySelector('.sidebar-links li:nth-child(1) a').innerHTML = `<i class="fa-solid fa-house"></i> ${texts['nav-home']}`;
    document.querySelector('.sidebar-links li:nth-child(2) a').innerHTML = `<i class="fa-solid fa-utensils"></i> ${texts['nav-menu']}`;
    document.querySelector('.sidebar-links li:nth-child(3) a').innerHTML = `<i class="fa-solid fa-circle-info"></i> ${texts['nav-about']}`;
    document.querySelector('.sidebar-links li:nth-child(4) a').innerHTML = `<i class="fa-solid fa-address-book"></i> ${texts['nav-contact']}`;
    document.querySelector('.sidebar-links li:nth-child(5) a').innerHTML = `<i class="fa-solid fa-truck-fast"></i> ${texts['nav-track']}`;

    // Hero - Using selectors as IDs are missing on text elements
    const heroTagline = document.querySelector('.hero .tagline');
    if (heroTagline) heroTagline.innerText = texts['hero-tagline'];

    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.innerHTML = texts['hero-title'];

    const heroDesc = document.querySelector('.hero p');
    if (heroDesc) heroDesc.innerText = texts['hero-desc'];

    const heroBtn1 = document.querySelector('.hero-btns .btn-primary');
    if (heroBtn1) heroBtn1.innerText = texts['hero-btn-order'];

    const heroBtn2 = document.querySelector('.hero-btns .btn-secondary');
    if (heroBtn2) heroBtn2.innerText = texts['hero-btn-learn'];

    // Stats
    const stats = document.querySelectorAll('.stat-item p');
    if (stats[0]) stats[0].innerText = texts['stat-delivery'];
    if (stats[1]) stats[1].innerText = texts['stat-customers'];

    // Features
    const featCards = document.querySelectorAll('.feature-card');
    if (featCards[0]) {
        featCards[0].querySelector('h3').innerText = texts['feat-fast-title'];
        featCards[0].querySelector('p').innerText = texts['feat-fast-desc'];
    }
    if (featCards[1]) {
        featCards[1].querySelector('h3').innerText = texts['feat-fresh-title'];
        featCards[1].querySelector('p').innerText = texts['feat-fresh-desc'];
    }
    if (featCards[2]) {
        featCards[2].querySelector('h3').innerText = texts['feat-price-title'];
        featCards[2].querySelector('p').innerText = texts['feat-price-desc'];
    }

    // Offers
    const offerSection = document.getElementById('offers');
    if (offerSection) {
        offerSection.querySelector('.sub-title').innerText = texts['offer-subtitle'];
        offerSection.querySelector('h2').innerText = texts['offer-title'];
    }

    // Menu
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.querySelector('.sub-title').innerText = texts['menu-subtitle'];
        menuSection.querySelector('h2').innerText = texts['menu-title'];

        const cats = menuSection.querySelectorAll('.cat-btn');
        if (cats[0]) cats[0].innerText = texts['cat-all'];
        if (cats[1]) cats[1].innerText = texts['cat-burger'];
        if (cats[2]) cats[2].innerText = texts['cat-pizza'];
        if (cats[3]) cats[3].innerText = texts['cat-sides'];
        if (cats[4]) cats[4].innerText = texts['cat-drinks'];
    }

    // About
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.querySelector('.sub-title').innerText = texts['about-subtitle'];
        aboutSection.querySelector('h2').innerText = texts['about-title'];
        const ps = aboutSection.querySelectorAll('p');
        if (ps[0]) ps[0].innerText = texts['about-desc1'];
        if (ps[1]) ps[1].innerText = texts['about-desc2'];
        aboutSection.querySelector('.btn').innerText = texts['about-btn'];
    }

    // Contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.querySelector('.sub-title').innerText = texts['contact-subtitle'];
        contactSection.querySelector('h2').innerText = texts['contact-title'];
    }

    // Footer
    const footerCols = document.querySelectorAll('.footer-col');
    if (footerCols[0]) footerCols[0].querySelector('p').innerText = texts['footer-desc'];
    if (footerCols[1]) {
        footerCols[1].querySelector('h4').innerText = texts['footer-company'];
        const links = footerCols[1].querySelectorAll('a');
        if (links[0]) links[0].innerText = texts['nav-about'];
        if (links[1]) links[1].innerText = texts['menu-subtitle']; // reuse
    }
    if (footerCols[2]) footerCols[2].querySelector('h4').innerText = texts['footer-support'];
    if (footerCols[3]) footerCols[3].querySelector('h4').innerText = texts['footer-contact'];
}

if (languageSelect) {
    // Load saved language
    const savedLang = localStorage.getItem('craveBitesLang');
    if (savedLang && translations[savedLang]) {
        languageSelect.value = savedLang;
        changeLanguage(savedLang);
    }

    languageSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        changeLanguage(lang);
        localStorage.setItem('craveBitesLang', lang);
    });
}

// Close dropdowns when clicking outside
window.addEventListener('click', (e) => {
    if (languageSelector && !languageSelector.contains(e.target)) {
        languageSelector.classList.remove('active');
    }
});

// Sticky Navbar
// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const homeSection = document.getElementById('home');

    // Default threshold if home section missing
    let threshold = 50;

    if (homeSection) {
        // Change color after scrolling past most of the home section (e.g., 90% of it)
        threshold = homeSection.offsetHeight - 100;
    }

    if (window.scrollY > threshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Category Filter
const categoryBtns = document.querySelectorAll('.cat-btn');
const productCards = document.querySelectorAll('.product-card');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        productCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Cart Logic
let cart = JSON.parse(localStorage.getItem('craveBitesCart')) || [];
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const floatingCartBtn = document.getElementById('floatingCartBtn');
const navCartIcon = document.querySelector('.cart-icon');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartCountElements = document.querySelectorAll('.cart-count, .floating-cart-count');
const checkoutBtn = document.querySelector('.checkout-btn');

// Rewards Logic
const rewardsModal = document.getElementById('rewardsModal');
const rewardsList = document.getElementById('rewardsList');
const rewardsModalPoints = document.getElementById('rewardsModalPoints');
const closeRewardsBtn = document.getElementById('closeRewards');
const cravePointsBadge = document.getElementById('cravePointsBatch');

// Define Rewards
const rewardsCatalog = [
    { title: '50% Discount', points: 300, code: 'CRAVE5' },
    { title: '10% Discount', points: 200, code: 'SAVE10' },
    { title: 'Free Delivery', points: 100, code: 'FREESHIPPING' },
    { title: '20% Mega Deal', points: 600, code: 'BIG30' }
];

function openRewardsModal() {
    if (!rewardsModal) return;

    // Get actual points
    const points = parseInt(localStorage.getItem('craveBitesPoints')) || 0;
    // Get any pending point usage (active reward)
    const pendingPoints = parseInt(localStorage.getItem('craveBitesActiveRewardCost')) || 0;
    const availablePoints = points - pendingPoints;

    if (rewardsModalPoints) rewardsModalPoints.textContent = availablePoints;

    // Render List
    if (rewardsList) {
        rewardsList.innerHTML = '';
        rewardsCatalog.forEach(reward => {
            // Check against AVAILABLE points AND Cart Status
            const isCartEmpty = cart.length === 0;
            const canAfford = availablePoints >= reward.points;
            const canRedeem = !isCartEmpty && canAfford;

            let btnText = 'Redeem';
            if (isCartEmpty) btnText = 'Cart Empty';
            else if (!canAfford) btnText = 'Locked';

            const item = document.createElement('div');
            item.className = 'reward-item';

            // Highlight 50% Deal
            const isMega = reward.title.includes('50%');
            const titleHTML = isMega
                ? `<h4 style="color: #ff0000; font-size: 1.5rem; font-weight: 900; letter-spacing: -0.5px;">${reward.title}</h4>`
                : `<h4>${reward.title}</h4>`;

            item.innerHTML = `
                <div class="reward-info">
                    ${titleHTML}
                    <p>Unlock with ${reward.points} Points</p>
                </div>
                <button class="btn-redeem" ${canRedeem ? '' : 'disabled'} style="${isCartEmpty ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                    ${btnText}
                </button>
            `;

            if (canRedeem) {
                const btn = item.querySelector('.btn-redeem');
                btn.addEventListener('click', () => redeemReward(reward, btn));
            }

            rewardsList.appendChild(item);
        });
    }

    rewardsModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Show Rules Modal Logic - Only show once if not seen
    if (!localStorage.getItem('craveBitesRulesSeen')) {
        setTimeout(() => {
            const rulesModal = document.getElementById('rulesModal');
            if (rulesModal) {
                rulesModal.style.display = 'flex';

                // Add listener to close button to set the flag
                const closeBtn = rulesModal.querySelector('button');
                if (closeBtn) {
                    // Ensure we don't stack listeners if opened multiple times before seeing
                    const newCloseBtn = closeBtn.cloneNode(true);
                    closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);

                    newCloseBtn.onclick = function () {
                        localStorage.setItem('craveBitesRulesSeen', 'true');
                        rulesModal.style.display = 'none';
                    };
                }

                // Also close on "Got it" button if it exists
                // We'll target the last button in the modal content which is likely the Action button
                const modalContent = rulesModal.querySelector('.modal-content');
                if (modalContent) {
                    const actionBtn = modalContent.lastElementChild;
                    if (actionBtn && actionBtn.tagName === 'BUTTON' && actionBtn !== closeBtn) {
                        const newActionBtn = actionBtn.cloneNode(true);
                        actionBtn.parentNode.replaceChild(newActionBtn, actionBtn);

                        newActionBtn.addEventListener('click', () => {
                            localStorage.setItem('craveBitesRulesSeen', 'true');
                            rulesModal.style.display = 'none';
                        });
                    }
                }
            }
        }, 500);
    }
}

function redeemReward(reward, btnElement) {
    if (cart.length === 0) {
        showCustomAlert('Please add items to your cart before redeeming rewards.');
        closeRewardsModal();
        return;
    }

    const points = parseInt(localStorage.getItem('craveBitesPoints')) || 0;
    const pendingPoints = parseInt(localStorage.getItem('craveBitesActiveRewardCost')) || 0;
    const availablePoints = points - pendingPoints;

    if (availablePoints >= reward.points) {
        showCustomConfirm(`Redeem ${reward.points} points for "${reward.title}"?`, () => {
            // 1. APPLY COUPON FIRST to set window.appliedCoupon
            if (couponInput) {
                closeRewardsModal();
                openCart();
                couponInput.value = reward.code;
                const applyBtn = document.getElementById('applyCouponBtn');
                if (applyBtn) applyBtn.click();
            } else {
                showCustomAlert(`Reward Unlocked! Your Code is: ${reward.code}`);
                return; // Cannot proceed with lock if no coupon system
            }

            // 2. NOW LOCK POINTS (Since coupon is active)
            localStorage.setItem('craveBitesActiveRewardCost', reward.points);

            // 3. Update UI to reflect lock
            updateCartUI();

            showCustomAlert(`Reward Unlocked! Code: <b>${reward.code}</b> applied.`);
        });
    }
}

function closeRewardsModal() {
    if (rewardsModal) rewardsModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event Listeners for Rewards
if (cravePointsBadge) {
    cravePointsBadge.addEventListener('click', openRewardsModal);
}
if (closeRewardsBtn) {
    closeRewardsBtn.addEventListener('click', closeRewardsModal);
}
// Custom Modal Helpers
let confirmCallback = null;

function showCustomAlert(message, title = 'Notification') {
    const modal = document.getElementById('customAlertModal');
    if (modal) {
        document.getElementById('customAlertMessage').innerHTML = message;
        modal.style.display = 'flex';
    } else {
        alert(message);
    }
}

function closeCustomAlert() {
    const modal = document.getElementById('customAlertModal');
    if (modal) modal.style.display = 'none';
}

function showCustomConfirm(message, callback) {
    const modal = document.getElementById('customConfirmModal');
    if (modal) {
        document.getElementById('customConfirmMessage').innerHTML = message;
        confirmCallback = callback;
        modal.style.display = 'flex';
    } else {
        if (confirm(message)) callback();
    }
}

function closeCustomConfirm(isConfirmed) {
    const modal = document.getElementById('customConfirmModal');
    if (modal) modal.style.display = 'none';
    if (isConfirmed && confirmCallback) {
        confirmCallback();
    }
    confirmCallback = null;
}
window.addEventListener('click', (e) => {
    if (e.target === rewardsModal) {
        closeRewardsModal();
    }
});

// Coupon System Logic
window.coupons = {
    'SAVE10': 0.10,         // 10% off
    'FREESHIPPING': 0,      // Free Delivery (No monetary discount on food)
    'WELCOME20': 0.20,      // 20% off
    'CRAVE50': 0.50,        // 50% off - First order only
    'CRAVE5': 0.50,         // 50% off
    'SAVE20': 0.20,         // 20% off
    'BIG30': 0.30           // 30% off
};

// One-time use coupons (per account)
window.oneTimeUseCoupons = ['CRAVE50'];
window.appliedCoupon = null;

const applyCouponBtn = document.getElementById('applyCouponBtn');
const couponInput = document.getElementById('couponInput');
const couponMessage = document.getElementById('couponMessage');

if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showCouponMessage('Please add items to cart first.', 'error');
            return;
        }
        const code = couponInput.value.trim().toUpperCase();

        if (code === '') {
            showCouponMessage('Please enter a code', 'error');
            return;
        }

        if (window.coupons.hasOwnProperty(code)) {
            // Check if it's a one-time use coupon
            if (window.oneTimeUseCoupons.includes(code)) {
                // Get user's used coupons from localStorage
                const user = JSON.parse(localStorage.getItem('craveBitesUser'));
                if (!user) {
                    showCouponMessage('Please login to use this coupon', 'error');
                    return;
                }

                const usedCoupons = JSON.parse(localStorage.getItem('craveBitesUsedCoupons')) || {};
                const userEmail = user.email;

                // Check if this user has already used this coupon
                if (usedCoupons[userEmail] && usedCoupons[userEmail].includes(code)) {
                    showCouponMessage(`Coupon '${code}' has already been used on this account`, 'error');
                    return;
                }
            }

            window.appliedCoupon = code;
            showCouponMessage(`Coupon '${code}' applied!`, 'success');
            updateCartUI();
        } else {
            window.appliedCoupon = null;
            showCouponMessage('Invalid coupon code', 'error');
            updateCartUI(); // Reset if previously valid
        }
    });
}

if (couponInput) {
    couponInput.addEventListener('input', () => {
        // Clear message when typing
        couponMessage.textContent = '';
        couponMessage.className = '';
    });
}

function showCouponMessage(msg, type) {
    if (couponMessage) {
        couponMessage.textContent = msg;
        couponMessage.className = type === 'success' ? 'success-msg' : 'error-msg';
        couponMessage.style.color = type === 'success' ? '#2ecc71' : '#ff4d4d';
        couponMessage.style.fontSize = '0.9rem';
        couponMessage.style.marginTop = '5px';
    }
}

// Open Cart Sidebar
// Open Cart Sidebar
// Open Cart Sidebar
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Show Points Popup Message (Max 2 times per session)
    const currentUser = JSON.parse(localStorage.getItem('craveBitesUser'));
    if (currentUser) {
        let showCount = parseInt(localStorage.getItem('pointsPopupShownCount') || '0');

        if (showCount < 2) {
            setTimeout(() => {
                const popup = document.getElementById('pointsPopup');
                const userPoints = document.getElementById('userPoints');
                const popupPoints = document.getElementById('popupPointsCount');

                // Update Popup
                if (popup) {
                    if (userPoints && popupPoints) {
                        popupPoints.innerText = userPoints.innerText;
                    }
                    popup.classList.add('visible');

                    // Increment and save count
                    localStorage.setItem('pointsPopupShownCount', (showCount + 1).toString());
                }

                // Show Toast as well for better visibility
                const points = parseInt(localStorage.getItem('craveBitesPoints') || '0');
                if (points > 0) {
                    showToast(`You have ${points} CravePoints!`);
                }
            }, 500);
        }
    }
}

// Close Points Popup Listener
const closePointsPopup = document.getElementById('closePointsPopup');
if (closePointsPopup) {
    closePointsPopup.addEventListener('click', (e) => {
        e.stopPropagation();
        const popup = document.getElementById('pointsPopup');
        if (popup) popup.classList.remove('visible');
    });
}

// Close Cart Sidebar
function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event Listeners for Opening/Closing Cart
if (floatingCartBtn) floatingCartBtn.addEventListener('click', openCart);
if (navCartIcon) navCartIcon.addEventListener('click', openCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

// Checkout Button Listener
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            localStorage.setItem('craveBitesAppliedCoupon', window.appliedCoupon || '');
            window.location.href = 'checkout.html';
        } else {
            alert('Your cart is empty!');
        }
    });
}

// Add to Cart Functionality & Customization
const addBtns = document.querySelectorAll('.add-btn');
const customizationModal = document.getElementById('customizationModal');
const closeCustomizationBtn = document.getElementById('closeCustomization');
const confirmAddBtn = document.getElementById('confirmAddBtn');
let currentProduct = null;

// Modal Elements
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalBasePrice = document.getElementById('modalBasePrice');
const modalTotalPrice = document.getElementById('modalTotalPrice');
// Customization Options Configuration
const productOptions = {
    burger: {
        sizes: [
            { name: 'Single', price: 0, checked: true },
            { name: 'Double', price: 3.00 },
            { name: 'Triple', price: 5.00 }
        ],
        extras: [
            { name: 'Extra Cheese', price: 1.50 },
            { name: 'Bacon', price: 2.00 },
            { name: 'Extra Sauce', price: 0.50 }
        ]
    },
    pizza: {
        sizes: [
            { name: 'Small (10")', price: 0, checked: true },
            { name: 'Medium (12")', price: 3.00 },
            { name: 'Large (14")', price: 5.00 }
        ],
        extras: [
            { name: 'Extra Cheese', price: 2.00 },
            { name: 'Pepperoni', price: 2.00 },
            { name: 'Dipping Sauce', price: 0.75 }
        ]
    },
    sides: {
        sizes: [
            { name: 'Regular', price: 0, checked: true },
            { name: 'Large', price: 1.50 }
        ],
        extras: [
            { name: 'Xtra Sauce', price: 0.50 },
            { name: 'Cheese Dip', price: 1.00 },
            { name: 'Spicy Powder', price: 0.25 }
        ]
    },
    drinks: { // Standard Soda
        sizes: [
            { name: 'Small', price: 0, checked: true },
            { name: 'Medium', price: 0.50 },
            { name: 'Large', price: 1.00 }
        ],
        extras: [
            { name: 'Extra Ice', price: 0.00 },
            { name: 'Lemon Slice', price: 0.25 },
            { name: 'No Sugar', price: 0.00 }
        ]
    },
    hot_drinks: {
        sizes: [
            { name: 'Small', price: 0, checked: true },
            { name: 'Medium', price: 0.50 },
            { name: 'Large', price: 1.00 }
        ],
        extras: [
            { name: 'Extra Sugar', price: 0.00 },
            { name: 'Whipped Cream', price: 0.50 },
            { name: 'Cinnamon', price: 0.00 }
        ]
    },
    milkshakes: {
        sizes: [
            { name: 'Regular', price: 0, checked: true },
            { name: 'Large', price: 1.00 }
        ],
        extras: [
            { name: 'Whipped Cream', price: 0.50 },
            { name: 'Extra Cherry', price: 0.25 },
            { name: 'Choco Syrup', price: 0.50 }
        ]
    },
    water: {
        sizes: [
            { name: '500ml', price: 0, checked: true },
            { name: '1L', price: 1.00 }
        ],
        extras: [
            { name: 'Ice Cup', price: 0.00 },
            { name: 'Lemon Slice', price: 0.25 }
        ]
    },
    juice: {
        sizes: [
            { name: 'Regular', price: 0, checked: true },
            { name: 'Large', price: 1.00 }
        ],
        extras: [
            { name: 'Extra Ice', price: 0.00 },
            { name: 'No Sugar', price: 0.00 }
        ]
    },
    default: {
        sizes: [
            { name: 'Standard', price: 0, checked: true }
        ],
        extras: []
    }
};

// Delegated Add to Cart Listener
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-btn');
    if (btn) {
        e.preventDefault();
        const card = btn.closest('.product-card');
        if (card) {
            const title = card.querySelector('h3').innerText; // Legacy: Keeping full text including price if that was behavior
            const priceStr = card.querySelector('.price').innerText;
            const price = parseFloat(priceStr.replace('$', ''));
            const image = card.querySelector('img').src;
            const category = card.getAttribute('data-category');

            openCustomizationModal(title, price, image, category);
        }
    }
});

// Also need to expose this for the inline onclick attributes in the "Specials" section
window.addToCart = function (title, price, image, category = 'pizza') {
    // Strict Auth Check - ENFORCED
    if (!localStorage.getItem('craveBitesUser')) {
        showToast('Please log in to add items to your cart');
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.classList.add('active');
            // Add a class to force attention if needed, or just relying on active
            // loginModal.classList.add('forced'); 
        }
        return;
    }

    // Let's define the internal add function
    // Trigger Animation if possible
    const imgElement = document.querySelector(`img[src="${image}"]`) || document.querySelector(`img[src="${image.replace(/%20/g, ' ')}"]`);
    if (imgElement) flyToCart(imgElement);

    internalAddToCart(title, price, image);
    // Note: internalAddToCart already shows a toast, so we might not need this one, 
    // BUT internalAddToCart shows "x(Quantity) added", while this valid for single add from Specials/Offer.
    // However, since we simplified internalAddToCart to just "Added to cart", we should avoid double toasts if internalAddToCart is called.
    // Let's check: internalAddToCart calls showToast('Added to cart').
    // So if we call it here too, we get two toasts.
    // Since internalAddToCart is always called by window.addToCart, we should REMOVE this toast here to avoid duplication.
    // BUT, if I just remove it, the user might wonder where it went if they look at this specific block.
    // Let's comment it out or simply rely on internalAddToCart's toast.

    // showToast(`${title} added to your cart!`); // Removed to avoid duplicate "Added to cart" from internalAddToCart
}

function openCustomizationModal(title, basePrice, image, category = 'default') {
    // Strict Auth Check - ENFORCED
    if (!localStorage.getItem('craveBitesUser')) {
        showToast('Please log in to customize your order');
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.classList.add('active');
        }
        return;
    }

    currentProduct = { title, basePrice, image };

    // Reset Modal UI
    modalImg.src = image;
    modalTitle.innerText = title;
    modalBasePrice.innerText = `$${basePrice.toFixed(2)}`;
    if (document.getElementById('modalQty')) document.getElementById('modalQty').innerText = '1';

    // Determine Refined Category
    let appCategory = category;

    // Intelligent Category Refinement
    if (category === 'drinks') {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('coffee') || lowerTitle.includes('tea') || lowerTitle.includes('hot chocolate') || lowerTitle.includes('espresso')) {
            appCategory = 'hot_drinks';
        } else if (lowerTitle.includes('shake')) {
            appCategory = 'milkshakes';
        } else if (lowerTitle.includes('water')) {
            appCategory = 'water';
        } else if (lowerTitle.includes('juice') || lowerTitle.includes('lemonade') || lowerTitle.includes('smoothie')) {
            appCategory = 'juice';
        }
        // Default remains 'drinks' (soda)
    }

    // Get Configuration
    const config = productOptions[appCategory] || productOptions.default;

    // Render Sizes
    const sizeContainer = document.querySelector('.size-options');
    const footerQty = document.querySelector('.modal-qty-ctrl');

    // config.sizes check
    if (config.sizes && config.sizes.length > 0) {
        // Show Sizes, Hide Footer Global Qty
        sizeContainer.parentElement.style.display = 'block';
        if (footerQty) footerQty.style.display = 'none';

        sizeContainer.className = 'size-options size-list';
        sizeContainer.innerHTML = '';
        // Reset styles to use CSS Grid from .size-options
        sizeContainer.style.display = '';
        sizeContainer.style.flexDirection = '';
        sizeContainer.style.gap = '';

        config.sizes.forEach((size, index) => {
            const defaultQty = size.checked ? 1 : 0;
            // Initial Active State Style
            const activeStyle = defaultQty > 0 ? 'border-color: #ff0000; background: #fff; box-shadow: 0 4px 10px rgba(255,0,0,0.1);' : '';
            const activeName = defaultQty > 0 ? 'color: #ff0000;' : '';

            sizeContainer.innerHTML += `
                <div class="option-card size-option" data-name="${size.name}" data-price="${size.price}">
                    <div class="option-content" style="cursor:default; ${activeStyle}">
                        <span class="option-name" style="${activeName}">${size.name}</span>
                        <span class="option-price" style="${activeName}">+${size.price === 0 ? '$0.00' : '$' + size.price.toFixed(2)}</span>
                        
                        <div class="size-qty" style="margin-top:10px; display:flex; align-items:center; gap:8px;">
                             <button class="sq-btn sq-minus" style="width:26px; height:26px; border-radius:50%; border:1px solid #ddd; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; color:#333;">-</button>
                             <span class="sq-val" style="font-weight:bold; font-size:1rem; width:15px; text-align:center; color:#333;">${defaultQty}</span>
                             <button class="sq-btn sq-plus" style="width:26px; height:26px; border-radius:50%; border:1px solid #ddd; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; color:#333;">+</button>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        // Hide Sizes, Show Footer Global Qty (Drinks)
        sizeContainer.parentElement.style.display = 'none';
        if (footerQty) footerQty.style.display = 'flex';
        // Reset Footer Qty
        if (document.getElementById('modalQty')) document.getElementById('modalQty').innerText = '1';
    }

    // Render Extras
    const extrasContainer = document.querySelector('.extras-options');
    extrasContainer.innerHTML = '';

    // Enhanced Styling for Visibility
    extrasContainer.style.background = '#fff8f2';
    extrasContainer.style.padding = '15px';
    extrasContainer.style.borderRadius = '12px';
    extrasContainer.style.border = '1px dashed #ffc107';

    // Update Header
    const extrasHeader = extrasContainer.previousElementSibling;
    if (extrasHeader && extrasHeader.tagName === 'H4') {
        extrasHeader.innerHTML = '<i class="fas fa-plus-circle"></i> Add Extras';
        extrasHeader.style.color = '#e08605';
        extrasHeader.style.fontSize = '1.1rem';
        extrasHeader.style.display = 'flex';
        extrasHeader.style.alignItems = 'center';
        extrasHeader.style.gap = '8px';
    }

    if (config.extras) {
        config.extras.forEach((extra, index) => {
            extrasContainer.innerHTML += `
                <div class="option-card extra-option" data-name="${extra.name}" data-price="${extra.price}">
                    <div class="option-content" style="cursor:default; display:flex; justify-content:space-between; align-items:center; padding:12px 15px;">
                        <div style="display:flex; flex-direction:column;">
                             <span class="option-name" style="font-weight:600; color:#444;">${extra.name}</span>
                             <span class="option-price" style="font-size:0.9rem; color:#888;">+${extra.price === 0 ? '$0.00' : '$' + extra.price.toFixed(2)}</span>
                        </div>
                        <div class="size-qty extra-qty" style="display:flex; align-items:center; gap:8px;">
                             <button class="sq-btn sq-minus" style="width:24px; height:24px; border-radius:50%; border:1px solid #ddd; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; color:#333;">-</button>
                             <span class="sq-val" style="font-weight:bold; font-size:1rem; width:15px; text-align:center; color:#333;">0</span>
                             <button class="sq-btn sq-plus" style="width:24px; height:24px; border-radius:50%; border:1px solid #ddd; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; color:#333;">+</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Re-attach listeners to new inputs
    const newSizeInputs = sizeContainer.querySelectorAll('input');
    const newExtraInputs = extrasContainer.querySelectorAll('input');

    newSizeInputs.forEach(input => input.addEventListener('change', updateModalTotal));
    newExtraInputs.forEach(input => input.addEventListener('change', updateModalTotal));

    updateModalTotal();

    customizationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalTotal() {
    if (!currentProduct) return;
    let total = 0;

    // Check if using Size List (Visible)
    const sizeList = document.querySelector('.size-list');
    // Check if parent (customization-group) is visible
    const isSizeVisible = sizeList && sizeList.parentElement.style.display !== 'none';

    // Calculate Extras Cost (Per Item)
    let extrasCost = 0;
    document.querySelectorAll('.extra-option').forEach(opt => {
        const price = parseFloat(opt.getAttribute('data-price'));
        const qty = parseInt(opt.querySelector('.sq-val').innerText);
        if (qty > 0) extrasCost += (qty * price);
    });

    if (isSizeVisible) {
        // Iterate Sizes
        document.querySelectorAll('.size-option').forEach(opt => {
            const sizePrice = parseFloat(opt.getAttribute('data-price'));
            const qty = parseInt(opt.querySelector('.sq-val').innerText);
            if (qty > 0) {
                total += qty * (currentProduct.basePrice + sizePrice + extrasCost);
            }
        });
    } else {
        // Global Qty
        let qty = 1;
        const qtyEl = document.getElementById('modalQty');
        if (qtyEl) qty = parseInt(qtyEl.innerText);
        total = qty * (currentProduct.basePrice + extrasCost);
    }

    modalTotalPrice.innerText = `$${total.toFixed(2)}`;
}

// Confirm Add
// Delegate for Size Qty (Increment/Decrement)
// Delegate for Size Qty (Increment/Decrement) with Style Update
document.addEventListener('click', (e) => {
    if (e.target.matches('.sq-btn')) {
        const wrapper = e.target.closest('.size-qty');
        const valSpan = wrapper.querySelector('.sq-val');

        // Find parent content for styling
        const contentDiv = wrapper.closest('.option-content');
        const nameSpan = contentDiv ? contentDiv.querySelector('.option-name') : null;
        const priceSpan = contentDiv ? contentDiv.querySelector('.option-price') : null;

        let val = parseInt(valSpan.innerText);
        if (e.target.classList.contains('sq-minus')) {
            if (val > 0) valSpan.innerText = val - 1;
        } else {
            valSpan.innerText = val + 1;
        }

        // Re-read val
        val = parseInt(valSpan.innerText);

        // Update Styles dynamically
        if (contentDiv) {
            if (val > 0) {
                contentDiv.style.borderColor = '#ff0000';
                contentDiv.style.background = '#fff';
                contentDiv.style.boxShadow = '0 4px 10px rgba(255, 0, 0, 0.1)';
                if (nameSpan) nameSpan.style.color = '#ff0000';
                if (priceSpan) priceSpan.style.color = '#ff0000';
            } else {
                contentDiv.style.borderColor = 'transparent';
                contentDiv.style.background = '#f8f9fa';
                contentDiv.style.boxShadow = 'none';
                if (nameSpan) nameSpan.style.color = '#444';
                if (priceSpan) priceSpan.style.color = '#888';
            }
        }

        updateModalTotal();
    }
});

if (confirmAddBtn) {
    confirmAddBtn.addEventListener('click', () => {
        if (!currentProduct) return;

        // Determine Mode (Size List visible?)
        const sizeList = document.querySelector('.size-list');
        const isSizeVisible = sizeList && sizeList.parentElement.style.display !== 'none';

        // Extras
        const selectedExtras = [];
        let extrasPrice = 0;
        document.querySelectorAll('.extra-option').forEach(opt => {
            const qty = parseInt(opt.querySelector('.sq-val').innerText);
            if (qty > 0) {
                const name = opt.getAttribute('data-name');
                const price = parseFloat(opt.getAttribute('data-price'));
                for (let i = 0; i < qty; i++) selectedExtras.push(name);
                extrasPrice += (qty * price);
            }
        });

        if (isSizeVisible) {
            let addedStart = false;
            document.querySelectorAll('.size-option').forEach(opt => {
                const qty = parseInt(opt.querySelector('.sq-val').innerText);
                if (qty > 0) {
                    const sizeName = opt.getAttribute('data-name');
                    const sizePrice = parseFloat(opt.getAttribute('data-price'));
                    // Unit Price = Base + Size + Extras
                    // Unit Price = Base + Size + Extras
                    const unitPrice = currentProduct.basePrice + sizePrice + extrasPrice;

                    // Trigger Animation once for the first item
                    if (!addedStart) {
                        const modalImg = document.getElementById('modalImg');
                        if (modalImg) flyToCart(modalImg);
                    }

                    internalAddToCart(currentProduct.title, unitPrice, currentProduct.image, sizeName, selectedExtras, qty);
                    addedStart = true;
                }
            });
            if (!addedStart) {
                showToast('Please select quantity for at least one size.');
                return;
            }
        } else {
            // Global Qty Mode (Drinks/Sides)
            const qtyEl = document.getElementById('modalQty');
            const quantity = qtyEl ? parseInt(qtyEl.innerText) : 1;
            const unitPrice = currentProduct.basePrice + extrasPrice;

            const modalImg = document.getElementById('modalImg');
            if (modalImg) flyToCart(modalImg);

            internalAddToCart(currentProduct.title, unitPrice, currentProduct.image, 'Standard', selectedExtras, quantity);
        }

        closeCustomizationModal();
    });
}

// Logic for Modal Quantity Buttons
const modalQtyMinus = document.getElementById('modalQtyMinus');
const modalQtyPlus = document.getElementById('modalQtyPlus');
const modalQty = document.getElementById('modalQty');

if (modalQtyMinus && modalQtyPlus && modalQty) {
    modalQtyMinus.addEventListener('click', () => {
        let val = parseInt(modalQty.innerText);
        if (val > 1) {
            modalQty.innerText = val - 1;
            updateModalTotal();
        }
    });
    modalQtyPlus.addEventListener('click', () => {
        let val = parseInt(modalQty.innerText);
        modalQty.innerText = val + 1;
        updateModalTotal();
    });
}

// Animation: Fly to Cart
function flyToCart(sourceElement) {
    if (!sourceElement) return;

    // Target the specific bottom-right floating cart button as requested
    const cartIcon = document.getElementById('floatingCartBtn') || document.querySelector('.cart-icon');
    if (!cartIcon) return;

    // Create Clone
    const clone = sourceElement.cloneNode(true);
    const startRect = sourceElement.getBoundingClientRect();
    const endRect = cartIcon.getBoundingClientRect();

    // Style Clone
    clone.style.position = 'fixed';
    clone.style.left = startRect.left + 'px';
    clone.style.top = startRect.top + 'px';
    clone.style.width = startRect.width + 'px';
    clone.style.height = startRect.height + 'px';
    clone.style.opacity = '1';
    clone.style.zIndex = '9999';
    clone.style.pointerEvents = 'none';
    clone.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
    clone.style.borderRadius = '50%'; // Make it round while flying

    document.body.appendChild(clone);

    // Trigger Animation (Next Frame)
    requestAnimationFrame(() => {
        clone.style.left = (endRect.left + endRect.width / 2 - 25) + 'px'; // Center to center target
        clone.style.top = (endRect.top + endRect.height / 2 - 25) + 'px';
        clone.style.width = '50px';
        clone.style.height = '50px';
        clone.style.opacity = '0.5';
    });

    // Cleanup
    setTimeout(() => {
        clone.remove();
        // Shake Cart Icon
        cartIcon.style.animation = 'shake 0.4s ease';
        setTimeout(() => cartIcon.style.animation = '', 400);
    }, 800);
}

function internalAddToCart(title, price, image, size = 'Standard', extras = [], quantity = 1) {
    // Generate a unique ID based on options to separate variations
    const uniqueId = `${title}-${size}-${extras.sort().join('')}`;
    const existingItem = cart.find(item => item.uniqueId === uniqueId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            uniqueId: uniqueId,
            title: title,
            price: price, // This is the customized unit price
            image: image,
            quantity: quantity,
            size: size,
            extras: extras
        });
    }

    saveCart();
    updateCartUI();
    showToast('Added to cart');
}

function closeCustomizationModal() {
    customizationModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentProduct = null;
}

if (closeCustomizationBtn) {
    closeCustomizationBtn.addEventListener('click', closeCustomizationModal);
}

// Close when clicking outside modal content
window.addEventListener('click', (e) => {
    if (e.target === customizationModal) {
        closeCustomizationModal();
    }
});

// Toast Notification Helper
function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
        setTimeout(() => toast.classList.add('show'), 10);
    });

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function removeFromCart(uniqueId) {
    cart = cart.filter(item => item.uniqueId !== uniqueId);
    saveCart();

    // Check if cart is empty and if there was an active reward redemption
    if (cart.length === 0) {
        const activeRewardCost = parseInt(localStorage.getItem('craveBitesActiveRewardCost')) || 0;
        if (activeRewardCost > 0) {
            // Just Clear Active Reward Tracking (No refund needed as points weren't taken)
            localStorage.removeItem('craveBitesActiveRewardCost');

            // Clear Coupon
            window.appliedCoupon = null;
            if (document.getElementById('couponInput')) document.getElementById('couponInput').value = '';
            showCouponMessage('Cart empty. Reward selection cleared.', 'success');
        }
    }

    updateCartUI();
}
// Make accessible globally used in HTML onclick
window.removeFromCart = removeFromCart;

function saveCart() {
    localStorage.setItem('craveBitesCart', JSON.stringify(cart));
}

// --- LOYALTY SYSTEM ENGINE ---
const LoyaltySystem = {
    getPoints: function () {
        return parseInt(localStorage.getItem('craveBitesPoints')) || 0;
    },

    getLockedPoints: function () {
        // Use simple cost tracking key
        return parseInt(localStorage.getItem('craveBitesActiveRewardCost')) || 0;
    },

    // Returns points available for use (Total - Currently in Cart)
    getAvailableBalance: function () {
        return Math.max(0, this.getPoints() - this.getLockedPoints());
    },

    // Syncs the lock state (Simple version: just ensure if no coupon is applied, no points are locked)
    validateLock: function (currentCouponCode) {
        const lockedPoints = this.getLockedPoints();
        if (lockedPoints > 0 && !currentCouponCode) {
            // Mismatch: Points locked but no coupon? Unlock.
            localStorage.removeItem('craveBitesActiveRewardCost');
            return true;
        }
        return false;
    }
};

function updateCartUI() {
    // 1. Sync Loyalty Lock Check
    // If user removed coupon manually, or applied a different one, release the lock.
    const lockReleased = LoyaltySystem.validateLock(window.appliedCoupon);

    // Disable Apply Coupon Button if empty
    const applyBtn = document.getElementById('applyCouponBtn');
    if (applyBtn) {
        if (cart.length === 0) {
            applyBtn.disabled = true;
            applyBtn.style.opacity = '0.5';
            applyBtn.style.cursor = 'not-allowed';
            if (couponInput) couponInput.disabled = true;
        } else {
            applyBtn.disabled = false;
            applyBtn.style.opacity = '1';
            applyBtn.style.cursor = 'pointer';
            if (couponInput) couponInput.disabled = false;
        }
    }

    // Update Counts
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => {
        el.textContent = totalCount;
        if (totalCount === 0) {
            el.style.display = 'none';
        } else {
            el.style.display = 'flex';
        }
        // Animation
        el.style.transform = 'scale(1.2)';
        setTimeout(() => {
            el.style.transform = 'scale(1)';
        }, 200);
    });

    // Update Points Display (Show Available Balance)
    const pointsEl = document.getElementById('userPoints');
    if (pointsEl) pointsEl.textContent = LoyaltySystem.getAvailableBalance();

    // Update Total Price
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;

    if (window.appliedCoupon && window.coupons[window.appliedCoupon]) {
        const couponValue = window.coupons[window.appliedCoupon];
        if (couponValue > 1) {
            // Flat Discount
            discount = couponValue;
        } else {
            // Percentage Discount
            discount = subtotal * couponValue;
        }
        if (discount > subtotal) discount = subtotal;
    }

    const total = subtotal - discount;

    const subtotalEl = document.getElementById('cartSubtotal');
    if (subtotalEl) {
        subtotalEl.textContent = '$' + subtotal.toFixed(2);
    }

    const discountRow = document.getElementById('discountRow');
    const discountEl = document.getElementById('cartDiscount');

    if (discount > 0) {
        discountRow.style.display = 'flex';
        discountEl.textContent = '-$' + discount.toFixed(2);
    } else if (window.appliedCoupon === 'FREESHIPPING') {
        discountRow.style.display = 'flex';
        discountEl.textContent = 'Free Delivery';
        discountEl.style.fontSize = '0.9rem';
    } else {
        discountRow.style.display = 'none';
    }

    if (cartTotalElement) {
        cartTotalElement.textContent = '$' + total.toFixed(2);
    }

    const cartItemsEl = document.getElementById('cartItems');
    if (!cartItemsEl) return;

    cartItemsEl.innerHTML = '';

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="empty-state" style="text-align: center; padding: 40px 20px; display: flex; flex-direction: column; align-items: center;">
                <div style="width: 80px; height: 80px; background: #ffebee; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <i class="fa-solid fa-utensils" style="font-size: 2.5rem; color: #ff5252;"></i>
                </div>
                <h3 style="font-family: 'Outfit', sans-serif; color: #2c3e50; margin-bottom: 10px;">Your plate is empty!</h3>
                <p style="color: #95a5a6; margin-bottom: 25px; font-size: 0.95rem; line-height: 1.5;">Fresh ingredients are waiting.<br>Get started with our menu!</p>
                <button onclick="closeCart(); document.getElementById('menu').scrollIntoView({behavior:'smooth'});" 
                        style="background: #ff5252; color: white; border: none; padding: 6px 16px; border-radius: 50px; font-weight: 600; font-size: 0.8rem; cursor: pointer; box-shadow: 0 10px 20px rgba(255, 82, 82, 0.2); transition: transform 0.2s;">
                    Start Ordering
                </button>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('cart-item');

            // Build Extras String
            let extrasHtml = '';
            if (item.extras && item.extras.length > 0) {
                extrasHtml = `<p style="font-size: 0.8rem; color: #888; margin-top: 2px;">+ ${item.extras.join(', ')}</p>`;
            }

            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>${item.size}</p>
                    ${extrasHtml}
                    ${item.price === 0 ?
                    '<p style="color: #27ae60; font-weight: bold;">FREE <span style="font-size: 0.8rem; color: #888; text-decoration: line-through;">($' + (item.originalPrice || '5.00') + ')</span></p>'
                    :
                    `<p>$${(item.price * item.quantity).toFixed(2)} <span style="font-size: 0.8rem; color: #888;">($${item.price.toFixed(2)} x ${item.quantity})</span></p>`
                }
                </div>
            `;

            // Create remove button safely
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-item';
            removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
            removeBtn.addEventListener('click', () => {
                removeFromCart(item.uniqueId);
            });

            itemEl.appendChild(removeBtn);
            cartItemsEl.appendChild(itemEl);
        });
    }
}

// Initialize UI
updateCartUI();

// Make removeFromCart globally accessible for the onclick attribute
window.removeFromCart = removeFromCart;

// Login Modal Logic
const loginModal = document.getElementById('loginModal');
const openLoginBtn = document.getElementById('openLogin');
const closeLoginBtn = document.getElementById('closeLogin');
const loginForm = document.getElementById('loginForm');
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');
const loginContainer = document.querySelector('.login-container');

// Auth Check Function (Updated: UI only, no forced lock)
function checkAuth() {
    const userStr = localStorage.getItem('craveBitesUser');
    const loginBtn = document.getElementById('openLogin');
    const profileContainer = document.getElementById('profileContainer');
    const userProfileBtn = document.getElementById('userProfileBtn');

    if (userStr) {
        try {
            const user = JSON.parse(userStr);
            // User logged in
            if (loginBtn) loginBtn.style.display = 'none';
            if (profileContainer) profileContainer.style.display = 'block';

            // Set Initial
            if (userProfileBtn) {
                const initial = (user.name || user.email || 'U').charAt(0).toUpperCase();
                userProfileBtn.innerHTML = initial;
            }

            loginModal.classList.remove('forced');

            // Populate Dropdown
            const ddName = document.getElementById('ddName');
            const ddEmail = document.getElementById('ddEmail');
            const ddInitial = document.getElementById('ddInitial');
            if (ddName) ddName.innerText = user.name || 'User';
            if (ddEmail) ddEmail.innerText = user.email || '';
            if (ddInitial) ddInitial.innerText = (user.name || 'U').charAt(0).toUpperCase();
        } catch (e) {
            console.error('Auth Parse Error', e);
        }
    } else {
        // User Logged Out
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (profileContainer) profileContainer.style.display = 'none';
    }
}

// Run Auth Check Immediately
checkAuth();

if (openLoginBtn) {
    openLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// User Profile Button Listener (For Dropdown)
// User Profile Button Delegated Listener
document.addEventListener('click', (e) => {
    const btn = e.target.closest('#userProfileBtn');
    if (btn) {
        e.preventDefault();
        e.stopPropagation(); // Prevent Close Listener from firing immediately
        const dd = document.getElementById('profileDropdown');
        if (dd) {
            if (dd.style.display === 'block') {
                dd.style.opacity = '0';
                dd.style.transform = 'translateY(10px)';
                setTimeout(() => { dd.style.display = 'none'; }, 300);
            } else {
                dd.style.display = 'block';
                // Force reflow
                void dd.offsetWidth;
                dd.style.opacity = '1';
                dd.style.transform = 'translateY(0)';
            }
        }
    }
});

// Logout Logic
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('craveBitesUser');

        // Instant UI Update
        checkAuth();

        showToast('Logged out successfully');
        setTimeout(() => window.location.reload(), 1000);
    });
}

// Close Dropdown when clicking outside
window.addEventListener('click', (e) => {
    const dd = document.getElementById('profileDropdown');
    const btn = document.getElementById('userProfileBtn');
    if (dd && dd.style.display === 'block' && !dd.contains(e.target) && (!btn || !btn.contains(e.target))) {
        dd.style.opacity = '0';
        dd.style.transform = 'translateY(10px)';
        setTimeout(() => { dd.style.display = 'none'; }, 300);
    }
});

if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Prevent closing if forced
        if (loginModal.classList.contains('forced')) return;
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside (PREVENT if forced)
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        if (loginModal.classList.contains('forced')) return; // BLOCK CLOSE
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Password Toggle
if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
}

// Sign Up Toggle Logic
const signUpLink = document.querySelector('.login-footer a');
const loginModalTitle = document.querySelector('.login-header h2');
const loginModalDesc = document.querySelector('.login-header p');
const loginBtn = document.querySelector('.login-form button');
const loginBtnText = loginBtn ? loginBtn.querySelector('.btn-text') : null;
const termsGroup = document.querySelector('.terms-group');

if (signUpLink) {
    signUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        const isSignUp = loginContainer.classList.toggle('sign-up-mode');

        // Clear previous errors
        clearAuthErrors();

        if (isSignUp) {
            loginModalTitle.innerText = "Create Account";
            loginModalDesc.innerText = "Join us for exclusive offers!";
            if (loginBtnText) loginBtnText.innerText = "Sign Up";
            signUpLink.innerText = "Login";
            signUpLink.parentElement.firstChild.textContent = "Already have an account? ";

            // Show Terms
            if (termsGroup) {
                termsGroup.style.display = 'block';
                setTimeout(() => termsGroup.style.opacity = '1', 10);
            }
        } else {
            loginModalTitle.innerText = "Welcome Back!";
            loginModalDesc.innerText = "Please login to your account.";
            if (loginBtnText) loginBtnText.innerText = "Login";
            signUpLink.innerText = "Sign Up";
            signUpLink.parentElement.firstChild.textContent = "Don't have an account? ";

            // Hide Terms
            if (termsGroup) {
                termsGroup.style.opacity = '0';
                setTimeout(() => termsGroup.style.display = 'none', 300);
            }
        }
    });
}

// Input Validation Helpers
function showError(input, message) {
    const group = input.closest('.input-group');
    const feedback = group.querySelector('.input-feedback');
    group.classList.add('error');
    if (feedback) feedback.innerText = message;

    // Shake animation
    group.style.animation = 'shake 0.5s';
    setTimeout(() => group.style.animation = '', 500);
}

function clearError(input) {
    const group = input.closest('.input-group');
    const feedback = group.querySelector('.input-feedback');
    group.classList.remove('error');
    if (feedback) feedback.innerText = '';
}

function clearAuthErrors() {
    document.querySelectorAll('.input-group').forEach(group => {
        group.classList.remove('error');
    });
    const msg = document.getElementById('authErrorMsg');
    if (msg) {
        msg.classList.remove('visible');
        msg.innerText = '';
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Real-time Validation
const emailInput = document.getElementById('email');
// passwordInput is already defined globally

if (emailInput) {
    emailInput.addEventListener('input', () => {
        if (emailInput.value.length > 0) clearError(emailInput);
    });
    emailInput.addEventListener('blur', () => {
        if (emailInput.value.length > 0 && !isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
        }
    });
}

if (passwordInput) {
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length > 0) clearError(passwordInput);
    });
}

// Login/Signup Form Submission
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearAuthErrors();

        const btn = this.querySelector('button[type="submit"]');
        const btnText = btn.querySelector('.btn-text');
        const loader = btn.querySelector('.loader');

        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const isSignUp = loginContainer.classList.contains('sign-up-mode');
        const termsCheck = document.getElementById('termsCheck');

        // VALIDATION
        let isValid = true;

        if (!isValidEmail(email)) {
            showError(emailInput, 'Invalid email address');
            isValid = false;
        }

        if (password.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        }

        if (isSignUp && termsCheck && !termsCheck.checked) {
            const errorMsg = document.getElementById('authErrorMsg');
            if (errorMsg) {
                errorMsg.innerText = 'You must agree to the Terms & Conditions';
                errorMsg.classList.add('visible');
                errorMsg.style.animation = 'shake 0.5s';
            }
            isValid = false;
        }

        if (!isValid) return;

        // LOADING STATE
        const originalLabel = btnText.innerText;
        btnText.style.display = 'none';
        loader.style.display = 'block';
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Get database of users
            let usersDB = JSON.parse(localStorage.getItem('craveBitesUsersDB')) || {};

            function resetBtn() {
                loader.style.display = 'none';
                btnText.style.display = 'block';
                btnText.innerText = originalLabel;
                btn.disabled = false;
            }

            if (isSignUp) {
                // SIGN UP FLOW
                if (usersDB[email]) {
                    resetBtn();
                    const errorMsg = document.getElementById('authErrorMsg');
                    if (errorMsg) {
                        errorMsg.innerText = 'Account already exists. Please login.';
                        errorMsg.classList.add('visible');
                    }
                    showError(emailInput, 'Email taken');
                    return;
                }

                // Create new user
                const newUser = {
                    email: email,
                    password: password, // In a real app, NEVER store plain text passwords
                    name: email.split('@')[0],
                    joined: new Date().toISOString()
                };

                usersDB[email] = newUser;
                localStorage.setItem('craveBitesUsersDB', JSON.stringify(usersDB));

                // Login immediately
                localStorage.setItem('craveBitesUser', JSON.stringify(newUser));

                // Success Animation
                loader.style.display = 'none';
                btnText.style.display = 'block';
                btnText.innerText = 'Success!';
                btn.style.backgroundColor = '#2EC4B6';
                btn.style.borderColor = '#2EC4B6';

                setTimeout(() => {
                    loginModal.classList.remove('active', 'forced');
                    document.body.style.overflow = 'auto';

                    // Reset UI
                    btnText.innerText = originalLabel;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';

                    checkAuth();
                    showToast('Account created! Welcome, ' + newUser.name);

                    // Show Rules Modal Once

                }, 1000);

            } else {
                // LOGIN FLOW
                const storedUser = usersDB[email];

                if (!storedUser || storedUser.password !== password) {
                    resetBtn();
                    const errorMsg = document.getElementById('authErrorMsg');
                    if (errorMsg) {
                        errorMsg.innerText = !storedUser ? 'No account found. Please Sign Up first.' : 'Incorrect password.';
                        errorMsg.classList.add('visible');
                        errorMsg.style.animation = 'shake 0.5s';
                    }
                    if (!storedUser) showError(emailInput, 'Not found');
                    else showError(passwordInput, 'Incorrect');
                    return;
                }

                // Valid Login
                localStorage.setItem('craveBitesUser', JSON.stringify(storedUser));

                // Success Animation
                loader.style.display = 'none';
                btnText.style.display = 'block';
                btnText.innerText = 'Success!';
                btn.style.backgroundColor = '#2EC4B6';
                btn.style.borderColor = '#2EC4B6';

                setTimeout(() => {
                    loginModal.classList.remove('active', 'forced');
                    document.body.style.overflow = 'auto';

                    // Reset UI
                    btnText.innerText = originalLabel;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';

                    checkAuth();
                    showToast('Welcome back, ' + storedUser.name + '!');

                }, 1000);
            }
        }, 1500);
    });
}

// Map Logic
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map');

    if (mapContainer && typeof L !== 'undefined') {
        try {
            // Initialize Map centered on Sri Lanka (approximate center)
            const map = L.map('map').setView([7.8731, 80.7718], 7); // Adjusted center/zoom for better view

            // Tiles (CartoDB Positron for that clean Uber-like look)
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(map);

            // Markers (Colombo, Kandy, Kurunegala)
            const locations = [
                { name: 'Colombo', coords: [6.9271, 79.8612] },
                { name: 'Kandy', coords: [7.2906, 80.6337] },
                { name: 'Kurunegala', coords: [7.4818, 80.3609] }
            ];

            locations.forEach(loc => {
                L.marker(loc.coords).addTo(map)
                    .bindPopup('<b>' + loc.name + '</b>');
            });

            // Force a resize calculation after a short delay to ensure rendering matches container
            setTimeout(() => {
                map.invalidateSize();
            }, 100);

        } catch (error) {
            console.error('Error initializing map:', error);
        }
    } else {
        console.error('Map initialization aborted: Container or Leaflet missing.');
    }
});

// Search Functionality
const searchInput = document.getElementById('searchMain');
const searchBtn = document.querySelector('.nav-search button');
const suggestionsContainer = document.querySelector('.search-suggestions');
let allProducts = [];

// Initialize products data from the DOM
function initializeProducts() {
    if (allProducts.length > 0) return;
    // STRICTLY select only from the main menu grid to avoid duplicates from favorites/cart/suggestions
    const cards = document.querySelectorAll('.menu-grid .product-card');
    allProducts = Array.from(cards).map(card => {
        // Extract title without price (which is now inside h3)
        const h3 = card.querySelector('h3');
        const clone = h3.cloneNode(true);
        const priceSpan = clone.querySelector('.price');
        if (priceSpan) priceSpan.remove();
        const title = clone.innerText.trim();

        const desc = card.querySelector('p').innerText;
        const img = card.querySelector('img').src;
        const price = card.querySelector('.price').innerText;
        const category = card.getAttribute('data-category');
        const ratingText = card.querySelector('.rating').innerText;
        const rating = parseFloat(ratingText) || 0; // Default to 0 if parsing fails

        return {
            element: card,
            title: title,
            description: desc,
            image: img,
            price: price,
            category: category || '',
            rating: rating
        };
    });
}

// Calculate Levenshtein distance for fuzzy matching
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1 // deletion
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

// Calculate relevance score
function getSearchScore(product, tokens) {
    let score = 0;
    const titleLower = product.title.toLowerCase();
    const descLower = product.description.toLowerCase();
    const catLower = product.category.toLowerCase();

    // Standard scoring
    tokens.forEach(token => {
        // Stop words filtering
        const stopWords = ['i', 'want', 'a', 'an', 'the', 'find', 'search', 'for', 'me', 'please'];
        if (stopWords.includes(token)) return;

        // Exact and partial matches
        if (titleLower.includes(token)) score += 10;
        if (catLower.includes(token)) score += 5;
        if (descLower.includes(token)) score += 2;

        // Starts with bonus
        if (titleLower.startsWith(token)) score += 5;
    });

    return score;
}

// Get fuzzy matches if no exact/partial matches found
function getFuzzyMatches(tokens) {
    if (tokens.length === 0) return [];

    // Filter stop words for fuzzy search to focus on key terms
    const stopWords = ['i', 'want', 'a', 'an', 'the', 'find', 'search', 'for', 'me', 'please'];
    const keyTokens = tokens.filter(t => !stopWords.includes(t));

    if (keyTokens.length === 0) return [];

    return allProducts.map(p => {
        // Check minimum distance against title words
        const titleWords = p.title.toLowerCase().split(/\s+/);
        let minDistance = 100;

        keyTokens.forEach(token => {
            titleWords.forEach(word => {
                const dist = levenshteinDistance(token, word);
                if (dist < minDistance) minDistance = dist;
            });
        });

        // Score inversely proportional to distance (closer is better)
        // Only consider close matches (e.g. distance <= 3)
        let score = 0;
        if (minDistance <= 3) { // Allow for some typos
            score = 10 - minDistance;
        }

        return { product: p, score: score };
    }).filter(item => item.score > 0);
}

function showSuggestions(results) {
    if (!suggestionsContainer) return;
    suggestionsContainer.innerHTML = '';

    if (results.length === 0) {
        suggestionsContainer.classList.remove('active');
        return;
    }

    results.forEach(item => {
        const p = item.product;
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        // Note: Keeping image and description for better UX, though user asked for name list logic.
        // Visually this is still a list of items.
        div.innerHTML = `
                <img src="${p.image}" alt="${p.title}">
            <div class="suggestion-item-info">
                <h4>${p.title}</h4>
                <p>${p.description}</p>
            </div>
            <div class="suggestion-price" style="margin-left: auto; font-size: 0.85rem; font-weight: 600; color: #000; opacity: 0.6;">${p.price}</div>
            `;
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            searchInput.value = p.title;
            suggestionsContainer.classList.remove('active');
            performSearch(p.title);
        });
        suggestionsContainer.appendChild(div);
    });
    suggestionsContainer.classList.add('active');
}

function performSearch(explicitQuery = null) {
    if (allProducts.length === 0) initializeProducts();

    // Use explicit query ONLY if it is a string (to avoid Event objects from click listeners)
    let query;
    if (typeof explicitQuery === 'string') {
        query = explicitQuery;
    } else {
        query = searchInput.value;
    }

    query = query.toLowerCase().trim();

    const categoryBtns = document.querySelectorAll('.cat-btn');

    // Reset categories UI
    categoryBtns.forEach(btn => btn.classList.remove('active'));

    if (query === '') {
        // Default to Burger as requested
        const defaultBtn = document.querySelector('.cat-btn[data-category="burger"]');
        if (defaultBtn) defaultBtn.click();
        return;
    }

    // 1. Check for Exact Match Priority (User Request: Show ONLY the exact item if matched)
    const exactMatches = allProducts.filter(p => p.title.toLowerCase() === query);

    if (exactMatches.length > 0) {
        // Show ONLY exact matches
        allProducts.forEach(p => {
            // Check if this product is one of the exact matches
            const isMatch = exactMatches.includes(p);
            p.element.style.display = isMatch ? 'block' : 'none';
        });

        // Scroll to menu
        const menuSection = document.getElementById('menu');
        if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
        return;
    }

    // 2. Standard Search (Scoring & Fuzzy)
    const tokens = query.split(/\s+/).filter(t => t.length > 0);
    let results = allProducts.map(p => ({ product: p, score: getSearchScore(p, tokens) }));

    // If no results from strict/partial match, try fuzzy
    const hasStrictResults = results.some(r => r.score > 0);

    if (!hasStrictResults) {
        const fuzzyResults = getFuzzyMatches(tokens);
        // Merge fuzzy results into main results
        results = results.map(r => {
            const fuzzyMatch = fuzzyResults.find(fr => fr.product === r.product);
            return fuzzyMatch ? fuzzyMatch : r;
        });
    }

    let hasResults = false;

    results.forEach(item => {
        if (item.score > 0) {
            item.product.element.style.display = 'block';
            hasResults = true;
        } else {
            item.product.element.style.display = 'none';
        }
    });

    if (hasResults) {
        const menuSection = document.getElementById('menu');
        if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Search History Logic
let searchHistory = JSON.parse(localStorage.getItem('craveBitesSearchHistory')) || [];

function saveSearchHistory(query) {
    if (!query) return;
    // Remove if exists to push to top
    searchHistory = searchHistory.filter(item => item !== query);
    searchHistory.unshift(query);
    // Limit to 5 items
    if (searchHistory.length > 5) searchHistory.pop();
    localStorage.setItem('craveBitesSearchHistory', JSON.stringify(searchHistory));
}

if (searchInput) {
    // Prevent typing email addresses
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value;
        // Simple check for '@' symbol which is key for emails
        if (val.includes('@')) {
            e.target.value = val.replace(/@/g, '');
            showToast('Email addresses are not allowed in search');
        }
    });

    searchInput.addEventListener('focus', () => {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            // Re-trigger search logic to show suggestions if query exists
            const tokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
            if (tokens.length > 0) {
                // ... (reuse search logic or just rely on input event)
                // For simplicity, let's just show history if empty or trigger input handler simulation
                searchInput.dispatchEvent(new Event('input'));
            }
        } else if (searchHistory.length > 0) {
            // Show history
            /* 
               (Optional: Implement history view if desired, but user didn't explicitly ask for it to be visible on focus, 
               just "do not give access to type emails". Focusing on that restriction primarily.)
            */
        }
    });

    // ... (rest of listeners)
}

function showSearchHistory() {
    if (!suggestionsContainer) return;
    suggestionsContainer.innerHTML = '';

    if (searchHistory.length === 0) {
        suggestionsContainer.classList.remove('active');
        return;
    }

    const header = document.createElement('div');
    header.style.padding = '8px 15px';
    header.style.fontSize = '0.8rem';
    header.style.color = '#888';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.innerText = 'Recent Searches';

    const clearBtn = document.createElement('span');
    clearBtn.innerText = 'Clear';
    clearBtn.style.cursor = 'pointer';
    clearBtn.style.color = '#ff4d4d';
    clearBtn.onclick = (e) => {
        e.stopPropagation();
        searchHistory = [];
        localStorage.removeItem('craveBitesSearchHistory');
        suggestionsContainer.classList.remove('active');
    };
    header.appendChild(clearBtn);
    suggestionsContainer.appendChild(header);

    searchHistory.forEach(term => {
        const div = document.createElement('div');
        div.className = 'suggestion-item history-item';
        div.innerHTML = `
                <i class="fa-solid fa-clock-rotate-left" style="margin-right: 10px; color: #aaa;"></i>
                    <span style="flex: 1;">${term}</span>
            `;
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            searchInput.value = term;
            suggestionsContainer.classList.remove('active');
            performSearch(term);
        });
        suggestionsContainer.appendChild(div);
    });
    suggestionsContainer.classList.add('active');
}

if (searchInput) {
    // Show history on focus if empty
    searchInput.addEventListener('focus', () => {
        initializeProducts();
        if (searchInput.value.trim() === '') {
            showSearchHistory();
        }
    });

    let selectedSuggestionIndex = -1;

    searchInput.addEventListener('input', (e) => {
        selectedSuggestionIndex = -1;
        if (allProducts.length === 0) initializeProducts();
        const query = e.target.value.toLowerCase().trim();

        if (query.length === 0) {
            showSearchHistory(); // Show history instead of clearing
            performSearch();
            return;
        }

        const tokens = query.split(/\s+/).filter(t => t.length > 0);

        // 1. Try standard match
        let results = allProducts
            .map(p => ({ product: p, score: getSearchScore(p, tokens) }))
            .filter(item => item.score > 0);

        // 2. Fallback to Fuzzy if no standard matches
        if (results.length === 0) {
            results = getFuzzyMatches(tokens);
        }

        // Sort and slice
        results = results.sort((a, b) => b.score - a.score).slice(0, 5);

        showSuggestions(results);
        performSearch(); // Update grid in real-time
    });

    searchInput.addEventListener('keydown', (e) => {
        const items = suggestionsContainer.querySelectorAll('.suggestion-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedSuggestionIndex++;
            if (selectedSuggestionIndex >= items.length) selectedSuggestionIndex = 0;
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedSuggestionIndex--;
            if (selectedSuggestionIndex < 0) selectedSuggestionIndex = items.length - 1;
            updateSelection(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedSuggestionIndex > -1 && items[selectedSuggestionIndex]) {
                items[selectedSuggestionIndex].click();
            } else {
                if (suggestionsContainer) suggestionsContainer.classList.remove('active');

                // Save to history on enter
                const finalQuery = searchInput.value.trim();
                if (finalQuery) saveSearchHistory(finalQuery);

                performSearch();
            }
        } else if (e.key === 'Escape') {
            if (suggestionsContainer) suggestionsContainer.classList.remove('active');
            searchInput.blur();
        }
    });

    function updateSelection(items) {
        items.forEach((item, index) => {
            if (index === selectedSuggestionIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (suggestionsContainer && !searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.classList.remove('active');
        }
    });
}
if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}

// Render Favorites Section
function renderFavorites() {
    const section = document.getElementById('favorites');
    const grid = document.getElementById('favorites-grid');
    if (!section || !grid) return;

    const favorites = JSON.parse(localStorage.getItem('craveBitesFavorites') || '[]');

    if (favorites.length === 0) {
        // Show empty state for favorites too
        section.style.display = 'block';
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; display: flex; flex-direction: column; align-items: center; background: white; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                <div style="width: 90px; height: 90px; background: #ffebee; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 25px;">
                    <i class="fa-solid fa-heart-crack" style="font-size: 2.5rem; color: #ff5252;"></i>
                </div>
                <h3 style="font-family: 'Outfit', sans-serif; color: #2c3e50; margin-bottom: 10px; font-size: 1.5rem;">No Favorites Yet</h3>
                <p style="color: #95a5a6; margin-bottom: 30px; font-size: 1rem;">Save your top picks here for easy access!</p>
                <button onclick="document.getElementById('menu').scrollIntoView({behavior:'smooth'});" 
                        style="background: #ff5252; color: white; border: none; padding: 14px 35px; border-radius: 50px; font-weight: 600; font-size: 1rem; cursor: pointer; box-shadow: 0 10px 20px rgba(255, 82, 82, 0.2); transition: transform 0.2s;">
                    Explore Menu
                </button>
            </div>
        `;
        return;
    }
    section.style.display = 'block';

    // Clear
    grid.innerHTML = '';

    // Use Main Menu as Source of Truth
    const menuSection = document.getElementById('menu');
    if (!menuSection) return;

    const allCards = menuSection.querySelectorAll('.product-card');

    // Sort logic or just append
    favorites.forEach(favTitle => {
        for (let card of allCards) {
            const h3 = card.querySelector('h3');
            if (h3) {
                const t = h3.innerText.split('$')[0].trim();
                if (t === favTitle) {
                    const clone = card.cloneNode(true);
                    grid.appendChild(clone);
                    break;
                }
            }
        }
    });

    updateFavoriteIcons();
}


function updateFavoriteIcons() {
    const favorites = JSON.parse(localStorage.getItem('craveBitesFavorites') || '[]');
    // Update ALL buttons (Main Menu + Favorites Section)
    document.querySelectorAll('.fav-btn').forEach(btn => {
        const card = btn.closest('.product-card');
        if (card) {
            const h3 = card.querySelector('h3');
            if (h3) {
                const t = h3.innerText.split('$')[0].trim();
                if (favorites.includes(t)) btn.classList.add('active');
                else btn.classList.remove('active');
            }
        }
    });
}

// Delegated Listener for Favorites
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.fav-btn');
    if (btn) {
        e.preventDefault();
        e.stopPropagation();

        if (!localStorage.getItem('craveBitesUser')) {
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            return;
        }

        const card = btn.closest('.product-card');
        if (card) {
            const h3 = card.querySelector('h3');
            if (h3) {
                const title = h3.innerText.split('$')[0].trim();
                const favorites = JSON.parse(localStorage.getItem('craveBitesFavorites') || '[]');

                const index = favorites.indexOf(title);

                if (index > -1) {
                    favorites.splice(index, 1);
                    showToast('Removed from favorites');
                } else {
                    favorites.push(title);
                    showToast('Added to favorites');
                }
                localStorage.setItem('craveBitesFavorites', JSON.stringify(favorites));
                // Update UI Immediately
                renderFavorites();
                updateFavCount();

                // Sync with Firebase - REMOVED
                // if (window.saveUserData) window.saveUserData();
            }
        }
    }
});

// Initial Render
// Initial Render
renderFavorites();
updateFavCount();

function updateFavCount() {
    const favorites = JSON.parse(localStorage.getItem('craveBitesFavorites') || '[]');
    const countEl = document.querySelector('.fav-count');
    if (countEl) {
        countEl.innerText = favorites.length;
        if (favorites.length > 0) {
            countEl.style.display = 'flex';
        } else {
            countEl.style.display = 'none';
        }
    }
}

// Navbar Favorite Icon Click Listener
const navFavIcon = document.querySelector('.fav-icon');
if (navFavIcon) {
    navFavIcon.addEventListener('click', () => {
        const favSection = document.getElementById('favorites');
        if (favSection) {
            // Ensure it's visible (logic in renderFavorites handles this, but forcing it here just in case)
            const favorites = JSON.parse(localStorage.getItem('craveBitesFavorites') || '[]');
            if (favorites.length === 0) {
                showToast('Your favorites list is empty!');
            } else {
                favSection.style.display = 'block';
                favSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}


// Social Login Listeners
document.addEventListener('DOMContentLoaded', () => {
    const googleBtn = document.querySelector('.social-btn.google');
    if (googleBtn) googleBtn.addEventListener('click', (e) => { e.preventDefault(); if (window.fbGoogleLogin) window.fbGoogleLogin(); });

    const facebookBtn = document.querySelector('.social-btn.facebook');
    if (facebookBtn) facebookBtn.addEventListener('click', (e) => { e.preventDefault(); if (window.fbFacebookLogin) window.fbFacebookLogin(); });

    const appleBtn = document.querySelector('.social-btn.apple');
    if (appleBtn) appleBtn.addEventListener('click', (e) => { e.preventDefault(); if (window.fbAppleLogin) window.fbAppleLogin(); });
});

// Search Action Button Logic (Morphing)
const searchActionBtn = document.getElementById('searchActionBtn');
if (searchInput && searchActionBtn) {
    const icon = searchActionBtn.querySelector('i');

    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim().length > 0) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-magnifying-glass';
        }
    });

    searchActionBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission if any
        if (icon.classList.contains('fa-xmark')) {
            // Cancel Action
            searchInput.value = '';
            icon.className = 'fa-solid fa-magnifying-glass';
            suggestionsContainer.classList.remove('active');
            performSearch(); // Reset grid
        } else {
            // Search Action
            performSearch();
        }
    });
}

// Global Click Listener to "Go Back" (Reset Search) when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput || searchInput.value.trim() === '') return;

    // Ignore clicks inside the search bar itself
    if (e.target.closest('.nav-search')) return;

    // Ignore clicks on product items (Add to cart, open details, etc.)
    // User specifically mentioned "except suggested food items' Add to cart button", 
    // implying interaction with results should not cancel search.
    if (e.target.closest('.product-card')) return;

    // Ignore clicks inside modals (login, details, etc.)
    if (e.target.closest('.modal') || e.target.closest('.login-modal')) return;

    // If we're here, we clicked "anywhere else" -> Reset Search
    searchInput.value = '';

    if (searchActionBtn) {
        const icon = searchActionBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-magnifying-glass';
    }

    if (suggestionsContainer) suggestionsContainer.classList.remove('active');

    performSearch(); // Resets grid to show all items
});

// Force Default Category Selection on Load
document.addEventListener('DOMContentLoaded', () => {
    // Determine which category to default to
    const defaultCategory = 'burger';
    const btn = document.querySelector(`.cat-btn[data-category="${defaultCategory}"]`);

    if (btn) {
        // Simulate click to trigger filter logic
        // We use a small timeout to ensure all scripts/listeners are ready
        setTimeout(() => {
            btn.click();
        }, 50);
    }
});

// Check for openCart param (Legacy support)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('openCart') === 'true') {
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({ path: newUrl }, '', newUrl);
}

// Check for Win Mode (Prize Selection)
const winModeType = localStorage.getItem('craveBitesWinMode');
if (winModeType) {
    // Find products first (wait a bit for product load if async, but here they are hardcoded/loaded)
    // Since products might be defined later or fetched, we'll try to find them from the rendered DOM or global variable.
    // Assuming products are loaded. If not, we might need a delay.
    setTimeout(() => {
        enterWinMode(winModeType);
    }, 500);
}


// --- WIN MODE LOGIC (Restricted Selection) ---
// --- WIN MODE LOGIC (Restricted Selection) ---
function enterWinMode(type) {
    // 0. Auto-Switch Category Logic
    let targetCategory = 'all'; // Fallback
    if (type === 'drink') targetCategory = 'drinks';
    if (type === 'melt') targetCategory = 'burger';

    const catBtn = document.querySelector(`.cat-btn[data-category="${targetCategory}"]`);
    if (catBtn && !catBtn.classList.contains('active')) {
        catBtn.click();

        // Wait for render, then recurse or continue
        setTimeout(() => {
            enterWinMode_Step2(type); // Continue to Step 2
        }, 300);
        return;
    }

    // If already active or no button found, proceed immediately
    enterWinMode_Step2(type);
}

function enterWinMode_Step2(type) {
    // 1. Filter Products
    const keyword = type === 'melt' ? 'melt' : 'drink';

    // Scrape DOM
    // Scrape DOM
    // (Inner function wrapper removed to fix execution)

    // 1. Filter Products
    const allCards = document.querySelectorAll('.product-card');
    let eligibleCards = [];

    if (type === 'melt') {
        const targetMelts = [
            'thandoori chicken melt',
            'seafood sensation melt',
            'spicy chicken combo melt'
        ];

        // Try to find them in DOM
        allCards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            if (targetMelts.some(t => title.includes(t))) {
                eligibleCards.push(card.cloneNode(true));
            }
        });

        // IF NOT FOUND (because they are new items not in static HTML), INJECT MOCKS
        if (eligibleCards.length === 0) {
            // Melts not found in DOM, injecting mocks for Win Mode
            const mockMelts = [
                { title: 'Thandoori Chicken Melt', price: 16.99, img: 'foods/thandoori%20chicken%20melt.jpeg', desc: 'Spicy thandoori chicken with butter masala sauce.', rating: 4.9 },
                { title: 'Seafood Sensation Melt', price: 15.50, img: 'foods/seafood%20sensation%20melt.jpeg', desc: 'Crab, shrimp, and melted cheese perfection.', rating: 4.8 },
                { title: 'Spicy Chicken Combo Melt', price: 14.50, img: 'foods/spicy%20chicken%20combo%20melt.jpeg', desc: 'Crispy spicy chicken with melted pepper jack.', rating: 4.7 }
            ];

            mockMelts.forEach(m => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-img">
                        <img src="${m.img}" alt="${m.title}" onerror="this.src='assets/hero-burger.png'">
                    </div>
                    <div class="product-info">
                        <div class="rating">
                            <i class="fa-solid fa-star"></i> ${m.rating}
                        </div>
                        <h3>${m.title} <span class="price">$${m.price.toFixed(2)}</span></h3>
                        <p>${m.desc}</p>
                        <div class="product-actions">
                            <button class="add-btn">Add to Cart</button>
                        </div>
                    </div>
                `;
                eligibleCards.push(card);
            });
        }
    } else {
        // DRINK LOGIC - Strict 3 Items
        const targetDrinks = [
            'oreo shake',
            'berry blast smoothie',
            'peach iced tea'
        ];

        // Try to find them in DOM
        allCards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            if (targetDrinks.some(t => title.includes(t))) {
                eligibleCards.push(card.cloneNode(true));
            }
        });

        // IF NOT FOUND, INJECT MOCKS
        if (eligibleCards.length === 0) {
            // Drinks not found in DOM, injecting mocks for Win Mode
            const mockDrinks = [
                { title: 'Oreo Shake', price: 5.50, img: 'foods/oreo%20shake.jpeg', desc: 'Vanilla shake blended with Oreo cookies.', rating: 4.8 },
                { title: 'Berry Blast Smoothie', price: 5.50, img: 'foods/berry%20blast%20smoothie.jpeg', desc: 'Mix of strawberries, blueberries, and raspberries.', rating: 4.9 },
                { title: 'Peach Iced Tea', price: 3.50, img: 'foods/peach%20iced%20tea.jpeg', desc: 'Sweet iced tea with peach flavor.', rating: 4.7 }
            ];

            mockDrinks.forEach(m => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                        <div class="product-img">
                            <img src="${m.img}" alt="${m.title}" onerror="this.src='assets/hero-burger.png'">
                        </div>
                        <div class="product-info">
                            <div class="rating">
                                <i class="fa-solid fa-star"></i> ${m.rating}
                            </div>
                            <h3>${m.title} <span class="price">$${m.price.toFixed(2)}</span></h3>
                            <p>${m.desc}</p>
                            <div class="product-actions">
                                <button class="add-btn">Add to Cart</button>
                            </div>
                        </div>
                    `;
                eligibleCards.push(card);
            });
        }
    }

    if (eligibleCards.length === 0) {
        console.warn('No eligible win items found.');
        localStorage.removeItem('craveBitesWinMode');
        return;
    }

    // 2. Create Overlay and Modal
    const overlay = document.createElement('div');
    overlay.id = 'winModeOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.95)'; // Darker
    overlay.style.zIndex = '9998';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.overflowY = 'auto';

    const modalContainer = document.createElement('div');
    modalContainer.style.width = '90%';
    modalContainer.style.maxWidth = '1200px';
    modalContainer.style.textAlign = 'center';
    modalContainer.style.padding = '20px';
    modalContainer.style.zIndex = '9999';
    modalContainer.style.display = 'flex';
    modalContainer.style.flexDirection = 'column';
    modalContainer.style.alignItems = 'center';

    const titleEl = document.createElement('h2');
    titleEl.innerText = `Select Your FREE ${type === 'melt' ? 'Melt' : 'Drink'}!`;
    titleEl.style.fontSize = '3.5rem';
    titleEl.style.fontWeight = '800';
    titleEl.style.marginBottom = '40px';
    titleEl.style.textTransform = 'uppercase';
    titleEl.style.letterSpacing = '1px';
    // Gradient Text Design
    titleEl.style.background = 'linear-gradient(to right, #FFD700, #ffaa00)';
    titleEl.style.webkitBackgroundClip = 'text';
    titleEl.style.webkitTextFillColor = 'transparent';
    titleEl.style.filter = 'drop-shadow(0 2px 10px rgba(255, 170, 0, 0.3))'; // Subtle glow instead of hard shadow

    // Close Button
    // Close Button
    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'Close';
    closeBtn.style.position = 'fixed'; // Changed from absolute to fixed relative to viewport
    closeBtn.style.top = '30px';
    closeBtn.style.right = '30px';
    closeBtn.style.padding = '10px 25px';
    closeBtn.style.background = 'rgba(0,0,0,0.5)'; // Add background specifically for visibility
    closeBtn.style.color = '#fff';
    closeBtn.style.border = '2px solid rgba(255,255,255,0.5)';
    closeBtn.style.borderRadius = '30px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.zIndex = '10000'; // Ensure it's on top
    closeBtn.onclick = () => {
        // Custom Confirm Modal
        const confirmOverlay = document.createElement('div');
        confirmOverlay.style.position = 'fixed';
        confirmOverlay.style.top = '0';
        confirmOverlay.style.left = '0';
        confirmOverlay.style.width = '100vw';
        confirmOverlay.style.height = '100vh';
        confirmOverlay.style.background = 'rgba(0,0,0,0.85)';
        confirmOverlay.style.zIndex = '20000';
        confirmOverlay.style.display = 'flex';
        confirmOverlay.style.justifyContent = 'center';
        confirmOverlay.style.alignItems = 'center';
        confirmOverlay.style.backdropFilter = 'blur(5px)';

        const confirmBox = document.createElement('div');
        confirmBox.style.background = '#fff';
        confirmBox.style.padding = '40px';
        confirmBox.style.borderRadius = '20px';
        confirmBox.style.textAlign = 'center';
        confirmBox.style.maxWidth = '400px';
        confirmBox.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
        confirmBox.style.animation = 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

        const title = document.createElement('h3');
        title.innerText = 'Skip Your Prize?';
        title.style.margin = '0 0 15px 0';
        title.style.fontSize = '1.8rem';
        title.style.color = '#333';

        const msg = document.createElement('p');
        msg.innerText = "Are you sure you want to leave without claiming your free item?";
        msg.style.color = '#666';
        msg.style.marginBottom = '30px';
        msg.style.fontSize = '1.1rem';
        msg.style.lineHeight = '1.5';

        const btnGroup = document.createElement('div');
        btnGroup.style.display = 'flex';
        btnGroup.style.gap = '15px';
        btnGroup.style.justifyContent = 'center';

        const cancelBtn = document.createElement('button');
        cancelBtn.innerText = 'Wait, I want it!';
        cancelBtn.style.padding = '12px 24px';
        cancelBtn.style.border = 'none';
        cancelBtn.style.background = '#ffaa00'; // Match Theme (Gold/Orange)
        cancelBtn.style.color = '#fff';
        cancelBtn.style.borderRadius = '50px';
        cancelBtn.style.fontSize = '1rem';
        cancelBtn.style.fontWeight = '600';
        cancelBtn.style.cursor = 'pointer';
        cancelBtn.style.flex = '1';
        cancelBtn.onclick = () => confirmOverlay.remove();

        const leaveBtn = document.createElement('button');
        leaveBtn.innerText = 'Exit Prize Mode';
        leaveBtn.style.padding = '12px 24px';
        leaveBtn.style.border = '2px solid #ffaa00'; // Match Theme (Gold/Orange)
        leaveBtn.style.background = 'transparent';
        leaveBtn.style.color = '#ffaa00'; // Match Theme (Gold/Orange)
        leaveBtn.style.borderRadius = '50px';
        leaveBtn.style.fontSize = '1rem';
        leaveBtn.style.fontWeight = '600';
        leaveBtn.style.cursor = 'pointer';
        leaveBtn.onclick = () => { confirmOverlay.remove(); exitWinMode(); };

        btnGroup.appendChild(leaveBtn);
        btnGroup.appendChild(cancelBtn); // Primary action on right

        confirmBox.appendChild(title);
        confirmBox.appendChild(msg);
        confirmBox.appendChild(btnGroup);
        confirmOverlay.appendChild(confirmBox);
        document.body.appendChild(confirmOverlay);
    };
    overlay.appendChild(closeBtn);

    // Grid/Flex - Use Standard Grid Class
    const gridEl = document.createElement('div');
    gridEl.className = 'menu-grid';
    gridEl.style.width = '100%';
    gridEl.style.padding = '0 20px'; // Add slight padding for mobile edges

    // 3. Add Cards to Modal
    eligibleCards.forEach(card => {
        // Reset styles to ensure standard look
        card.removeAttribute('style');

        // Remove Win Mode specific shadows/transforms if they were somehow retained
        card.onmouseover = null;
        card.onmouseout = null;

        // Remove Heart Icon for Prize Mode
        // Remove Heart Icon for Prize Mode
        const favBtn = card.querySelector('.fav-btn');
        if (favBtn) favBtn.remove();

        // Increase Brightness
        const img = card.querySelector('img');
        if (img) img.style.filter = 'brightness(1.1)';

        // Logic for Button
        const btn = card.querySelector('.add-btn') || card.querySelector('.add-cart-btn'); // Handle mock or real
        if (btn) {
            btn.innerText = 'Claim Free';
            btn.style.background = '#27ae60';
            // Note: Removed width/margin overrides to let standard .add-btn CSS apply

            // Clean listeners
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const title = card.querySelector('h3').innerText.split('$')[0].trim();
                const image = card.querySelector('img').src;

                internalAddToCart(title, 0, image, 'Standard', [], 1);
                exitWinMode();
            });
        }
        gridEl.appendChild(card);
    });

    modalContainer.appendChild(titleEl);
    modalContainer.appendChild(gridEl);
    overlay.appendChild(modalContainer);
    document.body.appendChild(overlay);

    document.body.style.overflow = 'hidden';



    function exitWinMode() {
        const overlay = document.querySelector('#winModeOverlay');
        if (overlay) overlay.remove();
        document.body.style.overflow = 'auto';
        localStorage.removeItem('craveBitesWinMode');

        // Open Cart to show the prize
        openCart();

        // Trigger confetti again? Optional.
        showToast('Reward Claimed Successfully!', 'success');
    }

}

// --- LUCKY SPIN ENTRY ---
window.openSpinWheel = function () {
    // Check Auth
    const user = localStorage.getItem('craveBitesUser');
    if (!user) {
        showToast('Please Login to access loyal rewards!');
        const loginModal = document.getElementById('loginModal');
        if (loginModal) loginModal.classList.add('active');
        return;
    }
    // Redirect to Win Page
    window.location.href = 'win.html';
};

// --- REVIEWS SYSTEM ---
document.addEventListener('DOMContentLoaded', () => {
    const reviewsGrid = document.getElementById('reviews-grid');
    const addReviewForm = document.getElementById('addReviewForm');
    const starRating = document.querySelector('.star-rating');
    const selectedRatingInput = document.getElementById('selectedRating');
    const reviewNameInput = document.getElementById('reviewName');

    // Auto-fill name if logged in
    const storedUser = JSON.parse(localStorage.getItem('craveBitesUser'));
    if (storedUser && reviewNameInput) {
        reviewNameInput.value = storedUser.name || '';
    }

    // Star Rating Logic
    if (starRating) {
        const stars = starRating.querySelectorAll('.rating-star');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = star.getAttribute('data-rating');
                selectedRatingInput.value = rating;

                // Update stars UI
                stars.forEach(s => {
                    if (s.getAttribute('data-rating') <= rating) {
                        s.style.color = '#ff9f1c'; // Primary gold
                        s.classList.remove('fa-regular');
                        s.classList.add('fa-solid');
                    } else {
                        s.style.color = '#ddd';
                        s.classList.remove('fa-solid');
                        s.classList.add('fa-regular');
                    }
                });
            });

            // Hover effect
            star.addEventListener('mouseover', () => {
                const rating = star.getAttribute('data-rating');
                stars.forEach(s => {
                    if (s.getAttribute('data-rating') <= rating) {
                        s.style.color = '#ffbf69'; // Lighter gold
                    }
                });
            });

            star.addEventListener('mouseout', () => {
                const currentRating = selectedRatingInput.value;
                stars.forEach(s => {
                    if (s.getAttribute('data-rating') <= currentRating) {
                        s.style.color = '#ff9f1c';
                    } else {
                        s.style.color = '#ddd';
                    }
                });
            });
        });

        // Initialize stars
        stars[4].click();
    }

    // Load & Render Reviews
    function loadReviews() {
        const dynamicReviews = JSON.parse(localStorage.getItem('craveBitesReviews')) || [];

        // We keep the static ones in HTML, or we could empty and render all.
        // Let's render the dynamic ones at the beginning of the grid.
        dynamicReviews.forEach(review => {
            renderReview(review, true);
        });
    }

    function renderReview(review, prepend = false) {
        if (!reviewsGrid) return;

        const card = document.createElement('div');
        card.className = 'review-card dynamic-review';

        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= review.rating) {
                starsHTML += '<i class="fa-solid fa-star"></i>';
            } else {
                starsHTML += '<i class="fa-regular fa-star"></i>';
            }
        }

        card.innerHTML = `
            <div class="review-header">
                <div class="reviewer-info">
                    <img alt="${review.name}" src="https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random" />
                    <div>
                        <h4>${review.name}</h4>
                        <div class="rating">
                            ${starsHTML}
                        </div>
                    </div>
                </div>
                <i class="fa-solid fa-quote-right quote-icon"></i>
            </div>
            <p class="review-text">"${review.text}"</p>
        `;

        if (prepend) {
            reviewsGrid.insertBefore(card, reviewsGrid.firstChild);
        } else {
            reviewsGrid.appendChild(card);
        }
    }

    // Handle Form Submission
    if (addReviewForm) {
        addReviewForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('reviewName').value;
            const text = document.getElementById('reviewText').value;
            const rating = parseInt(selectedRatingInput.value);

            const newReview = {
                name,
                text,
                rating,
                date: new Date().toISOString()
            };

            // Save to localStorage
            const reviews = JSON.parse(localStorage.getItem('craveBitesReviews')) || [];
            reviews.unshift(newReview);
            localStorage.setItem('craveBitesReviews', JSON.stringify(reviews));

            // Render immediately
            renderReview(newReview, true);

            // Reset form
            addReviewForm.reset();
            if (starRating) {
                const stars = starRating.querySelectorAll('.rating-star');
                stars[4].click();
            }

            showToast('Thank you for your review!', 'success');

            // Scroll to the new review
            reviewsGrid.firstChild.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    loadReviews();

    // Contact Form AJAX Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Show Thank You Window
                    const successModal = document.getElementById('contactSuccessModal');
                    if (successModal) {
                        successModal.style.display = 'flex';
                    } else {
                        alert('Thank you for your message! 💌');
                    }
                    contactForm.reset();
                } else {
                    alert('Oops! Something went wrong. Please try again.');
                }
            } catch (error) {
                alert('Unable to send message. Please try again later.');
            } finally {
                btn.innerText = originalText;
                btn.disabled = false;
            }
        });
    }
});
// --- NEWSLETTER & LIVE CHAT SYSTEM ---
document.addEventListener('DOMContentLoaded', () => {
    // Newsletter Logic
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input');
            const email = emailInput.value;

            // Save to localStorage
            const subscribers = JSON.parse(localStorage.getItem('craveBitesSubscribers')) || [];
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('craveBitesSubscribers', JSON.stringify(subscribers));
                showToast('Welcome to the Crave family! 🍕', 'success');
            } else {
                showToast('You are already subscribed! 🥗', 'info');
            }
            newsletterForm.reset();
        });
    }

    // Live Chat Logic
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', () => {
            chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
            if (chatWindow.style.display === 'flex') {
                chatInput.focus();
            }
        });

        closeChat.addEventListener('click', () => {
            chatWindow.style.display = 'none';
        });

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userMsg = chatInput.value.trim();
            if (!userMsg) return;

            addMessage(userMsg, 'user');
            chatInput.value = '';

            // Realistic Typing Logic
            const typingMsg = showTypingIndicator();

            setTimeout(() => {
                typingMsg.remove();
                const aiResponse = getBotResponse(userMsg.toLowerCase());
                addMessage(aiResponse, 'bot');
            }, 1000 + Math.random() * 1500);
        });
    }

    function showTypingIndicator() {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'typing-indicator';
        msgDiv.style.padding = '12px 15px';
        msgDiv.style.borderRadius = '15px 15px 15px 0';
        msgDiv.style.maxWidth = '60px';
        msgDiv.style.background = 'white';
        msgDiv.style.alignSelf = 'flex-start';
        msgDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        msgDiv.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';

        // Add minimal CSS for the typing dots if not in style.css
        const style = document.createElement('style');
        style.textContent = `
            .typing-indicator span { height: 6px; width: 6px; background: #95a5a6; border-radius: 50%; display: inline-block; margin-right: 3px; animation: bounce 1.3s infinite; }
            .typing-indicator span:nth-child(2) { animation-delay: 0.15s; }
            .typing-indicator span:nth-child(3) { animation-delay: 0.3s; margin-right: 0; }
            @keyframes bounce { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-4px); } }
        `;
        document.head.appendChild(style);

        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return msgDiv;
    }

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.style.padding = '12px 15px';
        msgDiv.style.borderRadius = sender === 'user' ? '15px 15px 0 15px' : '15px 15px 15px 0';
        msgDiv.style.maxWidth = '85%';
        msgDiv.style.fontSize = '0.9rem';
        msgDiv.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        msgDiv.style.alignSelf = sender === 'user' ? 'flex-end' : 'flex-start';
        msgDiv.style.background = sender === 'user' ? 'var(--primary-color)' : '#fff';
        msgDiv.style.color = sender === 'user' ? 'white' : '#2c3e50';
        msgDiv.style.lineHeight = '1.4';
        msgDiv.style.fontWeight = '500';
        msgDiv.textContent = text;

        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Memory for the current session to track conversation flow
    let chatMemory = {
        lastIntent: null,
        interactionCount: 0
    };

    function getBotResponse(query) {
        chatMemory.interactionCount++;

        // User & Cart Data
        let userName = '';
        const userData = localStorage.getItem('craveBitesUser');
        if (userData) {
            try {
                const parsedUser = JSON.parse(userData);
                userName = parsedUser.name || 'Friend';
            } catch (e) { userName = userData; }
        }

        const points = parseInt(localStorage.getItem('craveBitesPoints') || '0');
        const cart = JSON.parse(localStorage.getItem('craveBitesCart') || '[]');
        const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const winMode = localStorage.getItem('craveBitesWinMode');

        // 1. Sentiment & Emotional Check
        if (query.match(/bad|sad|angry|slow|hate|worst|terrible/)) {
            chatMemory.lastIntent = 'complaint';
            return `I'm so sorry to hear you're feeling this way, ${userName}. 😔 Your satisfaction is my top priority. Please tell me more about the issue, or use our specialized Contact form so a human manager can call you immediately!`;
        }

        if (query.match(/love|great|good|awesome|amazing|delicious|best/)) {
            return `That makes my circuits light up! ✨ We love hearing that our customers are happy. Anything else I can help you with to keep that smile on your face?`;
        }

        // 2. Contextual Cart Awareness
        if (query.includes('cart') || query.includes('basket') || query.includes('total')) {
            if (cart.length === 0) return "Your cart is currently empty! 🛒 Time to fill it with some delicious burgers or a crispy pizza, don't you think?";
            return `You've got ${cart.length} items in your cart totaling $${cartTotal.toFixed(2)}. ${cartTotal > 50 ? "That's a feast! Use code 'CRAVE50' for a massive discount!" : "Ready to checkout, or shall we find more treats?"}`;
        }

        if (query.includes('recommend') || query.includes('suggest') || query.includes('pick for me')) {
            const recommendations = ["our signature 'Crave Master' burger", "the 'Fireball Pizza' for some heat", "a 'Berry Fusion' smoothie to cool down"];
            const pick = recommendations[Math.floor(Math.random() * recommendations.length)];
            return `Ooh, tough choice! If I were you, I'd go with ${pick}. It's a fan favorite! 🌟`;
        }

        // 3. Dynamic Knowledge Base
        const intents = {
            greeting: {
                patterns: [/hi/, /hello/, /hey/],
                responses: [
                    `Hi ${userName}! Hope you're having a hungry day! 🍔`,
                    `Hello! Welcome back to CraveBites. Ready to order?`,
                    `Hey there! I'm your Crave Assistant. What's on the menu today?`
                ]
            },
            rewards: {
                patterns: [/point/, /reward/, /pts/],
                responses: [
                    `You have ${points} CravePoints! ${points >= 500 ? "Wow, you're a VIP! You can get a free Burger with those points!" : points >= 200 ? "You're close to a free Side item!" : "Every $1 spent earns you 2 points. Keep going!"} 🌟`
                ]
            },
            offers: {
                patterns: [/coupon/, /promo/, /discount/, /code/],
                responses: [
                    "The current best deal is 'CRAVE50' for 50% off! 🎟️ We also have 'BOGO' running on all sides today!"
                ]
            },
            delivery: {
                patterns: [/track/, /delivery/, /order/, /where is/, /how long/],
                responses: [
                    "Most orders are delivered within 30-45 minutes! ⚡ You can track them live on the 'Track Food' page. During peak hours, it might take a bit longer.",
                    "We aim for 30-45 minute delivery. 🏍️ You'll see exactly where your rider is on our tracker!"
                ]
            },
            rider_contact: {
                patterns: [/rider/, /boy/, /delivery man/, /contact person/, /driver/],
                responses: [
                    "Once your order is picked up, you can find the rider's contact number on the 'Track Food' page! 🏍️ This allows you to call or message them directly for delivery updates."
                ]
            },
            min_order: {
                patterns: [/minimum/, /min order/, /min amount/],
                responses: [
                    "The minimum order amount for delivery is $10.00. This helps us stay fast and efficient for everyone! 🛒"
                ]
            },
            cancellation: {
                patterns: [/cancel/, /stop order/, /change order/],
                responses: [
                    "Orders can be cancelled within 2 minutes of placement. After that, our kitchen starts cooking! 🍳 Please contact support immediately if you're in a hurry."
                ]
            },
            payments: {
                patterns: [/payment/, /pay/, /card/, /cash/, /paypal/],
                responses: [
                    "We accept all major Credit Cards (Visa, Mastercard, Amex), PayPal, and Cash on Delivery! 💳💰"
                ]
            },
            healthy: {
                patterns: [/vegan/, /veg/, /healthy/, /salad/],
                responses: [
                    "We care about your health! 🥦 Try our 'Garden Fresh' menu section. The Vegan Melt is surprisingly juicy!"
                ]
            },
            game: {
                patterns: [/spin/, /win/, /game/],
                responses: [
                    winMode ? `You have a ${winMode.toUpperCase()} waiting to be claimed! Add it from the menu before it expires! 🌯` :
                        "Feeling lucky? 🎡 Our Spin & Win game has a 1-in-6 chance of winning a Free Meal! Try it now!"
                ]
            }
        };

        // Match Intent
        for (let key in intents) {
            if (intents[key].patterns.some(p => p.test(query))) {
                chatMemory.lastIntent = key;
                const pool = intents[key].responses;
                return pool[Math.floor(Math.random() * pool.length)];
            }
        }

        // 4. Recovery & Guidance
        if (chatMemory.interactionCount > 3 && chatMemory.lastIntent === null) {
            return "I'm still learning! 🧑‍🍳 Would you like me to show you our Best Sellers, or help you with a discount code?";
        }

        return "I'm not 100% sure about that, but I can assist with orders, menu recommendations, reward points, or finding discounts! Try asking 'What's my total?' or 'Do I have rewards?'";
    }

    // Auto-open chat after 8 seconds (only once per session)
    if (!sessionStorage.getItem('chatPrompted')) {
        setTimeout(() => {
            if (chatWindow && chatWindow.style.display === 'none') {
                chatWindow.style.display = 'flex';
                let userName = '';
                const userData = localStorage.getItem('craveBitesUser');
                if (userData) {
                    try {
                        const parsedUser = JSON.parse(userData);
                        userName = parsedUser.name || 'Friend';
                    } catch (e) {
                        userName = userData;
                    }
                }
                const points = localStorage.getItem('craveBitesPoints') || '0';
                const welcomeMsg = userName ? `Hey ${userName}! 👋 Want to use your ${points} points for some free fries today?` :
                    "Hey there! Hungry? Check out our new CRAVE50 code for 50% off! 🎁";
                addMessage(welcomeMsg, 'bot');
                sessionStorage.setItem('chatPrompted', 'true');
            }
        }, 8000);
    }
});

// --- FAQ ACCORDION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-question i');

        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';

            // Close all other items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('.faq-question i');
                otherAnswer.style.maxHeight = '0px';
                otherIcon.style.transform = 'rotate(0deg)';
                otherItem.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
            });

            // Toggle current item
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
                item.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
            } else {
                answer.style.maxHeight = '0px';
                icon.style.transform = 'rotate(0deg)';
                item.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
            }
        });
    });
});
