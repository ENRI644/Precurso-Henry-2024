function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:

  if (array.length>0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
        return i;
      }else if (i == (array.length-1)) return -1
    }
  }else return -1;
  
}

module.exports = encontrarElemento;
