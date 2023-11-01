import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4, // Gunakan UUID versi 4
        primaryKey: true,
    },
    nik: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: true
});

export default Users;