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
    database.ref().on("child_added", function (childSnapshot) {
        var train_name = childSnapshot.val().name;
        var train_Destination = childSnapshot.val().destination;
        var train_time = childSnapshot.val().time;
        var train_Frequency = childSnapshot.val().frequency;
        
        // We go one year back to asure current time is after
        var firstTimeConverted = moment(train_time, "HH:mm").subtract(1, "years");
        var currentTime = moment();
        console.log("Current Time: " + moment(currentTime).format("hh:mm"));

        // Calculate diference between current and user entered time
        var time_diference = moment().diff(moment(firstTimeConverted),"minutes");
        console.log("Diference in Time: " + time_diference);

        var time_remaining = time_diference % train_Frequency;
        console.log("Train Arriving in: " + time_remaining);
        
        //Next Train Calc
        var timeForNextTrain = train_Frequency - time_remaining;
        console.log("Time until next train: " + timeForNextTrain);

        var nextTrain = moment().add(timeForNextTrain, "minutes");
        
        //JQuery / ADD new row for train info
        var newRow = $('<tr>').append(
            $("<td>").text(train_name),
            $("<td>").text(train_Destination),
            $("<td>").text(train_Frequency),
            $("<td>").text((nextTrain).format("hh:mm")),
            $("<td>").text(timeForNextTrain),
            $("<td>").text(train_time)
        );
        $("#trainTable").append(newRow)
    })
    //everytime you add, take snapshot and retrieve info
    //   snapshot.trainname etc


      
})