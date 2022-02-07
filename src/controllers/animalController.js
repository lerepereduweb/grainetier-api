const moment = require('moment');
const db = require('../models');
const Animal = db.animals;
const { Op } = require("sequelize");

const getStar = async (req, res, next) => {
    try {
        let star = await Animal.findOne({where: { fav_anim: 1 }});
        res.status(200).json(star);    
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getStar : ${err.message}`);
    }
};

const getLost = async (req, res, next) => {
    try {
        let lost = await Animal.findAll({where: { situ_anim: "PERDU" }, order: [['dte_situ', 'DESC']]});
        res.status(200).json(lost);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getLost : ${err.message}`);
    }
};

const getLast = async (req, res, next) => {
    try {
        let last = await Animal.findAll({where: {[Op.and]: [{ situ_anim: "DECEDE" }, { dte_situ: {[Op.gte]: moment().subtract(60, 'days').toDate()} }]}, order: [['dte_situ', 'DESC']]});
        res.status(200).json(last);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getLast : ${err.message}`);
    }
};

const getAdopt = async (req, res, next) => {
    try {
        let adopt = await Animal.findAll({where: {situ_anim: "A ADOPTER" }, order: [['fav_anim', 'DESC']]});
        res.status(200).json(adopt);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getAdopt : ${err.message}`);
    }
};

const getSponsor = async (req, res, next) => {
    try {
        let sponsor = await Animal.findAll({where: {a_parrainer: 1}});
        res.status(200).json(sponsor);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getSponsor : ${err.message}`);
    }
};

const getAdopted = async (req, res, next) => {
    try {
        let adopted = await Animal.findAll({where: {situ_anim: {[Op.in]: ["ADOPTE", "RESERVE"]}}});
        res.status(200).json(adopted);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getAdopted : ${err.message}`);
    }
};

const getThought = async (req, res, next) => {
    try {
        let thought = await Animal.findAll({where: {situ_anim: "DECEDE"}, order: [['dte_situ', 'DESC']]});
        res.status(200).json(thought);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getThought : ${err.message}`);
    }
};

module.exports = {
    getStar,
    getLost,
    getLast,
    getAdopt,
    getSponsor,
    getAdopted,
    getThought
};