import sequelize from 'sequelize';


const db = new sequelize('tutorial_db', 'root','gwsudahbahagia', {
    host : '127.0.0.1',
    port : 3307,
    dialect: 'mysql'
});

export default db