/*
File Name:index.js
Author's Name: Jashandeep Kaur
Website Name: jashandeepkaur.azurewebsites.net
File Description: It contains the routes for linking the controller to the view for corresponding pages.
*/
var express = require('express');
var router = express.Router();

/* Refer to controller containing functions of route connecting pages*/
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
/*Retrieve info from post. */
router.post('/contact', portfolioController.mail);


module.exports = router;
