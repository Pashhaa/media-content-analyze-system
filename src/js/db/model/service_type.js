'use strict';

const Sequelize = require('sequelize');

function service_type(sequelize) {
    return sequelize.define("service_type", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: "service_type"
    });
}

module.exports = service_type;