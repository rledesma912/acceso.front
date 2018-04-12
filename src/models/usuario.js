const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;

const Usuario = new SCHEMA({
  id: {
    type: String
  },
  login: {
    type: String
  },
  nombre: {
    type: String
  }
}, {
  collection: 'usuarios'
});

module.exports = MONGOOSE.model('Usuario', Usuario );
