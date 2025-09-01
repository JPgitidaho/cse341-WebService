const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');


routes.get('/juanita', lesson1Controller.juanitaRouter);
routes.get('/bugs', lesson1Controller.bugsRouter);

module.exports = routes;