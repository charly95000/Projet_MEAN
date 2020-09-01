const mongoose = require('mongoose');

let Team = new mongoose.Schema({
    name: { type: String},
    poste: { type: String},
    photo: { type: String}
}, {
    collection : 'team'
   }
);

module.exports = mongoose.model('Team', Team);