/*
var pessoa = {
	idade: 15,
	nome: 'josé'
};

var p = {
	pes: pessoa,
	id: 'identificador',
	imprimir: function(){
		return pessoa.nome;
	}
};

console.log(pessoa);
console.log(p);
console.log(p.imprimir());
*/

console.log('Reversing an array');

function reverseArray(array) {
	var newArr = array.slice();
	return newArr.reverse();
}

function reverseArrayInPlace(array) {
	array.reverse();
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]