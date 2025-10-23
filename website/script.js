// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } 
  from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your Firebase config
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
const auth = getAuth(app);

// === Google Login ===
const googleBtn = document.querySelector(".btn-google");
if (googleBtn) {
  googleBtn.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        alert(`Welcome ${user.displayName}!`);
        // Redirect to dashboard/boards page
        window.location.href = "boards.html";
      })
      .catch(error => {
        console.error("Google Login Error:", error);
        alert("Google login failed.");
      });
  });
}

// === Facebook Login ===
const fbBtn = document.querySelector(".btn-facebook");
if (fbBtn) {
  fbBtn.addEventListener("click", () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        alert(`Welcome ${user.displayName}!`);
        window.location.href = "boards.html";
      })
      .catch(error => {
        console.error("Facebook Login Error:", error);
        alert("Facebook login failed.");
      });
  });
}
