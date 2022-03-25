//Template Literal
const palavra = 'interpolada'
console.log(`Minha template literal ${palavra}`);

//#region Tag


minhaFunction = (texto) => {
    console.log(texto);
}

//Chamada tradicional de uma função
minhaFunction('Texto como parâmetro');
//Chamada utilizando Tagged Template Literals
minhaFunction`texto como parametro da tagged teemplate`
//As duas chamadas NÃO são equivalentes, pois a segunda chamada produz uma array


minhaFunction2 = (arrayDeStrings, palavra2) =>{
    console.log(`${arrayDeStrings[0]}${palavra2}${arrayDeStrings[1]}`);
}

const palavra2 = 'alura';

minhaFunction2`Eu estudo na ${palavra2} todos os dias`;
//Quando utilizamos ${} no meio de uma string, essa string é quebrada ao meio, aí é gerado um array com o conteúdo da string que não seja oq tem dentro do ${}, ou seja os valores interpolados.
//Analogamente, todos os valores interpolados são passados um a um após o Array, respeitando a ordem em que aparecem na Template Literals

//#region Vamos criar um método que irá destacar uma frase em negrito (tag strong) tudo que for passado através de ${}
function negrito(arrayStrings, ...valores){
    return arrayStrings.reduce((acumulador, string, i)=>{
        return `${acumulador}${string}${valores[i] ? `<strong>${valores[i]}</strong>`:''}`
    }, '');
}

const nome = 'Paulo Scalercio';
const redeSocial = '@PauloScalercio';

console.log(negrito`${nome} trabalha na Caelum/Alura como desenvolvedor e instrutor e você pode encontrá-lo nas redes sociais procurando por ${redeSocial}`);
//#endregion


//#endregion