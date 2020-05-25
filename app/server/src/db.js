const Sequelize = require('sequelize');

const sequelize = new Sequelize('app', 'admin', 'admin', {
    host: 'db',
    dialect: 'postgres'
});

const s = sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established with db successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
