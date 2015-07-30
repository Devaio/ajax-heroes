// Require our model so we can access the collection in the DB
var SuperHeroes = require('../models/superheroes.js');

var superHeroController = {

	// Getting superheroes from the DB
	getHeroes : function(req, res){
		// var myHeroes = [];
		// db.superheroes.find({}) - mongo shell
		SuperHeroes.find({}, function(err, heroes){
			// myHeroes = heroes;
			if (err) {
				res.send( {err : err} );
			}
			else {
				res.send( {data : heroes} );
			}

		});
		// console.log(myHeroes);

		// BIG BLOCK OF IMPORTANT CODE
		// Our big block is not held up by async requests (like mongoose methods)
		// It can begin execution and the callback passed to the async request
		// can execute when that request is finished (At ANY point)

	},

	// Adding a NEW superhero to the DB
	createHero : function(req, res){
		// POST request - data comes in from req.body
		console.log('Req Body : ', req.body)
		// Simple validation for the NAME input on the front end
		if (!req.body.name){
			res.send({err : "You didn't send a name!"})
		}
		else{

			// Our req.body properties are going to match to our Schema
			// The object passed in MUST match the schema properties
			// Or those properties will be ignored
			var hero = new SuperHeroes(req.body);

			// Save the new document object we created above.
			hero.save(function(err, document){
				res.send({data : document});
			});
		}


	}
}

module.exports = superHeroController;