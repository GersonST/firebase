  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDxxdColxeC1eHY_x-7YJDr4bT0fmR_5VE",
    authDomain: "colegio-35874.firebaseapp.com",
    projectId: "colegio-35874",
    storageBucket: "colegio-35874.appspot.com",
    messagingSenderId: "865739620616",
    appId: "1:865739620616:web:a59315262af94457b46cbd",
    measurementId: "G-M5GZ6NDCF1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  let db = firebase.firestore();


  db.collection("turmaA").get().then((snapshot) => {

    snapshot.forEach((doc) => {
        console.log(doc);
    })
  })