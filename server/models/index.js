const Sequelize = require("sequelize");

const PG_URL = "postgres://lqtwyilf:hhCmPm53HYWX2Y5hUybZrpMX0hplG-Mh@fanny.db.elephantsql.com/lqtwyilf";

const sequelize = new Sequelize(PG_URL, {
  dialect: "postgres"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Movies = require("./Movies.js")(sequelize, Sequelize);

module.exports = db;