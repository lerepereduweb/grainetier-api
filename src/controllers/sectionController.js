const db = require('../models');
const Section = db.sections;

const getNews = async (req, res, next) => {
    try {
        let news = await Section.findAll({where: { lien_sec: "actualites" }, order: [['no_sec', 'ASC']]});
        res.status(200).json(news);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getNews : ${err.message}`);
    }
};

const getWho = async (req, res, next) => {
    try {
        let who = await Section.findAll({where: { lien_sec: "qui-sommes-nous" }, order: [['no_sec', 'ASC']]});
        res.status(200).json(who);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getWho : ${err.message}`);
    }
};

const getShelter = async (req, res, next) => {
    try {
        let shelter = await Section.findAll({where: { lien_sec: "nos-refugies" }, order: [['no_sec', 'ASC']]});
        res.status(200).json(shelter);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getShelter : ${err.message}`);
    }
};

const getHelp = async (req, res, next) => {
    try {
        let help = await Section.findAll({where: { lien_sec: "nous-soutenir" }, order: [['no_sec', 'ASC']]});
        res.status(200).json(help);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getHelp : ${err.message}`);
    }
};

module.exports = {
    getNews,
    getWho,
    getShelter,
    getHelp
};