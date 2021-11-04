let id = 1
let id_p = 1

function next(t = ''){
    if(t == 'p'){ return id_p++ }
    return id++
}

const perfis = [
    { id: next('p'), nome: 'comum' },
    { id: next('p'), nome: 'administrador' }
]

const usuarios = [{
    id: next(),
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: next(),
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: next(),
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis, next }