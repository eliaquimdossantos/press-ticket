require("../bootstrap");

module.exports = {
  define: {
    charset: "utf8",
    collate: "utf8_general_ci"
  },
  dialect: process.env.DB_DIALECT || "postgres",
  timezone: process.env.DB_TIMEZONE || "America/Sao_Paulo",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: false,
  seederStorage: "sequelize",
  seederStorageTableName: "sequelizeData",
  pool: {
    max: 2,  // quantidade máxima de conexões no pool
  }
};
