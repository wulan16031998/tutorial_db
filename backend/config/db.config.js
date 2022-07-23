import sequelize from 'sequelize';


const db = new sequelize('tutorial_db', 'root','', {
    host : '127.0.0.1',
    port : 3306,
    dialect: 'mysql'
});

export default db