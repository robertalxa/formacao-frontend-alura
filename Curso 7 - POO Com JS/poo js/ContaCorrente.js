import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroContas = 0;
    agencia;
    _cliente;
    
    #saldo = 0; //# faz o atributo ser privado realmente
    _saldo = 0;//Com underline é uma convenção

    set cliente (novoValor){
        if(novoValor instanceof Cliente) this._cliente = novoValor;
    }

    get cliente (){
        return this._cliente;
    }

    get saldo(){
        return this.saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, contaDestino){
        const valorSacado = this.sacar(valor);
        if(valorSacado === 0) return;
        contaDestino.depositar(valorSacado);
    }
}