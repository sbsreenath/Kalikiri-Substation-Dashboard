import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

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
const db = getFirestore(app);
window.saveReportToCloud = async function(date, report) {
    const user = auth.currentUser;

    if (!user) {
        console.error("Login required");
        return;
    }

    try {
        await setDoc(doc(db, "dailyReports", date), {
            report: report,
            savedBy: user.uid,
            savedAt: new Date().toISOString()
        });

        console.log("Cloud report saved successfully");
    } catch (error) {
        console.error("Cloud saving failed:", error);
    }
};