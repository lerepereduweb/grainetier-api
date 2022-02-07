const db = require('../models');
const Search = db.search;

const getSearch = async (req, res, next) => {
    try {
        let search = await Search.findAll();
        res.status(200).json(search);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getSearch : ${err.message}`);
    }
};

module.exports = {
    getSearch,
};
