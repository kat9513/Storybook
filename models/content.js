var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var content = sequelize.define('content', {

    line: Sequelize.STRING,

    order: Sequelize.INTEGER,

    templateTitle: Sequelize.STRING,

    wordType: Sequelize.STRING,

}, {
        freezeTableName: true,
        timestamps: false
    });

content.sync();

module.exports = content;