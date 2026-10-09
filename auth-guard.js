import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDe2q19jgNfbVsKFEorbFrMz6bafx2Inhg",
    authDomain: "kalikiri-consumption.firebaseapp.com",
    projectId: "kalikiri-consumption",
    storageBucket: "kalikiri-consumption.firebasestorage.app",
    messagingSenderId: "990485021817",
    appId: "1:990485021817:web:bce85c175b248f7740c0a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.replace("login.html");
    }
});