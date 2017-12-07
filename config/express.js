var app = require('express')();
app.set('view engine', 'ejs');
app.set('views', './app/views')

module.exports = function() {
	console.log('carregando o modulo express');
	return app;
}