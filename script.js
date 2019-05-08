$document.ready(function(){
    //Firebase DB Connection 
    //Need Help setting up firebase DB, forgot 100% of it. Can finish homewokr then!
    var trainName = "";
    var destination = "";
    var time = "";
    var frequency = "";
    //On Click Listener for Adding Train
    $( "#addTrain" ).click(function() {
        //Grab User Inputs
        var trainName = $("#trainInput").val().trim();
        var destination = $("#destinationInput").val().trim();
        var time = $("#timeInput").val().trim();
        var frequency = $("#frequencyInput").val().trim();
        // Var to hold inputed data
        var trainInput = {
            name: trainName,
            destination: destination,
            time: time,
            frequency: frequency
        }
        // Push trainInput object to DB

        //Clear Input Data
        $("#trainInput").val("");
        $("#destinationInput").val("");
        $("#frequencyInput").val("");
        $("#timeInput").val("");
      });
      //Get Train Data from Firebase DB
      //Append Train Data to Table with a loop ?
      //

      
})