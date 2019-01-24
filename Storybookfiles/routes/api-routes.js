//dependencies
var userInput = require('../models/userInput.js');
var content = require('../models/content.js');



//routes 
module.exports = function (app) {
    app.get('/api/name/:userName?', function (req, res) {
        if (req.params.userName) {

            userInput.findOne({
                where: {
                    userName: req.params.userName
                }
            }).then(function (result) {
                return res.json(result);
            });
        } else {
            userInput.findAll().then(function (result) {
                return res.json(result);
            });
        }

    });

    // Returns a JSON Array of JSON Objects that contain the lines for our Mad Lib.

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
        var title = inputs.userName.replace(/\s+/g, "").toLowerCase();

        // Then add the story to the database using sequelize
        userInput.create({
            userName: inputs.userName,
            favColor: inputs.favColor,
        });

        res.status(204).end();
    });
};

