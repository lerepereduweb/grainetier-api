exports.options = {
    definition: {
        openapi: "3.0.3", // present supported openapi version
        info: {
            title: "API Aidez-Nous 83.", 
            description: "API de l'association de protection animale Aidez-Nous 83.", //  desc.
            version: "1.0.0", 
            contact: {
                name: "Le Repère du Web", 
                email: "lerepereduweb@protonmail.com", 
                url: "https://aideznous83.alwaysdata.net/api/v1", 
            },
            licence: {
                name: "API réalisée par : Le Repère du Web",
                url: "https://aideznous83.alwaysdata.net/api/v1"
            }
        },
        servers: [
            {
                url: 'http://localhost:8100/api/v1'
            }
        ]
    },
    apis: ["./src/routes/*.js"]    
};