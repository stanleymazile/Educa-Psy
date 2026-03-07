// --- Importations Firebase ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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

// =====================================================
// MENU DÉROULANT (ligne bas — inchangé)
// =====================================================
const btnMenu = document.getElementById('btnMenu');
const menuNav = document.getElementById('liens-deroulants');

if (btnMenu && menuNav) {
    btnMenu.onclick = function(e) {
        menuNav.classList.toggle('voir');
        e.stopPropagation();
    };
}

window.addEventListener('click', function() {
    if (menuNav) menuNav.classList.remove('voir');
});

// =====================================================
// MENU LATÉRAL
// =====================================================
const btnOuvrir  = document.getElementById('btn-menu-lateral');
const btnFermer  = document.getElementById('btn-fermer-lateral');
const lateral    = document.getElementById('menu-lateral');
const voile      = document.getElementById('voile');

function ouvrirLateral() {
    lateral.classList.add('ouvert');
    voile.classList.add('actif');
    document.body.style.overflow = 'hidden';
}

function fermerLateral() {
    if (lateral) lateral.classList.remove('ouvert');
    if (voile)   voile.classList.remove('actif');
    document.body.style.overflow = '';
}

if (btnOuvrir) btnOuvrir.addEventListener('click', ouvrirLateral);
if (btnFermer) btnFermer.addEventListener('click', fermerLateral);
if (voile)     voile.addEventListener('click', fermerLateral);

// Fermer avec Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') fermerLateral();
});

// =====================================================
// GOOGLE TRANSLATE — synchronisation avec le sélecteur
// =====================================================
const selectLangue = document.getElementById('select-langue');
if (selectLangue) {
    selectLangue.addEventListener('change', function() {
        const lang = this.value;
        const googleCombo = document.querySelector('.goog-te-combo');
        if (googleCombo) {
            googleCombo.value = lang;
            googleCombo.dispatchEvent(new Event('change'));
        }
    });
}

// =====================================================
// AUTHENTIFICATION FIREBASE
// =====================================================
const btnLogin = document.getElementById('btn-login');

// Mise à jour du bouton selon l'état de connexion
onAuthStateChanged(auth, (user) => {
    if (btnLogin) {
        if (user) {
            const prenom = user.displayName ? user.displayName.split(' ')[0] : user.email;
            btnLogin.textContent = '👤 ' + prenom + ' — Déconnexion';
            btnLogin.onclick = function() {
                signOut(auth).then(() => {
                    btnLogin.textContent = '🔑 Connexion';
                }).catch((err) => console.error("Erreur déconnexion :", err.message));
            };
        } else {
            btnLogin.textContent = '🔑 Connexion';
            btnLogin.onclick = function() { window.location.href = 'connexion.html'; };
        }
    }
});
