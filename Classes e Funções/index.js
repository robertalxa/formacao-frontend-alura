/*const Livro = {
    nome: 'React Native',
    editora: 'Casa do Código',
    paginas: 185,
    anunciar: function(){console.log('A alura indica o livro' + this.nome + '!')},
}

Livro.anunciar();
*/
// Função

/*const Livro = function(nome, editora, paginas){
    gNome = nome;
    gEditora = editora;
    gPaginas = paginas;

    this.getNome = function(){
        return gNome
    }
    
    this.getEditora = function(){
        return gEditora
    }
    
    this.getPaginas = function(){
        return gPaginas
    }
}

const GraphQL = new Livro('GraphQL', 'Casa do Código', 143);
console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());*/

// exemplo acima escrito em classes

class Livro{
    constructor(nome, editora, paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }
    anunciarTitulo(){
        console.log(`Título ${this.nome}`);
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`);
    }
}

const NodeJS = new Livro('Primeiros passos com NodeJS','Casa do Código', 150);
NodeJS.anunciarTitulo();
NodeJS.descreverTitulo();

console.log('A classe Livro é do tipo ' + typeof Livro);
/*
Sobre classes:
Não são hoisted -> Não consigo chamar/instanciar uma classe sem antes declarar ela, ou seja se eu colocasse a instanciação antes da declaração da classe não funcionaria
Deixa o código mais legível
*/

//Herança 

class LivroColecao extends Livro{
    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }
    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`);
    }
}

const LogicaDeProgramacao = new LivroColecao('Lógica de Programação', 'Comece a Programar');
LogicaDeProgramacao.descreverColecao();