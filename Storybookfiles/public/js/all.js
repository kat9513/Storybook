// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.

// make a get request to our api to grab every character
$.get("/api/name", function(data) {

    var templateName = "color";
    var templateData;
    $.get("/api/content/" + templateName, function(data) {
      templateData = data;
      console.log(templateData);
  
    }).then( function(){
      console.log(templateData);
      // for each character that our server sends us back
      for (var i = 0; i < data.length; i++) {
        // create a parent div for the oncoming elements
        var wellSection = $("<div>");
        // add a class to this div: 'well'
        wellSection.addClass("well");
        // add an id to the well to mark which well it is
        wellSection.attr("id", "story-well-" + i);
        // append the well to the well section
        $("#well-section").append(wellSection);
    
        // Now add all of our character data to the well we just placed on the page
    
        // make the name an h2,
        $("#story-well-" + i).append("<h2>" + templateData[0].line + data[i].userName + templateData[1].line) + "</h2>";
        // the role an h3,
        $("#story-well-" + i).append("<h3>" + data[i].userName + templateData[2].line + data[i].favColor + templateData[3].line + "</h4>");
    
      }
    })
  
   
  });
  