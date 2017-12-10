module.exports = function(app) {
	
	var listaProdutos = function(req, res){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.lista(function(erro, results){
			res.format({
				html: function(){
					res.render('produtos/lista', {
						lista: results
					});
				},
				json: function(){
					res.json(results);
				}
			});
			
		});
		connection.end();
	};

	app.get('/produtos', listaProdutos);

	app.get('/produtos/form', function(req, res){
		res.render('produtos/form');
	});

	app.post('/produtos', function(req, res){
		var produto = req.body;
		console.log(produto);
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto, function(erro, results){
			console.log(erro);
			res.redirect('/produtos');
		});
		connection.end();
	});
}

