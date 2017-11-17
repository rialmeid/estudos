var array = "Ricardo Lucas de Almeida";

array = array.split(" ");

console.log(array);
console.log("toString(): " + array.toString());
console.log("join(): " + array.join(' | '));

array.push("Sansa");
array.unshift("Sansa");

console.log("push and unshift: " + array);

var elemento = array.pop();
console.log("pop: " + elemento);
elemento = array.shift();
console.log("shift: " + elemento);
console.log("array: " + array);

array[1] = "jon snow";
console.log("atribuindo direto na posicao [1]: " + array);

var slice = array.slice(1, 2);
console.log("slice: " + slice);

console.log("array antes: " + array);
array.splice(1, 2, "Arya", "Sansa"); // pos, quantidade elementos, novos elementos
console.log("y: " + array);

array.splice(3, 1); // remove 01 elemento a contar da posição 3
console.log("z: " + array);

array = array.concat(slice); //
console.log("w: " + array);