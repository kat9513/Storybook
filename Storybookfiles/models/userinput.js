var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var userInput = sequelize.define('userInput', {
    
    userName: Sequelize.STRING,

    favColor: Sequelize.STRING

}, {
    freezeTableName: true
});

userInput.sync();

module.exports = userInput;