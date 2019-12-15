import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDFvEmoMFZEikGNiKgMLxJ5G7KRBqRcLLw",
  authDomain: "eventos-9297b.firebaseapp.com",
  databaseURL: "https://eventos-9297b.firebaseio.com",
  projectId: "eventos-9297b",
  storageBucket: "eventos-9297b.appspot.com",
  messagingSenderId: "282010356259",
  appId: "1:282010356259:web:6e7a81669eb7e6e0c2bf96"
};
  
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
