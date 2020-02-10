const { mysqldb } = require('../connections')

module.exports = {
    createmovcat: (req, res) => {
        var movcat = req.body

        var sql = `INSERT INTO movcat SET ?`

        mysqldb.query(sql, movcat, (err, results) => {
            if (err) return res.status(500).send(err)
            res.status(200).send(results)
        })
    },

    getmovcat: (req, res) => {
        var sql = `SELECT m.nama AS nama_movie, c.nama AS nama_category FROM movcat mc 
        JOIN movies m ON mc.idmovies = m.idmovies 
        JOIN categories c ON mc.idcategories = c.idcategories`

        mysqldb.query(sql, (err, results) => {
            if (err) return res.status(500).send(err)
            res.status(200).send(results)
        })
    },

    deletemovcat: (req, res) => {
        var sql = `DELETE FROM movcat 
        WHERE idmovcat = ${req.params.id}`

        mysqldb.query(sql, (err, results) => {
            if (err) return res.status(500).send(err)
            res.status(200).send(results)
        })
    }
}