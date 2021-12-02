'use strict';

const { dbConfig } = require('../config/config.json');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.dbName, dbConfig.userName, dbConfig.dbPassword, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});

const applicants = require('./model/applicantTable.js')(sequelize);
const positions = require('./model/positionTable.js')(sequelize);

module.exports = {}