const seedController = require('../controllers/seedController');
const searchController = require('../controllers/searchController');
const offerController = require('../controllers/offerController');
const userController = require('../controllers/userController');
const orderController = require('../controllers/orderController');
const cartController = require('../controllers/cartController');

const router = require('express').Router();

/**
 * @swagger
 * tags:
 *  name: Mon espace
 *  description: Liste des requêtes pour gérer la rubrique "Mon espace" de l'utilisateur connecté.
 */

/**
 * @swagger
 * /ownspace/user:
 *  get:
 *      summary: Retourne les informations personnelles de l'utilisateur connecté.
 *      tags: [Mon espace]
 *      responses:
 *          200:
 *              description: Liste toutes les informations personnelles de l'utilisateur connecté.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/ownspace/user', userController.getUsers);


/**
 * @swagger
 * /ownspace/search:
 *  get:
 *      summary: Retourne la liste des demandes de recherche de l'utilisateur connecté.
 *      tags: [Mon espace]
 *      responses:
 *          200:
 *              description: Liste toutes les demandes de recherche de l'utilisateur connecté.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/ownspace/search', searchController.getSearch);


/**
 * @swagger
 * /ownspace/offer:
 *  get:
 *      summary: Retourne la liste des offres d'échange de l'utilisateur connecté.
 *      tags: [Mon espace]
 *      responses:
 *          200:
 *              description: Liste les offres d'échange de l'utilisateur connecté.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/ownspace/offer', offerController.getOffer);


/**
 * @swagger
 * /ownspace/cart:
 *  get:
 *      summary: Retourne le contenu du panier de l'utilisateur connecté.
 *      tags: [Actualités]
 *      responses:
 *          200:
 *              description: Liste le contenu du panier de l'utilisateur connecté.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/ownspace/cart', cartController.getCart);


/**
 * @swagger
 * /ownspace/order:
 *  get:
 *      summary: Retourne le contenu des commandes de l'utilisateur connecté.
 *      tags: [Actualités]
 *      responses:
 *          200:
 *              description: Liste les commandes de l'utilisateur connecté.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/ownspace/order', orderController.getOrder);


module.exports = router;
