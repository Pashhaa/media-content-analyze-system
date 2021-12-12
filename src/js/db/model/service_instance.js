'use strict'

const Sequelize = require('sequelize');

function service_instance(sequelize) {
    return sequelize.define("service_instance", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,

            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            endpoint: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            service_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: "service_instance"
        })
}

module.exports = service_instance;