module.exports = function router(app) {
	app.post('/api/temperature', function (req, res) {
		console.log('Mensaje:' + JSON.stringify(req.body));
		res.send(200);
	});
	app.get('/api/temperature', function (req, res) {
		console.log('MensajeGET');
		res.send(200);
	});
	console.log('ALgo');
	
	app.get('/update', function (req, res) {
		console.log('MensajeGET');

	});

    
};
