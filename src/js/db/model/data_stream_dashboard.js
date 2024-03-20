'use strict';

const Sequelize = require('sequelize');

function data_stream_dashboard(sequelize) {
    return sequelize.define("data_stream_dashboard", {
        dashboard_id: {
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
        tableName: "data_stream_dashboard"
    })
}

module.exports = data_stream_dashboard;