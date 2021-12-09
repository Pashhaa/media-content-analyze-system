'use strict';

const { dbConfig } = require('../config/config.json');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.dbName, dbConfig.userName, dbConfig.dbPassword, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});

const user = require('./model/user.js')(sequelize);
const dashboard = require('./model/dashboard.js')(sequelize);
const data_stream_dashboard = require('./model/data_stream_dashboard.js')(sequelize);

module.exports = {}