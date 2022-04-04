const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
];

/*
Exercícios propostos

- Empresas criadas depois dos anos 2000.
- O nome de cada empresa e de seu CEO.
- O valor de todas as empresas somadas.
*/


//#region -- Minhas soluções pessoais --

//#region Ex 1

//Com MAP (retorna os valores falsos, ou seja, além do que eu quero trás também as respostas falsas);
console.log(empresas.map(reg => { return reg.anoDeCriacao > 2000 ? reg : null }));
//Com FILTER (retorna somente valores verdadeiros);
console.log(empresas.filter(reg => { return reg.anoDeCriacao > 2000 ? reg : null }));

//#endregion

//#region Ex2 

console.log(empresas.map(empresa => {
    return `${empresa.nome} - ${empresa.CEO}`
}));

//#endregion

//#region Ex3
console.log(empresas.reduce((total, emp) => { return total + emp.valorDeMercado }, 0));
//#endregion

//#endregion

//#region Solução formal ALURA

//#region EX1
const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));
console.log(anoDeCriacao);
//#endregion

//#region EX2
const exibeInformacoes = empresas.map(empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.CEO}`);
console.log(exibeInformacoes);
//#endregion

//#region EX3
const total = empresas.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valorDeMercado);
}, 0);
console.log(total);
//#endregion

//#endregion