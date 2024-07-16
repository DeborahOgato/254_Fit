// Initialize Firebase (make sure this matches your Firebase project configuration)
var firebaseConfig = {
    apiKey: "AIzaSyC1pq4VorsisWdqzDT5M3XQ-E6MtCHPqxU",
    authDomain: "fit-f7f49.firebaseapp.com",
    projectId: "fit-f7f49",
    storageBucket: "fit-f7f49.appspot.com",
    messagingSenderId: "161201752814",
    appId: "1:161201752814:web:dd3bb14a98e9f8fde041ff",
    measurementId: "G-JVQMLQWD1J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
let auth, db;

document.addEventListener("DOMContentLoaded", function() {
    auth = firebase.auth();
    db = firebase.firestore();
});

// Login function
async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMessage = document.getElementById('error-message');

    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('User logged in:', user);
        window.location.href = 'homepage.html'; // Redirect to homepage after successful login
    } catch (error) {
        console.error('Error logging in:', error);
        errorMessage.textContent = 'Error logging in: ' + error.message;
    }
}

// Google Sign-In
async function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const errorMessage = document.getElementById('error-message');

    try {
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        console.log('User signed in with Google:', user);
        window.location.href = 'homepage.html'; // Redirect to homepage after successful Google sign in
    } catch (error) {
        console.error('Error signing in with Google:', error);
        errorMessage.textContent = 'Error signing in with Google: ' + error.message;
    }
}


