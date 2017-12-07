module.exports = function(app) {
	app.get('/produtos', function(req, res){
		console.log('rodando...');
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'admin',
			database: 'casadocodigo_nodejs'
		});
		
		connection.query('select * from livros', function(erro, results){
			res.send(results);
		});
		
		connection.end();
	});
}

