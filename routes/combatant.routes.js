const express = require('express');
const app = express();
const combatantRoutes = express.Router();

// Require AdUnit model in our routes module
let Combatant = require('../models/Combatant');

// Defined store route
combatantRoutes.route('/add').post(function (req, res) {
  let combatant = new Combatant(req.body);
  combatant.save()
    .then(game => {
      res.status(200).json({'Combatant': 'Combatant in added successfully'});
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

// Defined get data(index or listing) route
combatantRoutes.route('/').get(function (req, res) {
  Combatant.find(function (err, combatants){
    if(err){
      console.log(err);
    }
    else {
      res.json(combatants);
    }
  });
});

// Defined edit route
combatantRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Combatant.findById(id, function (err, combatant){
    res.json(combatant);
  });
});

//  Defined update route
combatantRoutes.route('/update/:id').post(function (req, res) {
  Combatant.findById(req.params.id, function(err, combatant) {
    if (!combatant)
      return next(new Error('Could not load Document'));
    else {
      combatant.name = req.body.name;
      combatant.description = req.body.description;

      combatant.save().then(combatant => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
combatantRoutes.route('/delete/:id').get(function (req, res) {
  Combatant.findByIdAndRemove({_id: req.params.id}, function(err, combatant){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = combatantRoutes;
