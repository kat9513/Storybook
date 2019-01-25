// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html (add.html is the homepage)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/add.html"));
  });

  // add route loads the add.html page,
  // where users can enter new story to the db (all.html is the file where stories are entered as well as stored to the db)
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/all.html"));
  });

  // all route loads the all.html page,
  // where all stories in the db are displayed
  //app.get("/all", function(req, res) {
    //res.sendFile(path.join(__dirname, "../views/layouts/all.html"));
  //});

};
