const houses = require('./db.json')
let globalId = 4

module.exports = {
    getHouses: (req, res) => res.status(200).send(houses),
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index,1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    }
}