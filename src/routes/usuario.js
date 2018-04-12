//rutas para la entidad usuario
const Express = require('express');
const Router = Express.Router();
const Usuario = require('../models/usuario');
const Axios = require('axios');

//esto debe ir en algun config
var URL = "http://localhost:5000"

Router.get('/combo', (req, res) => {

   //res.json({ mensaje: 'éxito'})

  Axios.get(URL + '/usuarios/combo')
    .then(function(response) {
      res.send(response.data);
    })
    .catch(function(err) {
      res.send(err.response.data);
      // console.log(err.response.data);
    })

});

module.exports = Router;
