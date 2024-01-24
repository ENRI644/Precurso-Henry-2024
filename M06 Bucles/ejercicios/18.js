function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var menor = 0;
  var mayor = 0;
  var acu = 1;
  if (a < b) {
    menor = a;
    mayor = b;
  }else{
    menor = b;
    mayor = a;
  }
  for (let i = mayor; i >= menor; i--) {
    console.log(acu);
    acu = acu*i;
  }
  return Math.abs(acu);
}

module.exports = productoEntreNúmeros;