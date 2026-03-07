// --- Importations Firebase ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// --- Configuration Firebase ---
const firebaseConfig = {
  apiKey: "AIzaSyBk6ijSUxaQBtbxiX4fkS0yTZF9vI2FLeI",
  authDomain: "educa-psy-haiti.firebaseapp.com",
  projectId: "educa-psy-haiti",
  storageBucket: "educa-psy-haiti.firebasestorage.app",
  messagingSenderId: "687538101008",
  appId: "1:687538101008:web:e555ca8032088b9dd3e395",
  measurementId: "G-3PNFPKMQ78"
};

// --- Initialisation ---
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// --- Votre logique existante (Menu & Traduction) ---
const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('liens-deroulants');

btnMenu.onclick = function(e) {
    menu.classList.toggle('voir');
    e.stopPropagation();
}

window.onclick = function() {
    menu.classList.remove('voir');
}

document.getElementById('select-langue').addEventListener('change', function() {
    var lang = this.value;
    var googleCombo = document.querySelector('.goog-te-combo');
    if (googleCombo) {
        googleCombo.value = lang;
        googleCombo.dispatchEvent(new Event('change'));
    }
});

// --- Logique de connexion Google ---
const btnLogin = document.getElementById('btn-login');
if (btnLogin) {
    btnLogin.onclick = function() {
        signInWithPopup(auth, provider)
            .then((result) => {
                alert("Bienvenue " + result.user.displayName);
                btnLogin.innerText = "Déconnexion";
            })
            .catch((error) => {
                console.error("Erreur :", error.message);
                alert("Erreur de connexion.");
            });
    };
}
