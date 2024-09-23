const lista = ['rj', 'cw ', 'poa ']
lista.push('sm', 'sc')//aloca no final do array
lista.pop()//remove o último elemento
lista.reverse()//troca a ordem reverte
lista.shift()//remove o primeiro

// console.log(lista.slice(1))
lista.sort()//lista alfabetica
lista.unshift('rs')//insere o elemento no inicio da lista
lista.indexOf('cw')

const listaTrimmed = lista.map(item => item.trim())
// const procurar = lista.map(item => item.find('poa'))
const filteredList = lista.filter(item => item.length >= 4);
const incluir = lista.includes('5')// retorna true or false se possui o elemento
const conca = lista.concat(['mg', 'sc']);// retorna uma nova array sem modificar a original
const virgula = lista.join(', ');  // adiciona todos os elementos do array em uma string, nesse caso separado por virgula
const letra = lista.every(city => city.length >= 2); //testa quando TODOS os elementos passam pelo teste implementado
const letraP = lista.some(city => city.startsWith('r'));  // testa quando pelo menos um elemento no array passa pelo teste implementado 
const index = lista.findIndex(city => city === 'poa '); 
//lista.fill('sp');//preenche TODOS os elementos do array com o valor passado
lista.copyWithin(1, 0); //copia o primeiro elemento para a segunda posição
const stringArray = Array.from('oi');//Cria uma nova instância de matriz a partir de uma array
Array.isArray(lista);//verifica se o valor é uma array
const stringList = lista.toString();//converte para string

console.log()

