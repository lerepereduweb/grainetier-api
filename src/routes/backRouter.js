const seedController = require('../controllers/seedController');

const router = require('express').Router();


/**
 * @swagger
 * tags:
 *  name: Administration
 *  description: Liste les actions modifiables par l'administrateur.
 */

/**
 * @swagger
 * /admin/seed:
 *  get:
 *      summary: Retourne la liste des graines en base de données.
 *      tags: [Administration]
 *      responses:
 *          200:
 *              description: Liste toutes les graines de la base de données.
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 */
router.get('/admin/seed', seedController.getSeed);
module.exports = router;
