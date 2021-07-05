const router = require('express').Router();
const api = require('./api');
const homeRoute = require('./home-routes');


router.get('/', async (req, res) => {
    res.render('all');
  });

  router.get('/home, async (req, res) => {
    return res.render('dish', dishes[req.params.num - 1]);
  });
  
  module.exports = router;
  module.exports = api;
  module.exports = homeRoute;