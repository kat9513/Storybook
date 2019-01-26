// Code here handles what happens when a user submits a new mad lib form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#submit").on("click", function (event) {
  event.preventDefault();
  // make a user obj
  var userInput = {

    word1: $("#word1").val().trim(),

    word2: $("#word2").val().trim(),

    word3: $("#word3").val().trim(),

    word4: $("#word4").val().trim(),

    word5: $("#word5").val().trim(),

  };
  var inputArray = [userInput.word1, userInput.word2, userInput.word3, userInput.word4, userInput.word5, ""];
  console.log(userInput);
  // The name of the story template we will be using
  //templateTitle = $("#template_title").val().trim();

  // SETTING THIS FOR TEST PURPOSES
  var templateTitle = "The Witch is Dead!";

  // send an AJAX POST-request with jQuery
  $.post("/api/new", userInput)
    // on success, run this callback
    .then(function (data) {
      // tell the user we're adding a character with an alert window
      alert("Adding Mad Lib of Oz...");
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


  var filledContent = "Madlib: ";

  templateTitle = templateTitle.replace(/\s+/g, "_");

  //console.log(templateTitle);

  $.get("api/content/" + templateTitle)
    .then(function (result) {
      console.log(templateTitle);
      var contentList = result;
      //console.log(contentList[0].line);
      for (var i = 0; i < contentList.length; i++) {
        console.log(contentList[i].line);
        filledContent += (contentList[i].line + inputArray[i]);
      }
      console.log(filledContent);
      // Add the completed song to our completeContent table

      var completedSong = {
        song: filledContent,

        templateTitle: templateTitle
      };

      // Upload the completed madLib to our table
      $.post("/api/completed/new", completedSong)
    });

});
