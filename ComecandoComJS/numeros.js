var x = 456e5; // 45600000
console.log(x);

var y = 123e-6; // 0.000123
console.log(y);
console.log(y.toFixed(2)); // arredonda para 2 casas decimais

var z = 99999999999999999999; //overflow capaz de armazenar até 15 digitos
console.log(z);

var w = 0.99999999999999999999; 
console.log(w);

var a = 0x100;
console.log(a);

var a = 0xFFF; //hexa
console.log(a);

var a = 07777; //octal
console.log("binario: " + a.toString(2));
console.log("hexadecimal: " + a.toString(16));
console.log(a.toExponential(2));
console.log((3.356).toFixed(2))
console.log((3.356).toPrecision(1));
console.log((3.356).toPrecision(2));
console.log((3.356).toPrecision(3));
