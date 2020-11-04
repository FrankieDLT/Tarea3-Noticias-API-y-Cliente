const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const newsController = require('./../src/controllers/news.controller');

router.get('/noticias',newsController.getAll);
router.get('/titulares',newsController.getAllTitulares);
router.get('/fuentes',newsController.getAllFuentes);
router.get('/noticias/:noticiaID',newsController.getById);

/*
router.post('/auth',function(req,res){
    console.log('Auth: ',req.body);
    res.send('Ok');
  });
  
  router.post('/auth2',function(req,res){
    console.log('Auth2: ',req.body);
    res.send('Ok');
  });
*/


module.exports = router;