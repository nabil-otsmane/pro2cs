const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
    name: "Remboursement",
    columns: {
        id: {
            primary: true,
            type: "smallint",
            generated: true
        },
        NumRemb: {
            type: 'int'
        },
        nbfact: {
            type: 'int'
        },
        date: {
            type: "date",
            default: "NOW()"
        },
    }
})