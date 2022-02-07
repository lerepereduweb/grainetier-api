const db = require('../models');
const Seed = db.seed;

const getSeed = async (req, res, next) => {
    try {
        let seed = await Seed.findAll();
        res.status(200).json(seed);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getSeed : ${err.message}`);
    }
};

module.exports = {
    getSeed,
};