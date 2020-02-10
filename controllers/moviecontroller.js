const { mysqldb } = require('../connections')

module.exports = {
    createmovie: (req, res) => {
        let movie = req.body

        let sql = `INSERT INTO movies SET ?`

        mysqldb.query(sql, movie, (err, results) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(results)
        })
    },

    getmovie: (req, res) => {
        let sql = 'SELECT * FROM movies'

        mysqldb.query(sql, (err, results) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(results)
        })
    },

    editmovie: (req, res) => {
        let update = req.body

        let sql = `UPDATE movies SET ? WHERE idmovies = ${req.params.id}`

        mysqldb.query(sql, update, (err, results) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(results)
        })
    },

    deletemovie: (req, res) => {
        let sql = `DELETE FROM movies WHERE idmovies = ${req.params.id};`

        mysqldb.query(sql, (err, results) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(results)
        })
    },

}