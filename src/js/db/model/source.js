'use strict';

const Sequelize = require('sequelize');

function source(sequelize) {
    return sequelize.define("source", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,

        },
        url: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        api_key: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        task_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: "source"
    });
}

module.exports = source;