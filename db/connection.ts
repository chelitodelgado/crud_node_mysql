// Conexion

import { Sequelize } from "sequelize";

const db = new Sequelize( 'crud_node_mysql', 'root', '', {
    host:'localhost',
    dialect: 'mysql',
    // logging: 'false'
});

export default db;
