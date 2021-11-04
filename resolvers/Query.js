const { usuarios, perfis } = require('../data/db')

module.exports = {
    usuarios() {
        console.log("teste")
        return usuarios
    },
    usuario(_, { id }) {
        const sels = usuarios
            .filter(u => u.id === id)
        return sels ? sels[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const sels = perfis
            .filter(p => p.id === id)
        return sels ? sels[0] : null 
    },
    objeto_info(_, { objeto_nome }){
        if(objeto_nome == 'usuarios'){
            return Object.keys(usuarios[0])
        }else if(objeto_nome == 'perfis'){
            return Object.keys(perfis[0])
        }else{
            return ['objeto não existe']
        }
    }
}