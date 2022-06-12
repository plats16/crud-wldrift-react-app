import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Hero = db.define(
  "hero",
  {
    name: DataTypes.STRING,
    heroclass: DataTypes.STRING,
    role: DataTypes.STRING,
    region: DataTypes.STRING
  },
  {
    freezeTableName: true,
  }
);

export default Hero;

// async () => {
//   await db.sync();
// };
