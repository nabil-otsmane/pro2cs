const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
    name: "Transporteur",
    columns: {
        id: {
            primary: true,
            type: "smallint",
            generated: true
        },
        pwd: {
            type: "text"
        },
        depl: {
            type: 'int',
            array: true
        },
    }
})