const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();


console.log(process.env);

//Crear el servidor de express
const app = express();

//CORS
app.use(cors())

//base de datos
dbConnection();

//Directorio Public
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


//TODO: auth // crear, login, renew
//TODO: CRUD: Eventos


//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});


