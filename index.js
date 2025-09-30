// //ARRAYS
 //1
const arrayVacio = [];
//2
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
//3
const arrayNumerosPares = [0,2,4,6,8];
 //4
let arrayBidimensional = [
   [0,1,2],
   ["a", "b", "c"]
];

//FUNCIONES
//5
function suma (a,b){return a+b};
//6
function potenciacion (a,b){return a ** b};
//7
function separarPalabras(str) {
  return str.split(" ");
 }
//8
function repetirString (str, num){
 let stringSumada = "";
 for (let i = 0; i < num; i++) {
  stringSumada += str;
  }
 return stringSumada;
 }
 //9
function esPrimo (num){
  for (let i = 2; i < num / 2; i++) {
   if (num % i === 0) {
      return false;
   }
  }
  return true;
 }

// //MIX
// function ordenarArray (arr){
//    return arr.sort(function (a,b){
//     return b - a;
//    });
// }


// function obtenerPares(arr) {
//   return arr.filter((number) => number % 2 === 0);
// }

// //PROYECTO
// //ARRAYS
// let arrayNumerosNeg =[0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
// let holaMundo = ["Hola", "Mundo"];
// let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
// let arrayDeArrays =[
//   [756, "Lucía"],
//   [225, "Aroca"],
//   [298, "Oviedo"]
// ];
// //FUNCIONES

// function multiplicacion (a,b){
//   return a * b
// };
// function division (a,b){
//   return a/b
// };
// function esPar (num){
//   if(num % 2 === 0){return true},
//   else {return false};
// };

// let arrayFunciones = [
//   function suma (a,b) {return a + b},
//   function resta (a,b) {return a - b},
//   function multiplicacion (a,b) {return a * b};
// ]; //¿¿¿¿¿¿

// //MIX ARRAY FUNCIONES
// function ordenarArray2 (arr){
//   return arr.sort (function (a,b){return b - a})
// }

// function obtenerImpares (arr){
//   return arr.filter ((number)=> number % 2 !== 0);
// }

// function sumarArray (arr) {let sumaTotal = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumaTotal += arr[i];
//   }
//   return sumaTotal;
// }

// function multiplicarArray (arr) {
//   let multiplicacionTotal = 1;
//   for (i=0; i< arr.length; i++){
//     multiplicacionTotal *= arr[i];
//   }
//  return multiplicacionTotal
// };