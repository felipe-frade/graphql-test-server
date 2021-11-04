const usuario = require('./usuario.js')
const perfil = require('./perfil.js')

module.exports = {
    ...usuario,
    ...perfil
}