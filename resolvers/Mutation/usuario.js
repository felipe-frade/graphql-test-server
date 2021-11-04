const { usuarios, next } = require('../../data/db')

function find_user(filtro){
    if(!filtro) return -1
    const { id, email } = filtro
    if(id){
        return usuarios.findIndex(u => u.id === id)
    }else if(email){
        return usuarios.findIndex(u => u.email === email)
    }else{
        return -1
    }
}

module.exports = {
    novoUsuario(_, { dados }){
        const emailExiste = usuarios.some(u => u.email === dados.email)
        
        if(emailExiste){
            throw new Error('Email existe')
        }

        const novo = {
            id: next(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }
        usuarios.push(novo)
        return novo
    },
    deleteUser(_, { filtro } ){
        const i = find_user(filtro)
        
        if(i < 0){
            throw new Error('Usuario não existe')
        }else{
            const excluidos = usuarios.splice(i, 1)
            return excluidos ? excluidos[0] : null
        }
    },
    alterarUsuario(_, { filtro, dados }){
        const i = find_user(filtro)

        if(i < 0) return null

        const usuario = {
            ...usuarios[i],
            ...dados, 
        }

        usuarios.splice(i, 1, usuario)

        return usuario
    }
}