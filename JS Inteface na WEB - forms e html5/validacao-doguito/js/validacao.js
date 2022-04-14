export function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    } else{
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemErro(tipoDeInput, input);
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const msgsErro = {
    nome:{
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email:{
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 e 12 caracteres, uma letra minuscula, uma maiúscula e um número'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior de 18 anos para se cadastrar'
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
}

function mostraMensagemErro(tipoDeInput, input){
    let mensagem = '';

    tiposDeErro.forEach(erro=>{
        if(input.validity[erro]){
            mensagem = msgsErro[tipoDeInput][erro];
        }
    })

    return mensagem;
}

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if(!maior18(dataRecebida)) mensagem = 'Você deve ser maior de 18 anos para se cadastrar';

    input.setCustomValidity(mensagem);
}

function maior18(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear()+18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual;
}