var express = require('express');
var router = express.Router();

const portfolioController = require('../controllers/portfolioController')

/* GET home page. */
router.get('/', portfolioController.home);

/* GET about page. */
router.get('/about', portfolioController.about);

/* GET projects page. */
router.get('/projects', portfolioController.projects);

/* GET services page. */
router.get('/services', portfolioController.services);

/* GET contact page. */
router.get('/contact', portfolioController.contact);
router.post('/contact', portfolioController.mail);

module.exports = router;
