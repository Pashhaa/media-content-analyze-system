'use strict';

const Sequelize = require('sequelize');

function task(sequelize) {
    return sequelize.define("task", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,

        },
        data: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: "task"
    });
}

module.exports = task;