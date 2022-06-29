const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
    name: "User",
    columns: {
        id: {
            primary: true,
            type: "smallint",
            generated: true
        },
        username: {
            type: "text"
        },
        pwd: {
            type: "text"
        }
    }
})