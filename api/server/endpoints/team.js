const express = require('express');
const ap = express();
const teamRoutes = express.Router();

let Team = require('../models/Team');

teamRoutes.route('/add').post(function (req, res){
    let team = new Team(req.body);
    team.save()
        .then(team => {
            res.status(200).json(team);
        })
        .catch(err => {
            res.status(400).send("impossible de sauvegarder dans la bd");
        }); 
});

teamRoutes.route('/delete/:id').get(function (req,res){
    Team.findByIdAndRemove({_id:req.params.id},function(err, team){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

teamRoutes.route('/').get(function (req, res) {
    Team.find(function (err, teams){
        if(err){
            console.log(err);
        }
        else {
            res.json(teams);
        }
    });
});

module.exports = teamRoutes;