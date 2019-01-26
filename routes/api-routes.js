//dependencies
var userInput = require('../models/userInput.js');
var content = require('../models/content.js');
var completedContent = require('../models/completedContent.js');


//routes 
module.exports = function (app) {
    app.get('/api/userInput', function (req, res) {

            userInput.findAll().then(function (result) {
                return res.json(result);
            });
        });

    // Returns a JSON Array of JSON Objects that contain the words for our Mad Lib.

    // HOW TO FIX: Figure out how to access data in the JSON that is being returned.
    // Look at the way Sequelize handles returning multiple objects at the same time.

    app.get('/api/content/:templateTitle?', function (req, res) {
        if (req.params.templateTitle) {
            content.findAll({
                where: {
                    templateTitle: req.params.templateTitle
                }
            }).then(function (result) {
                return res.json(result);
            })
        } else {
            content.findAll().then(function (result) {
                return res.json(result);
            });
        }
    });

    // If a user sends data to add a new story...
    app.post("/api/new", function (req, res) {
        // Take the request...
        var inputs = req.body;

        // Create a routeName

        // Using a RegEx Pattern to remove spaces from story.name
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        //var title = inputs.userName.replace(/\s+/g, "").toLowerCase();

        // Then add the story to the database using sequelize
        userInput.create({
            word1: inputs.word1,
            word2: inputs.word2,
            word3: inputs.word3,
            word4: inputs.word4,
            word5: inputs.word5,
        });

        res.status(204).end();
    });

    app.post("/api/completed/new", function (req, res) {

        var song = req.body
        console.log(song);
        completedContent.create({
            song: song.song,
            templateTitle: song.templateTitle
        })
        
        res.status(204).end();
    });

    app.get("/api/completed/all", function (req, res) {
        completedContent.findAll().then(function (result) {
            return res.json(result);
        })
    });
};

