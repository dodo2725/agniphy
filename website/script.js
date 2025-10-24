// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signOut, onAuthStateChanged } 
  from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAhCXxGgE-2ggd16OJRiRgn6F-rn6bsi3w",
  authDomain: "agniphy-19867.firebaseapp.com",
  projectId: "agniphy-19867",
  storageBucket: "agniphy-19867.firebasestorage.app",
  messagingSenderId: "325150822783",
  appId: "1:325150822783:web:6a23fe5ffa678c0e6c4a4a",
  measurementId: "G-QBLLVV8YHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Google login
export function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      window.location.href = "boards.html";
    })
    .catch(err => alert("Google login failed: " + err.message));
}

// Facebook login
export function loginWithFacebook() {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      window.location.href = "boards.html";
    })
    .catch(err => alert("Facebook login failed: " + err.message));
}

// Logout
export function logoutUser() {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
}

// Check login state (can be called on pages that require auth)
export function requireLogin(redirectTo="index.html") {
  onAuthStateChanged(auth, user => {
    if (!user) {
      alert("You must log in first!");
      window.location.href = redirectTo;
    }
  });
}
