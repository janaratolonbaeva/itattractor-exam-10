const express = require('express');
const cors = require('cors');
const mysqlDb = require('./mysqlDb');
const news = require('./app/news');
const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use(news);

const run = async () => {
	await mysqlDb.connect();

	app.listen(port, () => {
		console.log(`Server started on ${port} port!`);
	});
};

run().catch(console.error);
