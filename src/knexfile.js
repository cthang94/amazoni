import dotenv from "dotenv";
dotenv.config();

export default require("knex")({
  debug: true,
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB,
    charset: "utf8",
  },
});
