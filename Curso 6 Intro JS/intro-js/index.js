let listaDestinos = new Array('Salvador', 'São Paulo', 'Rio de Janeiro');

listaDestinos.push('Curitiba');
console.log(listaDestinos);

listaDestinos.splice(1,1);
console.log(listaDestinos);


listaDestinos.shift(); //Remove primeira posição
listaDestinos.pop(); //Remove última posição

listaDestinos.unshift('Som do pálio'); //Adiciona na primeira posição

let copiaListaDestino = listaDestinos.slice();

console.log(listaDestinos, copiaListaDestino);

copiaListaDestino.push('Triângulo das bermudas')

console.log(listaDestinos, copiaListaDestino);

