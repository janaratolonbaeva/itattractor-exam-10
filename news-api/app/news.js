const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const config = require('../config');
const mysqlDb = require('../mysqlDb');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, config.uploadPath);
	},
	filename: (req, file, cb) => {
		cb(null, path.extname(file.originalname));
	},
});

const upload = multer({storage});

router.get('/', async (req, res) => {
	const [news] = await mysqlDb.getConnection().query('SELECT * FROM news')
	res.send(news);
});

router.get('/news/:id', async (req, res) => {
	const [news] = await mysqlDb.getConnection().query('SELECT * FROM news WHERE id = ?', [req.params.id]);
	const post = news[0];
	res.send(post);
});

router.post('/', upload.single('image'), async (req, res) => {
	const post = req.body;

	if (req.file) {
		post.image = req.file.filename;
	}

	const result = await mysqlDb.getConnection(
		'INSERT INTO news (title, description, image) VALUES (?, ?, ?)',
		[post.title, post.description, post.image]
	);

	console.log(result);

	res.send(post);
});

module.exports = router;