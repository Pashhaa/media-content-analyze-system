const Sequelize = require('sequelize');

function dashboard(sequelize) {
    return sequelize.define("dashboard", {
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
    }, 
    {
        timestamps: false,
        tableName: "dashboard"
    })
}

module.exports = dashboard;