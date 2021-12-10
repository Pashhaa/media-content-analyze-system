const Sequelize = require('sequelize');

function scraperInstance(sequelize) {
    return sequelize.define("scraper_instance", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            
        },
        endpoint: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        task_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        scraper_type_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, 
    {
        timestamps: false,
        tableName: "scraper_instance"
    })
}

module.exports = scraperInstance;