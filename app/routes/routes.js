
//var router = require('express').Router();

itemController = require('../controllers/itemController')


module.exports = (function() {
    'use strict';

    var apiRoutes = require('express').Router();

    apiRoutes.get('/', function (req, res) {
        res.send('Hello ExternalRoutes!');
    });
    apiRoutes.get('/someRoute', function (req, res) {
        res.send('Hello SomeRoute!');
    });

    apiRoutes.get('/getStaticItems',itemController.getStaticItems);
    apiRoutes.get('/getItems',itemController.getItems);
    apiRoutes.get('/auth',itemController.auth);
    apiRoutes.post('/addItem',itemController.insertItem);
    apiRoutes.delete('/deleteItem/:id',itemController.deleteItem);
    apiRoutes.post('/updateItem/:id',itemController.updateItem);
    apiRoutes.get('/findItemById',itemController.findItemById);
    //apiRoutes.get('/getItemById/:id',itemController.getItemById);
    return apiRoutes;
})();
