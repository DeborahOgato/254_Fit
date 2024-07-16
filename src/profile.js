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
  
  // Load profile data
  async function loadProfile() {
      const user = auth.currentUser;
      if (!user) {
          console.error('No user is signed in');
          return;
      }
      
      try {
          const userDoc = await db.collection('users').doc(user.uid).get();
          const userData = userDoc.data();
          document.getElementById('profileName').value = userData.name;
          document.getElementById('profileEmail').value = userData.email;
      } catch (error) {
          console.error('Error loading profile:', error);
          // Show error message to user
      }
  }
  
  // Update profile function
  async function updateProfile(event) {
      event.preventDefault();
      
      const user = auth.currentUser;
      if (!user) {
          console.error('No user is signed in');
          return;
      }
    }  