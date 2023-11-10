var express = require('express');
var Bear = require('../models/bear');
var router = express.Router();

// mostra TODOS os bears (accessed at GET http://localhost:8080/api/bears)
router.get('/',function(req, res){
  Bear.find(function(err, bears){
  if(err){
    res.send(err);
  }
  res.json(bears);
  });
});

// CRIA um bear (accessed at POST http://localhost:8080/api/bears)
router.post('/',function(req, res){
  var bear = new Bear();
  bear.name = req.body.name;

  //save the bear and check for errors
  bear.save(function(err){
    if(err){
      res.send(err);
    }
    res.json({message: 'Bear criado crl'});
  });
});

// MOSTRA UM bear pelo seu ID (accessed at GET http://localhost:8080/api/bears)
router.get('/:bear_id',function(req, res) {
  Bear.findById(req.params.bear_id, function(err, bear){
    if(err){
      res.send(err);
    }
    res.json(bear);
  });
});

// ATUALIZA A INFO de UM bear pelo seu ID
router.put('/:bear_id',function(req, res){
  Bear.findById(req.params.bear_id, function(err, bear){
    if(err){
      res.send(err);
    }
    bear.name = req.body.name;
    bear.sabe(function(err){
      if(err){
        res.send(err);
      }
      res.json({message: 'Bear atualizado crl!'});
    });
  });
});

// FAZ DELETE de UM bear pelo seu ID
router.delete('/:bear_id', function(req, res){
  Bear.removeAllListeners({
    _id: req.params.bear_id
  }, function(err, bear){
    if(err){
      res.send(err);
    }
    res.json({message: 'Urso morto com sucesso crl!'});
  });
});

module.exports = router;
