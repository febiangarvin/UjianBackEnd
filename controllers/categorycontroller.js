const { mysqldb } = require('../connections')

module.exports = {
    createcategory: (req, res) => {
        let category = req.body

        let sql = `INSERT INTO categories SET ?`

        mysqldb.query(sql, category, (err, results) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(results)
        })
    },

    getcategory: (req, res) => {
        let sql = 'SELECT * FROM categories'

        mysqldb.query(sql, (err, results) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(results)
        })
    },

    editcategory: (req, res) => {
        let update = req.body

        let sql = `UPDATE categories SET ? WHERE idcategories = ${req.params.id}`

        mysqldb.query(sql, update, (err, results) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(results)
        })
    },

    deletecategory: (req, res) => {
        let sql = `DELETE FROM categories WHERE idcategories = ${req.params.id};`

        mysqldb.query(sql, (err, results) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(results)
        })
    },
}