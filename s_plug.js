const scrape = require('./index.js');

const express = require('express');

const app = express();

const port = 80;

var router = app.Router();
router.post('/', function(req, res) {
var sent_data = req.body;
	
const product = scrape(sent_data.ali_id);

product.then(rres => {
	res.send(rres);
});	
});	

router.get('/', function(req, res) {
	res.sendFile('test.html');
});

app.listen(port, function() {
 console.log('Server listening on http://localhost:' + port);
});
