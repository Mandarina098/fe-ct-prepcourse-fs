/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   return string
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   let result= x + y 
   return result
    
}

function resta(x, y) {
  let result = x - y
  return result
}

function divide(x, y) {
 let divide = x/y
 return divide
}

function multiplica(x, y) {
  let multiplica= x * y
  return multiplica
}

function obtenerResto(x, y) {
  let resto = (x % y);

  return resto ;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
