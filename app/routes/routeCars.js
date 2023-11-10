var express = require('express');
var Car = require('../models/cars');
var router = express.Router();

router.get('/',function(req, res){
  Car.find(function(err, cars){
  if(err){
    res.send(err);
  }
  res.json(cars);
  });
});

router.post('/',function(req, res){
  var car = new Car();
  car.name = req.body.name;

  car.save(function(err){
    if(err){
      res.send(err);
    }
    res.json({message: 'Car criado crl'});
  });
});

router.get('/:car_id',function(req, res) {
  Car.findById(req.params.car_id, function(err, car){
    if(err){
      res.send(err);
    }
    res.json(car);
  });
});

router.put('/:car_id',function(req, res){
  Car.findById(req.params.car_id, function(err, car){
    if(err){
      res.send(err);
    }
    car.name = req.body.name;
    car.sabe(function(err){
      if(err){
        res.send(err);
      }
      res.json({message: 'car atualizado crl!'});
    });
  });
});

router.delete('/:car_id', function(req, res){
  Car.removeAllListeners({
    _id: req.params.car_id
  }, function(err, car){
    if(err){
      res.send(err);
    }
    res.json({message: 'Urso morto com sucesso crl!'});
  });
});

module.exports = router;
