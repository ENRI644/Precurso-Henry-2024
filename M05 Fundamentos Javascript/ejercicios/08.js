function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:

  console.log("1. " + numero);

  if (numero - Math.ceil(numero) == 0) {
    console.log("2. " + true)
    return true;
  }else{
    console.log("2. " + false)
    return false;
  }

}

module.exports = esNumeroEntero;