// Import Firebase auth
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Initialize Firebase auth (use the same config from script.js)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhCXxGgE-2ggd16OJRiRgn6F-rn6bsi3w",
  authDomain: "agniphy-19867.firebaseapp.com",
  projectId: "agniphy-19867",
  storageBucket: "agniphy-19867.firebasestorage.app",
  messagingSenderId: "325150822783",
  appId: "1:325150822783:web:6a23fe5ffa678c0e6c4a4a",
  measurementId: "G-QBLLVV8YHM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if user is logged in
onAuthStateChanged(auth, user => {
  if (!user) {
    alert("You must log in first!");
    window.location.href = "index.html"; // redirect to login page
  }
});

// Logout button
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});

// Board selection
document.querySelectorAll(".board-card").forEach(card => {
  card.addEventListener("click", () => {
    const selectedBoard = card.getAttribute("data-board");
    localStorage.setItem("selectedBoard", selectedBoard);
    window.location.href = "classes.html"; // redirect to class selection
  });
});
