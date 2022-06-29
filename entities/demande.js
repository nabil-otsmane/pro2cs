const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
    name: "Demande",
    columns: {
        id: {
            primary: true,
            type: "smallint",
            generated: true
        },
        NSS: {
            type: "text"
        },
        Nom: {
            type: "text"
        },
        Prenom: {
            type: "text"
        },
        nomOperateur: {
            type: "text"
        },
        Adrss_soin: {
            type: "text"
        },
        Adrss_Ass: {
            type: "text"
        },
        date: {
            type: "date",
            default: "NOW()"
        },
        etat: {
            type: "text"
        },
        cat_car: {
            type: "text"
        },
        detail: {
            type: "text"
        }
    }
})