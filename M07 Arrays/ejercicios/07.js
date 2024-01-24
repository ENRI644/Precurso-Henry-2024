function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var aux = array;

  for (let i = 0; i < array.length; i++) {
    aux[i] = array[i].toUpperCase();
  }
  return aux;
}
module.exports = convertirStringAMayusculas;
