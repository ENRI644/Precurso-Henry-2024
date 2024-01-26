function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  var retorno = [];
  var pos=0;

  for (let i = 0; i < arrayOfStrings.length; i++) {
    var aux = arrayOfStrings[i];
    if(aux[0]==="a"){
      retorno[pos]=arrayOfStrings[i];
      pos++;
    }
  }
  return retorno;
}

module.exports = filter;
