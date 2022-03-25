import { Cliente } from "./Cliente.js";

//Pode ser considerada uma classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta) throw new Error('Você não deveria instanciar um objeto do tipo Conta, pois essa é uma classe abstrata');
    }

    set cliente (novoValor){
        if(novoValor instanceof Cliente) this._cliente = novoValor;
    }

    get cliente (){
        return this._cliente;
    }

    get saldo(){
        return this.saldo;
    }

    //método abstrato
    sacar(valor){
        throw new Error("O método sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
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