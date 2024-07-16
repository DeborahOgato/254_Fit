// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC1pq4VorsisWdqzDT5M3XQ-E6MtCHPqxU",
    authDomain: "fit-f7f49.firebaseapp.com",
    projectId: "fit-f7f49",
    storageBucket: "fit-f7f49.appspot.com",
    messagingSenderId: "161201752814",
    appId: "1:161201752814:web:dd3bb14a98e9f8fde041ff",
    measurementId: "G-JVQMLQWD1J"
  };
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  
  // Reference to the document in the 'users' collection
  const userRef = db.collection('users').doc('userId');
  
  // Add a document to the 'loggedFoods' sub-collection
  userRef.collection('loggedFoods').add({
    name: "Apple",
    calories: 95,
    protein: 0.3,
    fat: 0.2,
    carbs: 25,
    portion: 1,
    loggedAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
  