const mysql = require('mysql')

const db  = mysql.createConnection({
	host: 'csc648-team03.cnzsqesnuc2l.us-east-2.rds.amazonaws.com',
	user: 'admin',
	password: 'RLa2OAk0bCqzlweqFUH1',
	database: 'csc648-team03'
})

module.exports = db
