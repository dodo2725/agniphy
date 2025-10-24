// === Import Firebase Modules ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// === Firebase Config ===
const firebaseConfig = {
  apiKey: "AIzaSyAhCXxGgE-2ggd16OJRiRgn6F-rn6bsi3w",
  authDomain: "agniphy-19867.firebaseapp.com",
  projectId: "agniphy-19867",
  storageBucket: "agniphy-19867.firebasestorage.app",
  messagingSenderId: "325150822783",
  appId: "1:325150822783:web:6a23fe5ffa678c0e6c4a4a",
  measurementId: "G-QBLLVV8YHM"
};

// === Initialize Firebase ===
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// === GOOGLE LOGIN ===
const googleBtn = document.querySelector(".btn-google");
if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "boards.html"; // redirect after success
    } catch (error) {
      alert("Google login failed: " + error.message);
    }
  });
}

// === FACEBOOK LOGIN ===
const fbBtn = document.querySelector(".btn-facebook");
if (fbBtn) {
  fbBtn.addEventListener("click", async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "boards.html";
    } catch (error) {
      alert("Facebook login failed: " + error.message);
    }
  });
}

// === LOGOUT FUNCTION ===
window.logoutUser = async () => {
  await signOut(auth);
  window.location.href = "index.html";
};

// === KEEP SESSION ACTIVE ===
onAuthStateChanged(auth, user => {
  if (user) {
    console.log("✅ Logged in as:", user.displayName);
  } else {
    console.log("⚠️ Logged out");
  }
});
