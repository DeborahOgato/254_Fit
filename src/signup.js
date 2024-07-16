import { auth, db } from './firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/compat/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/compat/firestore';

// Function to handle user sign up
const signUpUser = async (email, password) => {
    const signUpForm = document.getElementById('signUpForm');
    const errorMessage = document.getElementById('error-message');

    signUpForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const email = document.getElementById('signUpEmail').value;
        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        errorMessage.textContent = '';

        if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
            errorMessage.textContent = 'Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, and one number';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match';
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                name: email.split('@')[0],
                calorieGoal: 0,
                googleFitLinked: false,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });

            console.log('User signed up and saved in Firestore:', user);
            window.location.href = 'homepage.html';
        } catch (error) {
            console.error('Error signing up:', error);
            errorMessage.textContent = 'Error signing up: ' + error.message;
        }
    });
};

export default signUpUser;

