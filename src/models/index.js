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
db.users = require('./userModel.js')(sequelize, DataTypes);
db.seed = require('./seedModel.js')(sequelize, DataTypes);
db.search = require('./searchModel.js')(sequelize, DataTypes);
db.order = require('./orderModel.js')(sequelize, DataTypes);
db.offer = require('./offerModel.js')(sequelize, DataTypes);
db.cart = require('./cartModel.js')(sequelize, DataTypes);
//db.followoffer = require('./followofferModel.js')(sequelize, DataTypes);
//db.followuser = require('./followuserModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then( () => {
        console.log("Re-sync database done !")
    })
    .catch( err => {
        console.error(`Error to database connection : ${err}`);
    });

module.exports = db;