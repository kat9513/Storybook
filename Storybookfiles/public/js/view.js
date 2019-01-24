// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn
$("#search-btn").on("click", function() {
    // save the character they typed into the character-search input
    var searchedStory = $("#character-search")
      .val()
      .trim();
  
    // Using a RegEx Pattern to remove spaces from searchedStory
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    searchedStory = searchedStory.replace(/\s+/g, "").toLowerCase();
    
    // run an AJAX GET-request for our servers api,
    // including the user's character in the url
    $.get("/api/completedContent" + searchedStory, function(data) {
      // log the data to our console
      console.log(data);
      // empty to well-section before adding new content
      $("#well-section").empty();
      // if the data is not there, then return an error message
      if (!data) {
        $("#well-section").append("<h2> Story was not found </h2>");
      }
      else {
        // otherwise
        // append the title
        $("#well-section").append("<h2>" + data.userName + "</h2>");
        // the content
        $("#well-section").append("<h3>Role: " + data.favColor + "</h3>");
  
      }
    });
  });
  