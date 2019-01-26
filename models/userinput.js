var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var userInput = sequelize.define('userInput', {

    word1: Sequelize.STRING,

    word2: Sequelize.STRING,

    word3: Sequelize.STRING,

    word4: Sequelize.STRING,

    word5: Sequelize.STRING,

}, {
        freezeTableName: true
    });

userInput.sync();

module.exports = userInput;