const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'ujianbackend',
    port: '3306',
})

module.exports = {
    mysqldb: db
}