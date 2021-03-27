const mysql = require('mysql2/promise');

let connection = null;

module.exports = {
	connect: async () => {
		connection = await mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '1q2w3e4r',
			database: 'news'
		});
	},
	getConnection: () => connection
};