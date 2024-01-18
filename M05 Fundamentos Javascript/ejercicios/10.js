function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  if (fecha.getTime()) {
    console.log("estoes fecha" + fecha);
    return true;
  }else{
    console.log("esto no es una fecha" + fecha);
    return false;
  }

}

module.exports = esFechaValida;