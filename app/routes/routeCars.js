var express = require('express');
var Car = require('../models/car');
var Bear = require('../models/bear');
var router = express.Router();

router.get('/', function(req, res){
  Car.find(function(err, cars){
  if(err){
    res.send(err);
  }
  res.json(cars);
  });
});

router.post('/', async function(req, res){
  var car = new Car();
  car.matricula = req.body.matricula;
  car.dataRegisto = req.body.matricula;
  car.dono = await Bear.findOne({name: req.body.nomeUrso}).exec();

  car.save(function(err){
    if(err){
      res.send(err);
    }
    res.json({message: 'Car criado crl'});
  });
});

router.get('/', function(req, res){
  Car.find(function(err, cars){
    if(err){
      res.send(err);
    }
    res.json(cars);
  });
});

router.put('/',function(req, res){
  Car.find(function(err, car){
    if(err){
      res.send(err);
    }
    car.name = req.body.name;
    car.save(function(err){
      if(err){
        res.send(err);
      }
      res.json({message: 'car atualizado crl!'});
    });
  });
});

router.delete('/', function(req, res){
  Car.removeAllListeners({
    _id: req.params.car_id
  }, function(err, car){
    if(err){
      res.send(err);
    }
    res.json({message: 'Carro destruido com sucesso crl!'});
  });
});

module.exports = router;
