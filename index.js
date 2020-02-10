const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 8888

// const db = require('./connections/index')
// db.connect(err => {
//     if (err) throw err
//     console.log('MySQL Connected .......');
// })

app.use(bodyparser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('<h1>Ini Home Page</h1>')
})

const { movierouter, categoryrouter, movcatrouter } = require('./routes')

app.use('/movie', movierouter)
app.use('/category', categoryrouter)
app.use('/movcat', movcatrouter)

app.listen(PORT, () => console.log(`Connection active on port: ${PORT}`))