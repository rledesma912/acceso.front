//rutas para la entidad usuario
const Express = require('express');
const Router = Express.Router();
const Usuario = require('../models/usuario');

import UsuarioSrv from '../services/UsuarioService';

// Router.get('/combo', (req, res) => {
//   // res.json({    mensaje: 'éxito'  })
//   //res.json(UsuarioSrv.register());
//   let papa = async () => {
//     console.log(UsuarioSrv.register());
//   };
//
//   papa();
//
// });

Router.get('/combo', (req, res, next) => {

  UsuarioSrv.register().then(data => {
    console.log('2');
    res.json(data);
  })

})

module.exports = Router;
