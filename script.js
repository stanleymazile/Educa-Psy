
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk6ijSUxaQBtbxiX4fkS0yTZF9vI2FLeI",
  authDomain: "educa-psy-haiti.firebaseapp.com",
  projectId: "educa-psy-haiti",
  storageBucket: "educa-psy-haiti.firebasestorage.app",
  messagingSenderId: "687538101008",
  appId: "1:687538101008:web:e555ca8032088b9dd3e395",
  measurementId: "G-3PNFPKMQ78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('liens-deroulants');

btnMenu.onclick = function(e) {
    menu.classList.toggle('voir');
    e.stopPropagation();
}

window.onclick = function() {
    menu.classList.remove('voir');
}

// Détecte le changement dans votre menu et ordonne la traduction intégrale
document.getElementById('select-langue').addEventListener('change', function() {
    var lang = this.value;
    var googleCombo = document.querySelector('.goog-te-combo');
    
    if (googleCombo) {
        googleCombo.value = lang;
        googleCombo.dispatchEvent(new Event('change'));
    }
});







