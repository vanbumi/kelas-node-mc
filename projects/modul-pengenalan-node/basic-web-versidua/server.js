const express = require('express');
const app = express();


app.get('/', function(req, res) {
	res.json({ message: 'index' });
});

app.get('/products', function(req, res){
	res.json({ name_product : 'T-Shirt Short' });
});

app.get('/:name', (req, res) => {
	res.json({ name_product: req.params.name});
});

const port = process.env.PORT || 3000;
app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log(`Server running on port ${port}`);
	}
});

