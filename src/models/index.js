const config = require('../config/config');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize (
    config.DB_DATABASE,
    config.DB_USER,
    config.DB_PWD, {
        host: config.DB_HOST,
        dialect: config.DB_CONNECT,
        operatorsAliases: 0,
        pool: {
            max: config.POOL.MAX,
            min: config.POOL.MIN,
            acquire: config.POOL.ACQUIRE,
            idle: config.POOL.IDLE
        }
    }
)

sequelize.authenticate()
    .then( () => {
        console.log('Connected to database !')
    })
    .catch( err => {
        console.error(`Error to database connection : ${err}`);
    });


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Liste des tables
db.sections = require('./sectionModel.js')(sequelize, DataTypes);
db.subsections = require('./subsectionModel.js')(sequelize, DataTypes);
db.animals = require('./animalModel.js')(sequelize, DataTypes);
db.users = require('./userModel.js')(sequelize, DataTypes);
db.imganimal = require('./imganimalModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then( () => {
        console.log("Re-sync database done !")
    })
    .catch( err => {
        console.error(`Error to database connection : ${err}`);
    });

module.exports = db;