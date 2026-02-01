const firebaseConfig = {
    apiKey: "AIzaSyAhwNBU5Mg82uHYPmf33R-fLh6Ggo-gkP8",
    authDomain: "food-web-site.firebaseapp.com",
    projectId: "food-web-site",
    storageBucket: "food-web-site.firebasestorage.app",
    messagingSenderId: "538133651359",
    appId: "1:538133651359:web:7ab6879bea97521ed0a7aa",
    measurementId: "G-RHN9BGBQQQ"
};

// Initialize Firebase using the global namespace (Compat SDK)
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase Initialized Successfully");

    // Initialize Analytics if available (optional)
    if (firebase.analytics) {
        firebase.analytics();
    }
} else {
    console.error("Firebase SDK not loaded. Check index.html script tags.");
}
