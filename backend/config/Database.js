import { Sequelize } from "sequelize";

const db = new Sequelize("simplecrud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;