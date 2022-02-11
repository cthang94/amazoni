const dbEngine = process.env.DB_ENVIRONMENT;
const config = require("/db_import")(dbEngine);

module.exports = require("knex")(config);
