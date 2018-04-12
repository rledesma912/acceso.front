
//requires
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const UsuariosRoutes = require('./routes/usuario');

// db
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/controldeacceso')
//   .then( () => console.log('conectado!'))
//   .catch( err => console.log('error al conectar: ' + err ));

// settings
app.set('port', process.env.PORT || 3000 );

// middlewares
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/usuarios', UsuariosRoutes);


// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('server escuchando en puerto ' + app.get('port'));
});
