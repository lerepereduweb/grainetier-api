const express = require("express");
const cors = require('cors');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const docOptions = require('./src/docs/swaggerInfo');

const PORT_API = process.env.PORT_API;
const URL_API = process.env.URL_API;

const app = express();
const corsOptions = {
    //origin: "https://aideznous83.alwaysdata.net"
    origin: "http://localhost:4200"
};

const specs = swaggerJsDoc(docOptions.options);

//Middlewares
app.use(`${URL_API}/api-docs`, swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Router
const router = require('./src/routes/frontRouter');
app.use(`${URL_API}`, router);
//const routerback = require('./src/routes/backRouter');
//app.use(`${URL_API}`, routerback);

//Test API
app.get(`${URL_API}`, (req, res) => {
    try {
        res.json({message : 'API REST de l\'application "Le Grainetier"'});
    } 
    catch (err) {
        throw new Error(err.message)
    }
});

//Server
app.listen(PORT_API, () => {
    try {
        console.log(`Server started on port : ${PORT_API}`);
    } 
    catch (err) {
        throw new Error(err.message)
    }    
});
