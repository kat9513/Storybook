var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var completedContent = sequelize.define('completedContent', {

    song: Sequelize.STRING,

    templateTitle: Sequelize.STRING

}, {
        freezeTableName: true,
        timestamps: false
    });

completedContent.sync();

module.exports = completedContent;