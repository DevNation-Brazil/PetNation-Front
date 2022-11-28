export function validacaoNome(nome: string) {
    var regexp = /^[^0-9]+$/;    
    if (nome.length >= 16 || !nome.match(regexp)) {
        return { valido: false, texto: 'Nome deve conter até 15 caracteres sem números.' }
    } else {
        return { valido: true, texto: '' }
    }
}

export function validacaoEmail(email: string) {
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     
    if (!email.match(emaiPattern)) {
        return { valido: false, texto: 'Digite um email válido.' }
    } else {
        return { valido: true, texto: '' }
    }
}

export function validacaoPassword(password: string) {
    var regexp = /\s/;
    if (password.length < 8 || password.match(regexp)) {
        return { valido: false, texto: 'Sua senha deve conter no mínimo 8 caracteres sem espaços.' }
    } else {
        return { valido: true, texto: '' }
    }
}

