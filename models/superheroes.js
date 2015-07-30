var mongoose = require('mongoose');

// SuperHero Schema Definition
var superHeroSchema = mongoose.Schema({
	name        : String,
	superPowers : [ {type : String} ],
	cape        : Boolean
});

// Create the model and collection for SuperHeroes
var SuperHeroes = mongoose.model('SuperHeroes', superHeroSchema);

// Export the model
module.exports = SuperHeroes;

// SuperHeroes is our entry point into the DB collection
// new SuperHeroes({..})
// SuperHeroes.update({}, function())