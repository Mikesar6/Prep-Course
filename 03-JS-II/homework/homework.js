// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
    if (x > y) {
      return x;
     } else if (x === y) {
        return x;
      } else (y > x) 
      return y
  }

function mayoriaDeEdad(edad) {
    if (edad >= 18) {
    return 'Allowed'
  }   if (edad < 18) {
      return 'Not allowed';
      }
}
  
function conection(status) {
  if (status == 1) {
      return 'Online'
  } else if (status == 2) {
      return 'Away'
  } else return 'Offline'
 }

function saludo(idioma) {
    if (idioma == 'aleman') {
    return 'Guten Tag!'
    } else if (idioma == 'mandarin') {
      return 'Ni Hao!'
      } else if (idioma == 'ingles') {
        return 'Hello!';
        } else { 
            return 'Hola!'
        }
   }

function colors(color) {
    switch (color) {
        case 'blue':
            return 'This is blue'
            break;
        case 'red':
            return 'This is red'
            break; 
        case 'green':
            return'This is green'
            break;
        case 'orange':
            return 'This is orange'
            break;    
        default: return 'Color not found'
            break;
    }
  }

function esDiezOCinco(numero) {
    if (numero == 5 || numero == 10) {
        return true;
    } else {
        return false
    } 
  }

function estaEnRango(numero) {
    if (numero > 20 && numero < 50) {
        return true;
    } else {
        return false
    }
  }

function esEntero(numero) {
    return numero % 1 === 0
 } 

function fizzBuzz(numero) {
  if (numero % 5 === 0 && numero % 3 === 0) {
  return 'fizzbuzz'
  } else if (numero % 3 === 0) {
        return 'fizz'
    } else if (numero % 5 === 0) {
        return 'buzz'
    } else {
        return numero
    }
   }

function operadoresLogicos(num1, num2, num3) {
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return ('Error');
  } if (num1 < 0 || num2 < 0 || num3 < 0) {
    return 'Hay negativos';
  } if (num1 > num2 && num1 > num3 && num1 > 0) {
    return ('Número 1 es mayor y positivo');
  } if (num3 > num1 && num3 > num2) {
    return (num3 + 1);
    } else return false
}

function esPrimo(numero) {
    if (numero < 2) {
        return false;
    } if (numero === 2) {
        return true;
     } for (let i = 2 ; i < numero; i++) {
        if (numero % i === 0) {
        return false;
        }   
     } return true
    }

function esVerdadero(valor){
    if (valor < 1) {
        return 'Soy falso'
    } else {
        return 'Soy verdadero'
        }
    }

function tablaDelSeis(){
      let arraytablaseis = []
      for (let i = 0; i < 11; i++) {
          arraytablaseis.push (6 * i)
      }   return arraytablaseis 
    }

function tieneTresDigitos(numero){
      if (numero >= 100 && numero <= 999) {
      return true
      } else {
          return false
      }  
   }

   function doWhile(numero) {
    var a = numero;
    var i = 0;
       do { 
           i = i + 1,
           a = a + 5
           } 
           while (i < 8)
           return a;
     }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
