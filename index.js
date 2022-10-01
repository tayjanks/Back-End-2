const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getHouses,
    deleteHouse,
    createHouse,
} = require ('./controller')

app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)


app.listen(4004, () => console.log(`running on 4004`))
