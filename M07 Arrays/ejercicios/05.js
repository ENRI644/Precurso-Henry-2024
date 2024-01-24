function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    var aux = array[i];
    if (aux.length>5) {
      return aux;
    }
  }
}

module.exports = obtenerPrimerStringLargo;
