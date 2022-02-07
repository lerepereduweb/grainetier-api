
module.exports = {
    DB_HOST: `${process.env.DB_HOST_GNT}`,
    DB_CONNECT: `${process.env.DB_CONNECT}`,
    DB_USER: `${process.env.DB_USER_GNT}`,
    DB_PWD: `${process.env.DB_PWD_GNT}`,
    DB_DATABASE: `${process.env.DB_DATABASE_GNT}`,

    POOL: {
        MAX: 3,
        MIN: 0,
        ACQUIRE: 30000, //Délai d'acquisition d'une connexion
        IDLE: 10000     //Suppression des connexions inactives
    }
};