var contador = 0;

var tick = (function() {
var contador = 0;
return function() {
	contador = contador + 1;
	console.log(contador);
}
})();
contador = 10;
tick();
tick();
tick();
tick();

