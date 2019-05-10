$(document).ready(function(){
    //Firebase DB Connection 
    //Need Help setting up firebase DB, forgot 100% of it. Can finish homewokr then!
    

    // Initialize Firebase
    // import * as firebase from 'firebase';
    var firebaseConfig = {
        apiKey: "AIzaSyDb2xw0yAsjquYLxSl2QW2gZUmh44nzrlg",
        authDomain: "trainscheduler-45e93.firebaseapp.com",
        databaseURL: "https://trainscheduler-45e93.firebaseio.com",
        projectId: "trainscheduler-45e93",
        storageBucket: "trainscheduler-45e93.appspot.com",
        messagingSenderId: "545106633100",
        appId: "1:545106633100:web:40b1c88fa13e690e"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    var trainName = "";
    var destination = "";
    var time = "";
    var frequency = "";

    //On Click Listener for Adding Train
    $( "#addTrain" ).click(function(event) {
        event.preventDefault();
        //Grab User Inputs
        var trainName = $("#trainInput").val().trim();
        var destination = $("#destinationInput").val().trim();
        var time = $("#timeInput").val().trim();
        var frequency = $("#frequencyInput").val().trim();

    // Push trainInput object to DB
        database.ref().push({
            name: trainName,
            destination: destination,
            time: time,
            frequency: frequency
        });
    //Clear Input Data
        $("#trainInput").val("");
        $("#destinationInput").val("");
        $("#frequencyInput").val("");
        $("#timeInput").val("");
      });
    //Get Train Data from Firebase DB
    //Append Train Data to Table with a loop ?
      
    //on value snapshot <---
    //everytime you add, take snapshot and retrieve info
    //   snapshot.trainname etc


      
})