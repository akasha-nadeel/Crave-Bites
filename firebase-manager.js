/**
 * Firebase Manager
 * Handles Authentication and Database operations using Firebase.
 * Replaces previous localStorage logic for Auth and Syncs Cart/Favorites.
 */

const auth = firebase.auth();
const db = firebase.firestore();

// --- Auth State Observer ---
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in.
        localStorage.setItem('craveBitesUser', JSON.stringify({
            name: user.displayName || user.email.split('@')[0],
            email: user.email,
            uid: user.uid
        }));

        // Load User Data (Cart, Favorites) from Firestore
        loadUserData(user.uid);

        showToast(`Welcome back, ${user.displayName || 'User'}!`);
        updateAuthUI(true);
    } else {
        // User is signed out.
        localStorage.removeItem('craveBitesUser');
        // Optional: clear cart/favorites on logout or keep local only?
        // For security/privacy, better to clear personalized data or decouple it.
        // For now, we keep local implementation but UI updates to "Login" button.
        updateAuthUI(false);
    }
});

// --- Auth Functions ---

window.fbLogin = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        // Modal close is handled by Observer or script.js UI updates
        document.getElementById('loginModal').classList.remove('active');
        document.body.style.overflow = 'auto';
        return true;
    } catch (error) {
        console.error("Login Failed", error);
        showToast(error.message); // Show Firebase error message
        return false;
    }
};

window.fbSignup = async (name, email, password) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        await user.updateProfile({
            displayName: name
        });

        // Create initial user document
        await db.collection('users').doc(user.uid).set({
            name: name,
            email: email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            points: 0 // Initialize points
        });

        document.getElementById('loginModal').classList.remove('active');
        document.body.style.overflow = 'auto';
        showToast("Account created successfully!");
        return true;
    } catch (error) {
        console.error("Signup Failed", error);
        showToast(error.message);
        return false;
    }
};

window.fbGoogleLogin = async () => {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        const user = result.user;

        await handleSocialLoginUser(user);
        return true;
    } catch (error) {
        console.error("Google Login Failed", error);
        showToast(error.message);
        return false;
    }
};

window.fbFacebookLogin = async () => {
    try {
        const provider = new firebase.auth.FacebookAuthProvider();
        const result = await auth.signInWithPopup(provider);
        const user = result.user;

        await handleSocialLoginUser(user);
        return true;
    } catch (error) {
        console.error("Facebook Login Failed", error);
        showToast(error.message);
        return false;
    }
};

window.fbAppleLogin = async () => {
    try {
        const provider = new firebase.auth.OAuthProvider('apple.com');
        const result = await auth.signInWithPopup(provider);
        const user = result.user;

        await handleSocialLoginUser(user);
        return true;
    } catch (error) {
        console.error("Apple Login Failed", error);
        showToast(error.message);
        return false;
    }
};

// Helper for Social Login Data Sync
async function handleSocialLoginUser(user) {
    // Check if user doc exists, if not create it
    const userRef = db.collection('users').doc(user.uid);
    const doc = await userRef.get();

    if (!doc.exists) {
        await userRef.set({
            name: user.displayName || "User",
            email: user.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            points: 0
        });
    }

    // Modal close handled by observer, but explicit checks help UX smoothness
    document.getElementById('loginModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    showToast(`Welcome ${user.displayName || 'User'}!`);
}

window.fbLogout = async () => {
    try {
        await auth.signOut();
        showToast("Logged out successfully");
        location.reload(); // Reload to reset state clean
    } catch (error) {
        console.error("Logout Failed", error);
    }
};

// --- Data Persistence Functions ---

async function loadUserData(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists) {
            const data = doc.data();

            // Sync Points
            if (data.points) localStorage.setItem('craveBitesPoints', data.points);

            // Sync Cart (Merge or Overwrite? Let's overwrite local for consistency with account)
            if (data.cart) {
                localStorage.setItem('craveBitesCart', JSON.stringify(data.cart));
            }

            // Sync Favorites
            if (data.favorites) {
                localStorage.setItem('craveBitesFavorites', JSON.stringify(data.favorites));
            }

            // Sync Orders
            if (data.orders) {
                localStorage.setItem('craveBitesOrders', JSON.stringify(data.orders));
            }

            // Trigger UI Updates in script.js (assuming global update functions exist)
            // We might need to reload page or dispatch event if script.js doesn't listen to storage changes
            // Simple way:
            if (window.updateCartCount) window.updateCartCount();
            if (window.renderCartItems) window.renderCartItems();
            if (window.updateFavCount) window.updateFavCount();
            if (window.renderFavorites) window.renderFavorites();
            if (window.renderRecentOrders) window.renderRecentOrders(); // Update Tracking Page

        }
    } catch (error) {
        console.error("Error loading user data:", error);
    }
}

// Function to save data to Firestore (Debounced to avoid too many writes)
window.saveUserData = async () => {
    const user = auth.currentUser;
    if (!user) return; // Only save if logged in

    const cart = JSON.parse(localStorage.getItem('craveBitesCart') || '[]');
    const favorites = JSON.parse(localStorage.getItem('craveBitesFavorites') || '[]');
    const orders = JSON.parse(localStorage.getItem('craveBitesOrders') || '[]');
    const points = parseInt(localStorage.getItem('craveBitesPoints') || '0');

    try {
        await db.collection('users').doc(user.uid).update({
            cart: cart,
            favorites: favorites,
            orders: orders,
            points: points,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Data synced to Firebase");
    } catch (error) {
        console.error("Error saving data:", error);
    }
}

// Hook into UI changes
function updateAuthUI(isLoggedIn) {
    // This logic duplicates some of script.js 'checkUser' but is reactive to Firebase auth state
    const loginBtn = document.querySelector('.login-btn');
    const userIcon = document.querySelector('.user-icon');

    // We can manipulate the DOM directly or rely on the localStorage item which script.js reads
    // Since script.js runs on load, we might need to force a re-check
    if (window.checkUser) window.checkUser();
}
