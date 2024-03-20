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
const message = require('./model/message.js')(sequelize);
const scraperInstance = require('./model/scraper_insnatce.js')(sequelize);
const scraperType = require('./model/scraper_type.js')(sequelize);
const task =  require('./model/task.js')(sequelize);
const source =  require('./model/source.js')(sequelize);
const service_type = require('./model/service_type.js')(sequelize);
const service_instance = require('./model/service_instance.js')(sequelize);
const metadata =  require('./model/metadata.js')(sequelize);
const data_stream_service = require('./model/data_stream_service.js')(sequelize);

module.exports = { user, dashboard, data_stream_dashboard, message, scraperInstance, scraperType, task, source, service_type, service_instance, metadata, data_stream_service }