var app_firebase = {};
(function(){
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBbio5-pAmZmSP0p1WGt_uUAX8qvcM01p0",
    authDomain: "portalnotes-d3c35.firebaseapp.com",
    databaseURL: "https://portalnotes-d3c35.firebaseio.com",
    projectId: "portalnotes-d3c35",
    storageBucket: "portalnotes-d3c35.appspot.com",
    messagingSenderId: "554658502583",
    appId: "1:554658502583:web:0b41244dbf972bfde53a32",
    measurementId: "G-TR9560B0YJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  app_firebase = firebase;
})()