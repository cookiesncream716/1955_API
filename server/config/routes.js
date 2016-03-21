var users = require('./../controllers/users.js');

module.exports = function(app){
	app.get('/people', function(req, res){
		users.index(req, res);
	});
	app.post('/people', function(req, res){
		users.create(req, res);
	});
	app.delete('/people/:id', function(req, res){
		console.log('routes' + req.params.id)
		users.destroy(req, res);
	})
}