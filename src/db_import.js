module.exports = {
  production: {
    client: "pg",
    connection: process.env.DATABASEURL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tablename: "pg_migrations",
      directory: "./",
    },
  },
};
