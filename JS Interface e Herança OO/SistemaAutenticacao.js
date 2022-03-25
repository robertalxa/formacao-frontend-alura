/*
Eu não tenho que definir o tipo do usuario, só me interessa se ele tem a propriedade que eu quero usar
DuckTyping
*/

export class SistemAutenticacao{
    //isso aqui virou uma interface
    static login(usuario, senha){
        if(!SistemAutenticacao.ehAutenticavel(usuario)) return false;
        return usuario.autenticar(senha);
    }

    static ehAutenticavel(usuario){
        return "autenticar" in usuario && usuario.autenticar instanceof Function;
    }
}