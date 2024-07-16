import { auth } from './firebase-config';

// Function to handle user sign in
const signInUser = async (email, password) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log("User signed in:", user);
        return user;
    } catch (error) {
        console.error("Error signing in:", error.message);
        throw error;
    }
};

export default signInUser;
