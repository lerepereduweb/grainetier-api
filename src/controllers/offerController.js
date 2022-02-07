const db = require('../models');
const Offer = db.offer;

const getOffer = async (req, res, next) => {
    try {
        let offer = await Offer.findAll();
        res.status(200).json(offer);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getOffer : ${err.message}`);
    }
};

module.exports = {
    getOffer,
};