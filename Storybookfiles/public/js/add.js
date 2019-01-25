// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#submit").on("click", function(event) {
    event.preventDefault();
    // make a newStory obj
    var userInput = {
      // name from name input
      word1: $("#word1").val().trim(),
      // role from role input
      word2: $("#word2").val().trim(),

      word3: $("#word3").val().trim(),

      word4: $("#word4").val().trim(),

      word5: $("#word5").val().trim(),

    };
  
    // The name of the story template we will be using
    //templateTitle = $("#template_title").val().trim();
  
    // SETTING THIS FOR TEST PURPOSES
    templateTitle = "color";
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", userInput)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding Mad Lib...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#word1").val("");
    $("#word2").val("");
    $("#word3").val("");
    $("#word4").val("");
    $("#word5").val("");
  
      // This is where we will take the user input array and merge it with our template.
      // COMING SOON
  
      // HOW TO FIX: Get the JSON Array stuff working so that the actual data can be placed in an array.
      // Iterate through the array to append data to the working string, which is the final story
      // Understanding the JSON will also help get the type of word, which is returned from our GET /content/:templateTitle Endpoint
  
      // ALSO: Find way to make input form for the mad libs dynamic according to the template info
      // for example: If there are four lines in the template, there may need to be four text fields, 
      // each with the type of word that needs to go there. This list of words can then be placed into an array
      // For use here with the template data.
  
      var filledContent = "Story: ";
      var contentList = $.get("/api/content/" + templateTitle);
      console.log(contentList[0].get({plain:true}))
      for (var line in contentList) {
        console.log(line);
          filledContent += (line.line + "Chungus");
      }
      alert(filledContent);
      $("#well-section").append("<h2>" + filledContent + "</h2>");
  
  });
  