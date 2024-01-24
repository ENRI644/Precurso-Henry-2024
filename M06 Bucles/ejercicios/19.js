function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  var i = 1;
  var acu = 0;

  while (i<=n) {
    acu = acu + i;
    i++;
  }
    return acu;
}

module.exports = sumarHastaN;
