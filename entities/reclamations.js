const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
    name: "Reclamation",
    columns: {
        id: {
            primary: true,
            type: "smallint",
            generated: true
        },
        email: {
            type: "text"
        },
        nom: {
            type: "text"
        },
        Message: {
            type: "text"
        },
    }
})