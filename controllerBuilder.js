const { Router } = require('express')

function ControllerBuilder(connection, entity) {

    if (!(this instanceof ControllerBuilder))
        return new ControllerBuilder(connection, entity)

    this.entityRepo = connection.getRepository(entity);
    this.entity = entity
    this.router = Router()
}

ControllerBuilder.prototype.addGetter = function () {
    this.router.get('/:id', (req, res) => {
        this.entityRepo.findOne({ where: {id: req.params.id} })
            .then(data => {
                res.send(data)
            })
            .catch(err => console.log(err))
    });

    return this
}

ControllerBuilder.prototype.addGetterAll = function () {
    this.router.get('/', (req, res) => {
        this.entityRepo.find()
            .then(data => {
                res.send(data)
            })
            .catch(console.log)
    })

    return this
}

ControllerBuilder.prototype.addPoster = function () {
    this.router.post('/', (req, res) => {
        const data = this.entityRepo.create(req.body);

        this.entityRepo.save(data)
            .then(data => res.send({ status: "success", data }))
            .catch(console.log)
    })

    return this
}

ControllerBuilder.prototype.build = function () {
    return this.router
}

module.exports = ControllerBuilder