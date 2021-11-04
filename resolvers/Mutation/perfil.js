const { usuarios, perfis, next } = require('../../data/db')

module.exports = {
    novoPerfil(_, { dados }){
        if(perfis.some(p => p.nome === dados.nome)){
            throw new Error('Perfil já existe')
        }

        const novo_perfil = {
            id: next('p'),
            nome: dados.nome
        }

        perfis.push(novo_perfil)
        return novo_perfil
    },
    excluirPerfil(_, { dados } ){
        let index = -1
        
        if(dados.id){
            index = perfis.findIndex(p => p.id === dados.id )
        }else if(dados.nome){
            index = perfis.findIndex(p => p.nome === dados.nome )
        }else{
            throw new Error('Parametros errados')
        }

        if(index > 0){
            let perfil_excluido = perfis.splice(index, 1)
            return perfil_excluido ? perfil_excluido[0] : null
        }else {
            return null
        }
    },                                                  
    alterarPerfil(_, { filtro, dados }){
        let index = -1
        if(filtro.id){
            if(!perfis.some(p => p.id === filtro.id)) return null
            index = perfis.findIndex(p => p.id === filtro.id)
        }else if(filtro.nome){
            if(!perfis.some(p => p.nome === filtro.nome)) return null
            index = perfis.findIndex(p => p.nome === filtro.nome)
        }

        perfis[index] = {
            ...perfis[index],
            ...{
                nome: dados.nome
            }
        }

        return perfis[index]
    }
}