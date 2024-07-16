import signUpUser from './signup';
import signInUser from './signin';

// Example usage:
const email = 'test@example.com';
const password = 'password123';

signUpUser(email, password)
    .then(user => {
        console.log('Sign-up successful:', user);
    })
    .catch(error => {
        console.error('Sign-up error:', error.message);
    });

signInUser(email, password)
    .then(user => {
        console.log('Sign-in successful:', user);
    })
    .catch(error => {
        console.error('Sign-in error:', error.message);
    });
