'use strict';

const Sequelize = require('sequelize');

function scraperType(sequelize) {
    return sequelize.define("scraper_type", {
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
        repo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        source_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: "scraper_type"
    });
}

module.exports = scraperType;