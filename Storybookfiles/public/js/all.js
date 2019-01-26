// Code here handles what how the page displays all of the filled out mad libs
// It pings the server. The server then pings the database and displays all of the completed mad libs.

$.get("/api/completed/all", function (data) {
  var storyCollection = data;
  console.log(storyCollection);
  console.log(storyCollection.length);
  console.log(storyCollection[0]);
  for (var i = 0; i < storyCollection.length; i++) {
    var storyRow = storyCollection[i].song

    // create a parent div for the oncoming elements
    var wellSection = $("<div>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "story-well-" + i);
    // append the well to the well section
    $(".well-section").append(wellSection);

    console.log(storyRow);
    $("#story-well-" + i).append("<h2>" + storyRow + "</h2>");
  }
});
