import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from
    "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

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

const emailDisplay =
    document.getElementById("loggedInEmail");

const logoutButton =
    document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.replace("login.html");
        return;
    }

    if (emailDisplay) {
        emailDisplay.textContent = user.email || "Signed in";
    }
});

if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
        logoutButton.disabled = true;

        try {
            await signOut(auth);
            window.location.replace("login.html");
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Logout failed. Please try again.");
            logoutButton.disabled = false;
        }
    });
}
