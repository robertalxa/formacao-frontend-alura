import {Cliente} from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Rey', 10000, 12345678900);
diretor.cadastrarSenha('123456789');
const gerente = new Gerente('Luke', 5000, 12345678901);
gerente.cadastrarSenha('123');

const estaLogadoD = SistemAutenticacao.login(diretor, '123456789');
const estaLogadoG = SistemAutenticacao.login(gerente, '123');
console.log(estaLogadoD, estaLogadoG);

const cliente = new Cliente('Beto', 40653949880, "456");
const estaLogadoC = SistemAutenticacao.login(cliente, '456');
console.log(estaLogadoC);














/*import {ContaCorrente} from './Contas/ContaCorrente.js';
import {ContaPoupanca} from './Contas/ContaPoupanca.js';
import { ContaSalario } from './Contas/ContaSalario.js';

const cliente1 = new Cliente('Wardell', 11122233344);
const conta1 = new ContaCorrente(0, cliente1, 1001);

conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1000);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);
console.log(contaSalario);*/
