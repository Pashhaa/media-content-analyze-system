'use strict'

const Sequelize = require('sequelize');

function metadata(sequelize) {
    return sequelize.define("metadata", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,

            },
            key: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            value: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            metadata_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: "metadata"
        })
}

module.exports = metadata;