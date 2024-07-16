// web app's Firebase configuration
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
  
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // Save goals function
  async function saveGoals(event) {
      event.preventDefault();
      
      const user = auth.currentUser;
      if (!user) {
          console.error('No user is signed in');
          return;
      }
      
      const calorieGoal = document.getElementById('calorieGoal').value;
      const activityGoal = document.getElementById('activityGoal').value;
      const weightGoal = document.getElementById('weightGoal').value;
      const height = document.getElementById('height').value;
      const waterGoal = document.getElementById('waterGoal').value;
      const checkInPattern = document.getElementById('checkInPattern').value;
  
      try {
          await db.collection('users').doc(user.uid).collection('goals').doc('userGoals').set({
              calorieGoal: parseInt(calorieGoal),
              activityGoal: parseInt(activityGoal),
              weightGoal: parseInt(weightGoal),
              height: parseInt(height),
              waterGoal: parseInt(waterGoal),
              checkInPattern: parseInt(checkInPattern),
              timestamp: firebase.firestore.FieldValue.serverTimestamp()
          });
          console.log('Goals saved successfully');
          window.location.href = 'homepage.html'; // Redirect to homepage after saving goals
      } catch (error) {
          console.error('Error saving goals:', error);
          // Show error message to user
      }
  }
  
  document.getElementById('goalsForm').addEventListener('submit', saveGoals);
  