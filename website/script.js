// === Import Firebase SDK ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// === Your Firebase Config ===
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

// === Google Sign-In ===
const googleBtn = document.querySelector(".btn-google");
if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome ${user.displayName}!`);
      window.location.href = "boards.html"; // redirect after login
    } catch (error) {
      alert("Google Sign-in failed: " + error.message);
    }
  });
}

// === Facebook Sign-In ===
const fbBtn = document.querySelector(".btn-facebook");
if (fbBtn) {
  fbBtn.addEventListener("click", async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome ${user.displayName}!`);
      window.location.href = "boards.html";
    } catch (error) {
      alert("Facebook Sign-in failed: " + error.message);
    }
  });
}

