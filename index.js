const { DataSource } = require('typeorm')
const express = require('express')
const cors = require('cors')
const Demande = require('./entities/demande')
const reclamations = require('./entities/reclamations')
const remboursement = require('./entities/remboursement')
const transporteur = require('./entities/transporteur')
const user = require('./entities/user')
const { routesCreator, allOptions } = require('./routesCreator')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const connection = new DataSource({
    type: "postgres",
    host: "192.168.236.51",
    port: 5432,
    username: "EQ20",
    password: "EQ20",
    database: "EQ20",
    synchronize: true,
    logging: false,
    ssl: false,
    entities: [Demande, reclamations, remboursement, transporteur, user],
    subscribers: [],
    migrations: []
})

connection.initialize().then(async dataSource => {

    routesCreator(app, dataSource, allOptions);

    app.listen(8080, () => console.log("server started at 0.0.0.0:8080"))

}, err => console.log("Cannot connect:", err))
.catch(console.log)
