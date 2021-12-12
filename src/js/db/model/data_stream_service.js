'use strict';

const Sequelize = require('sequelize');

function data_stream_service(sequelize) {
    return sequelize.define("data_stream_service", {
        data_stream_service_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        task_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: "data_stream_service"
    })
}

module.exports = data_stream_service;