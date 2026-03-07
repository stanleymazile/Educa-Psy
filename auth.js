import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile,
    signInWithPopup, 
    GoogleAuthProvider 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- Configuration Firebase (même projet que script.js) ---
const firebaseConfig = {
    apiKey: "AIzaSyBk6ijSUxaQBtbxiX4fkS0yTZF9vI2FLeI",
    authDomain: "educa-psy-haiti.firebaseapp.com",
    projectId: "educa-psy-haiti",
    storageBucket: "educa-psy-haiti.firebasestorage.app",
    messagingSenderId: "687538101008",
    appId: "1:687538101008:web:e555ca8032088b9dd3e395",
    measurementId: "G-3PNFPKMQ78"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Helpers UI
function afficherSucces() {
    const msg = document.getElementById('msg-succes');
    const btn = document.getElementById('btn-submit');
    if (msg) msg.classList.add('visible');
    if (btn) btn.disabled = true;
    setTimeout(() => { window.location.href = 'index.html'; }, 2000);
}

function afficherErreurFirebase(code) {
    const messages = {
        'auth/email-already-in-use': "Cette adresse email est déjà utilisée.",
        'auth/invalid-email':        "Adresse email invalide.",
        'auth/weak-password':        "Mot de passe trop faible (min. 6 caractères).",
        'auth/network-request-failed': "Problème de connexion réseau. Réessayez.",
    };
    alert(messages[code] || "Erreur : " + code);
}

// --- Inscription Email / Mot de passe ---
const form = document.getElementById('signup-form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nom      = document.getElementById('nom')?.value.trim();
        const email    = document.getElementById('email')?.value.trim();
        const password = document.getElementById('password')?.value;

        // La validation côté client est gérée dans inscription.html
        // On vérifie juste que les champs sont remplis avant l'appel Firebase
        if (!email || !password) return;

        const btn = document.getElementById('btn-submit');
        if (btn) { btn.disabled = true; btn.textContent = 'Création en cours…'; }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Enregistre le nom d'affichage
            if (nom) {
                await updateProfile(userCredential.user, { displayName: nom });
            }
            afficherSucces();
        } catch (err) {
            if (btn) { btn.disabled = false; btn.textContent = 'Créer mon compte'; }
            afficherErreurFirebase(err.code);
        }
    });
}

// --- Inscription / Connexion Google ---
const btnGoogle = document.getElementById('btn-login-google');
if (btnGoogle) {
    btnGoogle.addEventListener('click', async () => {
        try {
            await signInWithPopup(auth, provider);
            afficherSucces();
        } catch (err) {
            if (err.code !== 'auth/popup-closed-by-user') {
                afficherErreurFirebase(err.code);
            }
        }
    });
}
