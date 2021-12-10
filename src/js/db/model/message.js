const Sequelize = require('sequelize');

function message(sequelize) {
    return sequelize.define("message", {
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
        scraper_instance_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, 
    {
        timestamps: false,
        tableName: "message"
    })
}

module.exports = message;