const moment = require('moment');
const db = require('../models');
const Subsection = db.subsections;
const { Op } = require("sequelize");

const getEvents = async (req, res, next) => {
    try {
    let events = await Subsection.findAll({where: {[Op.and]: [{ type_ssc: "Evènements" }/*, { deb_ssc: {[Op.gte]: moment().subtract(60, 'days').toDate()} }*/]}, order: [['deb_ssc', 'DESC']]});
        res.status(200).json(events);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getEvents : ${err.message}`);
    }
};

const getEvent = async (req, res, next) => {
    try {
        let events = await Subsection.findAll({where: {[Op.and]: [{ type_ssc: "Evènements" }, { deb_ssc: {[Op.gte]: moment().toDate()} }]}, order: [['deb_ssc', 'DESC']]});
        res.status(200).json(events);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getEvent : ${err.message}`);
    }
};

const getInfos = async (req, res, next) => {
    try {
        let actions = await Subsection.findAll({where: { type_ssc: "L'association" }, order: [['no_ssc', 'ASC']]});
        res.status(200).json(actions);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getInfos : ${err.message}`);
    }
};

const getActions = async (req, res, next) => {
    try {
        let actions = await Subsection.findAll({where: { type_ssc: "Nos actions" }, order: [['no_ssc', 'ASC']]});
        res.status(200).json(actions);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getActions : ${err.message}`);
    }
};

const getContact = async (req, res, next) => {
    try {
        let contact = await Subsection.findOne({where: { type_ssc: "Contact" }, order: [['no_ssc', 'ASC']]});
        res.status(200).json(contact);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getContact : ${err.message}`);
    }
};

const getHuman = async (req, res, next) => {
    try {
        let human = await Subsection.findAll({where: { type_ssc: "Soutien personnel" }, order: [['no_ssc', 'ASC']]});
        res.status(200).json(human);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getHuman : ${err.message}`);
    }
};

const getMoney = async (req, res, next) => {
    try {
        let money = await Subsection.findAll({where: { type_ssc: "Soutien financier" }, order: [['no_ssc', 'ASC']]});
        res.status(200).json(money);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getMoney : ${err.message}`);
    }
};

const getShop = async (req, res, next) => {
    try {
        let shop = await Subsection.findAll({where: { type_ssc: "Boutiques" }, order: [['no_ssc', 'ASC']]});
        res.status(200).json(shop);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getShop : ${err.message}`);
    }
};

module.exports = {
    getEvents,
    getEvent,
    getInfos,
    getActions,
    getContact,
    getHuman,
    getMoney,
    getShop
};
