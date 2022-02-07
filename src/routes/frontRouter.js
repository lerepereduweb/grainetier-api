const sectionController = require('../controllers/sectionController');
const subsectionController = require('../controllers/subsectionController');
const animalController = require('../controllers/animalController');
const userController = require('../controllers/userController');
const imganimalController = require('../controllers/imganimalController');

const router = require('express').Router();


/**
 * @swagger
 * tags:
 *  name: Actualités
 *  description: Liste des requêtes pour gérer la rubrique "Actualités".
 */

/**
 * @swagger
 * /news:
 *  get:
 *      summary: Retourne la liste des rubriques du menu "Actualités". 
 *      tags: [Actualités]
 *      responses:
 *          200:
 *              description: Liste des rubriques du menu "Actualités".
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/news', sectionController.getNews);

/**
 * @swagger
 * /news/events:
 *  get:
 *      summary: Retourne la liste des "Évènements".
 *      tags: [Actualités]
 *      responses:
 *          200:
 *              description: Liste des évènements à venir ou passés depuis moins de 2 mois, triés par date de la plus récente à la plus ancienne.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
 router.get('/news/events', subsectionController.getEvents);


/**
 * @swagger
 * /news/event:
 *  get:
 *      summary: Retourne la liste des "Évènements" à venir.
 *      tags: [Actualités]
 *      responses:
 *          200:
 *              description: Liste des évènements à venir triés par date de la plus récente à la plus ancienne.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
 router.get('/news/event', subsectionController.getEvent);

 /**
 * @swagger
 * /news/star:
 *  get:
 *      summary: Retourne l'animal défini comme étant la "Star du mois".
 *      tags: [Actualités]
 *      responses:
 *          200:
 *              description: Animal possédant l'option d'animal favori (fav_anim=1).
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
 router.get('/news/star', animalController.getStar);

 /**
 * @swagger
 * /news/lost:
 *  get:
 *      summary: Retourne la liste des animaux de la rubrique "Avis de recherche".
 *      tags: [Actualités]
 *      responses:
 *          200:
 *              description: Liste des animaux perdus triés pas date récente de disparition.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/news/lost', animalController.getLost);

/**
 * @swagger
 * /news/last:
 *  get:
 *      summary: Retourne les animaux de la rubrique "Dernier hommage".
 *      tags: [Actualités]
 *      responses:
 *          200:
 *              description: Retourne les animaux décédés depuis moins de 2 mois.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/news/last', animalController.getLast);

 
/**
 * @swagger
 * tags:
 *  name: Qui sommes nous ?
 *  description: Liste des requêtes pour gérer la rubrique "Qui sommes-nous ?".
 */

/**
 * @swagger
 * /who:
 *  get:
 *      summary: Retourne la liste des rubriques du menu "Qui sommes-nous ?".
 *      tags: [Qui sommes nous ?]
 *      responses:
 *          200:
 *              description: Liste des rubriques du menu "Qui sommes-nous ?" et la présentation de l'association.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/who', sectionController.getWho);

/**
 * @swagger
 * /who/infos:
 *  get:
 *      summary: Retourne la liste des étapes d'adoption de la rubrique "L'association".
 *      tags: [Qui sommes nous ?]
 *      responses:
 *          200:
 *              description: Liste des étapes d'adoption de l'association.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
 router.get('/who/infos', subsectionController.getInfos);

/**
 * @swagger
 * /who/actions:
 *  get:
 *      summary: Retourne la liste des actions de la rubrique "Nos actions".
 *      tags: [Qui sommes nous ?]
 *      responses:
 *          200:
 *              description: Liste des actions réalisées par l'association.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/who/actions', subsectionController.getActions);

/**
 * @swagger
 * /who/contact:
 *  get:
 *      summary: Retourne la description de la rubrique "Contact".
 *      tags: [Qui sommes nous ?]
 *      responses:
 *          200:
 *              description: Description du contact.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
 router.get('/who/contact', subsectionController.getContact);

 /**
 * @swagger
 * /who/contact/user:
 *  get:
 *      summary: Retourne les coordonnées des utilisateurs.
 *      tags: [Qui sommes nous ?]
 *      responses:
 *          200:
 *              description: Coordonnées des utilisateurs.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
 router.get('/who/contact/user', userController.getUsers);



/**
 * @swagger
 * tags:
 *  name: Nos réfugiés
 *  description: Liste des requêtes pour gérer la rubrique "Nos réfugiés".
 */

/**
 * @swagger
 * /shelter:
 *  get:
 *      summary: Retourne la liste des rubriques du menu "Nos réfugiés".
 *      tags: [Nos réfugiés]
 *      responses:
 *          200:
 *              description: Liste des rubriques du menu "Nos réfugiés".
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/shelter', sectionController.getShelter);

/**
 * @swagger
 * /shelter/adopt:
 *  get:
 *      summary: Retourne la liste des animaux de la rubriques du menu "A adopter".
 *      tags: [Nos réfugiés]
 *      responses:
 *          200:
 *              description: Liste des animaux à adopter.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/shelter/adopt', animalController.getAdopt);

/**
 * @swagger
 * /shelter/sponsor:
 *  get:
 *      summary: Retourne la liste des animaux de la rubriques du menu "A parrainer".
 *      tags: [Nos réfugiés]
 *      responses:
 *          200:
 *              description: Animaux avec une situation "A ADOPTER, EN ATTENTE, FALD, PENSION PAYANTE".
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/shelter/sponsor', animalController.getSponsor);

/**
 * @swagger
 * /shelter/adopted:
 *  get:
 *      summary: Retourne la liste des animaux de la rubriques du menu "Adoptés".
 *      tags: [Nos réfugiés]
 *      responses:
 *          200:
 *              description: Animaux avec une situation "ADOPTE, RESERVE".
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/shelter/adopted', animalController.getAdopted);

/**
 * @swagger
 * /shelter/thought:
 *  get:
 *      summary: Retourne la liste des animaux de la rubriques du menu "Hommages".
 *      tags: [Nos réfugiés]
 *      responses:
 *          200:
 *              description: Liste des animaux décédés.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/shelter/thought', animalController.getThought);


 /**
 * @swagger
 * tags:
 *  name: Images
 *  description: Liste des requêtes pour gérer les images".
 */

/**
 * @swagger
 * /img/fav:
 *  get:
 *      summary: Retourne la liste des images de l'animal favori.
 *      tags: [Images]
 *      responses:
 *          200:
 *              description: Liste des images de l'animal favori.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
 router.get('/img/fav', imganimalController.getImgFav);

/**
 * @swagger
 * /img/adopted:
 *  get:
 *      summary: Retourne la liste des images des animaux adoptés.
 *      tags: [Images]
 *      responses:
 *          200:
 *              description: Liste des images des animaux qui ont trouvés une famille.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
 router.get('/img/adopted', imganimalController.getImgAdopted);

 /**
 * @swagger
 * /img/thought:
 *  get:
 *      summary: Retourne la liste des images des animaux décédés.
 *      tags: [Images]
 *      responses:
 *          200:
 *              description: Liste des images des animaux décédés.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
 router.get('/img/thought', imganimalController.getImgThought);

 /**
 * @swagger
 * /img/actions:
 *  get:
 *      summary: Retourne la liste des images des actions de l'association.
 *      tags: [Images]
 *      responses:
 *          200:
 *              description: Liste des images des actions de l'association.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
  router.get('/img/actions', imganimalController.getImgActions);


/**
 * @swagger
 * tags:
 *  name: Nous soutenir
 *  description: Liste des requêtes pour gérer la rubrique "Nous aider".
 */

/**
 * @swagger
 * /help:
 *  get:
 *      summary: Retourne la liste des rubriques du menu "Nous aider".
 *      tags: [Nous soutenir]
 *      responses:
 *          200:
 *              description: Liste des rubriques du menu "Nous aider".
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/help', sectionController.getHelp);

/**
 * @swagger
 * /help/human:
 *  get:
 *      summary: Retourne la liste des soutiens personnels.
 *      tags: [Nous soutenir]
 *      responses:
 *          200:
 *              description: Soutiens personnels Bénévoles ou Familles d'accueil.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/help/human', subsectionController.getHuman);

/**
 * @swagger
 * /help/money:
 *  get:
 *      summary: Retourne la liste des soutiens financiers.
 *      tags: [Nous soutenir]
 *      responses:
 *          200:
 *              description: Soutiens financier Adhésion, Parrainage, Dons.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/help/money', subsectionController.getMoney);

/**
 * @swagger
 * /help/shop:
 *  get:
 *      summary: Retourne la liste des Boutiques.
 *      tags: [Nous soutenir]
 *      responses:
 *          200:
 *              description: Liste des boutiques.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
 router.get('/help/shop', subsectionController.getShop);



module.exports = router;