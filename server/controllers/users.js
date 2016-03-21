var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = (function(){
	return {
		index: function(req, res){
			People.find({}, function(err, results){
				if(err){
					console.log('err retrieving people' + err);
				} else{
					res.json(results);
				}
			});
		},
		create: function(req, res){
			var person = new People({name: req.body.name});
			person.save(function(err, results){
				if(err){
					console.log('did not save person' + person.errors);
				} else{
					console.log('saved person to db');
					res.json(results);
				}
			});
		},
		destroy: function(req, res){
			People.remove({_id: req.params.id}, function(err, results){
				if(err){
					console.log('failed to delete person');
				} else{
					console.log('deleted person');
					res.json(results);
				}
			});
		}
	}
})();