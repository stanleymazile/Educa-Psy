import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Votre config (à copier depuis votre console Firebase)
const firebaseConfig = { /* Vos clés de educa-psy-haiti */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Inscription classique (Email/Mot de passe)
const form = document.getElementById('signup-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert("Compte créé !"))
        .catch((err) => alert("Erreur : " + err.message));
});

// Inscription/Connexion Google
document.getElementById('btn-login-google').onclick = () => {
    signInWithPopup(auth, provider)
        .then(() => window.location.href = "index.html")
        .catch((err) => console.error(err));
};

