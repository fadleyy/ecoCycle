import { Sequelize } from "sequelize";

const db = new Sequelize('ecocycle_db', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});

export default db