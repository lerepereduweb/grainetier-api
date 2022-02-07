const db = require('../models');
const ImgAnimal = db.imganimal;

const getImgAdopted = async (req, res, next) => {
    try {
        let imgAdopt = await ImgAnimal.findAll({where: { type_img: "ADOPTED" }});
        res.status(200).json(imgAdopt);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getImgAdopted : ${err.message}`);
    }
};

const getImgThought = async (req, res, next) => {
    try {
        let imgThought = await ImgAnimal.findAll({where: { type_img: "DIED" }});
        res.status(200).json(imgThought);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getImgThought : ${err.message}`);
    }
};

const getImgFav = async (req, res, next) => {
    try {
        let imgFav = await ImgAnimal.findAll({where: { type_img: "FAVORI" }});
        res.status(200).json(imgFav);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getImgFav : ${err.message}`);
    }
};

const getImgActions = async (req, res, next) => {
    try {
        let imgActions = await ImgAnimal.findAll({where: { type_img: "ACTIONS" }});
        res.status(200).json(imgActions);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getImgActions : ${err.message}`);
    }
};



module.exports = {
    getImgAdopted,
    getImgThought,
    getImgFav,
    getImgActions
};