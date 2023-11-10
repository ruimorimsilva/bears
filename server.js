var express = require('express');
var mongoose   = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://ruimorimsilva:mongodb@cluster0.ufqcoyn.mongodb.net/bear?retryWrites=true&w=majority'); // connect to our database

var app = express();  //DEFINE ONDE IREMOS APLICAR O EXPRESS
var bodyParser = require('body-parser');

// CONFIGURAR A APP PARA USAR O bodyParser()
app.use(bodyParser.urlencoded({extended: true})); // Usamos o middleware express.urlencoded() para interpretar os dados enviados por formulários no formato urlencoded. Isso nos permite receber e processar os dados enviados pelos clientes da API ao fazerem requisições usando os métodos POST ou PUT com dados urlencoded.
app.use(bodyParser.json());

var port = process.env.PORT || 8080;// DEFINE A NOSSA PORTA

//REGISTAR AS NOSSA ROUTES
var bearRoutes = require('./app/routes/routeBears');
app.use('/api/bears', bearRoutes);

var carRoutes = require('./app/routes/routeCars');
app.use('/api/cars', carRoutes);

app.listen(port);
console.log('Oh crl' + port);

//PODES TESTAR -> node server.js -> http://localhost:8080/api)
