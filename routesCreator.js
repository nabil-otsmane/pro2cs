const { EntitySchema } = require('typeorm')
const ControllerBuilder = require('./controllerBuilder')
const Demande = require('./entities/demande')
const reclamations = require('./entities/reclamations')
const remboursement = require('./entities/remboursement')
const transporteur = require('./entities/transporteur')
const user = require('./entities/user')

const allOptions = [
    {
        entity: Demande,
        endpoint: "demande",
        methods: ['get', 'getAll', 'post']
    },
    {
        entity: reclamations,
        endpoint: "reclamation",
        methods: ['get', 'getAll', 'post']
    },
    {
        entity: remboursement,
        endpoint: "remboursement",
        methods: ['get', 'getAll', 'post']
    },
    {
        entity: transporteur,
        endpoint: "transporteur",
        methods: ['get', 'getAll', 'post']
    },
    {
        entity: user,
        endpoint: "user",
        methods: ['get', 'getAll', 'post']
    },
]

function routesCreator(app, connection, options = []) {
    options.forEach(({entity, endpoint, methods}) => {
        if (entity === undefined)
            throw "entity option is required"

        if (!(entity instanceof EntitySchema))
            throw "entity option has to be of type EntitySchema";

        if (methods && !(methods instanceof Array))
            throw "methods option have to be an array";

        endpoint = endpoint || entity.options.name;

        const router = methods.reduce((a, b) => {
            if (b === "get")
                return a.addGetter();
            else if (b === "getAll")
                return a.addGetterAll();
            else if (b === "post")
                return a.addPoster();
            else
                throw "Unrecognized method: " + b;
        }, new ControllerBuilder(connection, entity)).build()

        app.use('/' + endpoint, router);

    })
}

module.exports = {
    routesCreator,
    allOptions
};