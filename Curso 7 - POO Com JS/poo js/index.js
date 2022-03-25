import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

//#region Processo Conta1
const cliente1 = new Cliente('Ricardo', 11122233344);
const conta1 = new ContaCorrente(1000, cliente1);

/*cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233344;
conta1.cliente = cliente1;
conta1.agencia = 1001;*/
console.log(conta1);

//A alteração surte efeito dentro de conta1
cliente1.nome = 'Luke';
//#endregion

//#region Processo Conta1
const cliente2 = new Cliente('Rey', 11122233344);
const conta2 = new ContaCorrente(1001, cliente2);

/*cliente2.nome = 'Rey';
cliente2.cpf = 11122233344;
conta2.cliente = cliente2;
conta2.agencia = 1001;*/

console.log(conta2);
//#endregion

//#region Depositando
console.log('\n--- DEPOSITANDO ---\n');
conta1.depositar(500)
conta2.depositar(100)
console.log(conta1,conta2);
//#endregion

//#region Sacando
console.log('\n--- SACANDO ---\n');
const valorSacado1 = conta1.sacar(10);
const valorSacado2 = conta2.sacar(10);
console.log(valorSacado1, valorSacado2);
//#endregion

//#region Transferindo
console.log('\n--- TRANSFERINDO ---\n');
let valorTransferencia = 220;
console.log(conta1,conta2);
//Tipos primitivos são sempre passados como um valor, enquanto tipos não primitivos sempre são passados por referência.
conta1.transferir(valorTransferencia, conta2);
console.log(conta1,conta2);
//#endregion