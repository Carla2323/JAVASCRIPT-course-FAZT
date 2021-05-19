//Lenguaje de programación que funciona en el navegador, soporta múltiples paradigmas
//La idea era extender la funcionalidad que tenian las páginas en ese entonces 
//Es un lenguaje abierto y estándar para agregar interactividad a las páginas web
//Javascript esta actualizandose constantemente

//TIPOS DE DATOS
//string: "Hello world"/ significa cadena y se llama si porque es una cadena de caracteres.Se puede escribir entre comillas dobles "" o comillas simples '' y eso depende del ingles. Un ejemplo: si queremos escribir I am pero abreviado (I'm), no podriamos usar comillas simples porque quedaria asi 'I'm' y estaría mal. tiene que ser asi "I'm"
//number: 10000 -2.3 etc/
//boulean o tipo de dato lógico: true o false /
//array:['martin', 'lucia', 'alfredo']/ = arreglos. es una lista, se escribe entre [] y los nombres de adentro entre comillas. La lista puede estar compuesta por strings, boulean, numbers, etc
//object: representación abstracta de un objeto en la vida real. Podemos crear un objeto a través de llaves, que dentro puede contener datos o propiedades (por ejemplo podemos definir características de un usuario dentro de una sola entidad) y para eso hay que agregar nombres claves (que van entre "" pero NO son strings) que tienen un valor (que va entre '') (ejemplo. "name":'carla',)


console.log('this is a string');
console.log([1, 2, 3, 4]);
console.log({"username":'ryan', "score":70.4})

//VARIABLE: nombres que le damos a ciertos tipos de datos para almacenarlos en la memoria del computador si luego queremos reutilizarlos. Palabra clave: var o tambien let (le dice que estamos creando una variable cuyo nombre es nameuser y su valor es john). No pueden empezar con un número o caracter cualquiera (ej @), los únicos que si se puede son $ y _.

var nameuser = "john";
let lastname = "carter"
console.log(nameuser)
console.log(lastname)

//CONSTANTE: funciona igual que la variable, se usa cuando no queres que cambie (justamente es constante, se mantiene con valor único). vPalabra clave: const
const PI = 3.15;
const id = user1

//camelcase: forma más común de escribir una variable porque es mas fácil de leer, se trata de escribirlo asi: userName en vez de username, luego de la primer palabra cada una de las siguentes comenzará con mayúscula.

//otra forma de escribir variables no tan comun es user_name

let numberOne = 60;
let numberTwo = 100;

let result = numberOne + numberTwo;
//sería la funcion suma

console.log(result);

let numberOne = 60;
let numberTwo = 100;

let result = numberOne > numberTwo;

console.log(result)
//esto me daría un bouleano (en este caso falso). Asi funcionan las contraseñas y el log in de pags.*1
//*dato* distinto se escribe asi != 


//PROCESO DE CONCATENACIÓN: se unen dos cadenas o strings. ejemplo:

let name = 'Carla';
let lastname = 'Santin';

let completeName = name + ' ' + lastname;
// ' ' eso significa que le agrego un espacio en blanco

console.log(completeName)

//*1CONDICIONAL: si el resultado se comporta como nosotros esperábamos, queremo que haga algo, y si no, queremos que haga otra cosa. ejemplo para la contraseña de instagram, si la pones mal, en vez de que te tire un bouleano de false queremos que diga "su contraseña es incorrecta. Por favor intentelo de nuevo". if es un condicional, lo que queremos que suceda despues del bouleano va entre {}

let passwordDB = 'pepe123'

let input = 'asdasadasad' //lo que puso el usuario es

let result = input == passwordD;

if (result === true) {
    console.log('login correcto')
}

if (result === false) {
    console.log('login incorrecto') // el if false se puede escribir de otra manera (como else), ya que solo hay 2 resultados posibles: 
}

if (result === true) {
    console.log('login correcto')
} else {
    console.log('login incorrecto')
}
 
//internamente estamos comparando la contraseña que tenemos en base de datos con la que tipea el usuario.
// se compara con 2 o 3 = dependiendo la fuerza (? 

let typeCard = 'Debit Card';

switch(typeCard) {
    case 'Debit Card':
        console.log('this is a debid card');
        break;
    case 'Credit Car':
        console.log('This is Credit card');
        break;
    default:
        console.log('No card');
}
//esta es la manera en la que podemos comparar múltiples casos o valores de una. es otro flujo de control condicional, es similar a los if
//DEFAULT: valor por defecto que podemos usar.

//BUCLE o ITERADOR: tengo que hacer muchas veces una cosa, aplicar una tarea a una enorme cant. de datos. hay que asegurarse de que haya un fin

let count = 50;

while(count > 0) {
    console.log('Hello world')
    count = count -1;
}
//while es como if, dentro le ponemos la variable que armamos antes para usarla como condición
//"mientras count sea mayor a 0, quiero ejecutar mostrar un mensaje". Al mismo tiempo le decimos que vaya restando de a uno.
//todo el programa se va a ejecutar en bucle hasta que llegue a 0 (1 en realidad, porque el cero no se muestra), donde devolerá un falso y dejará de ejecutarse.

//hacemos el proceso inverso:

let count = 0;

while(count < 50) {
    console.log(count);
    count++; //incrementador
}

let names = ['ryan', 'john', 'matt']

console.names(names[0]) //el 0 es el indice de la posición en donde se encuentra el nombre de ryan, se agrega el índice para acceder a un solo ítem de la lista o array.

//BUCLE FOR

let names = ['ryan', 'john', 'matt']

for(let i = 0; i < names.length; i++) {

}
//el valor i (de indice en este caso) puede tener cualquier nombre.
//luego del ; va la condición
//names.lenght es como decir 3
//estamos creando una variable i que empiece en cero. luego le decimos que mmientra i sea menor a 3 ejecute lo de adentro y luego lo incremente en 1 y volver a ejecutarlo.

//FUNCIONES: definimos dentro de ellas una tarea y luego poder llamar esa tarea a través de un nombre

function greeting() { //en esta linea se empieza a crear el código
    console.log('Helllo')
}

//palabra clave - nombre de la func - () para poner datos de esa tarea mas adelante - adentro de {} escribimos lo que queremos que haga esa funcion.
//ahora hay que ejecutar esa funcion:

greeting(); //en esta linea se ejecuta el código
greeting()
greeting()
//simplemente llamando el nombre se puede reutilizar

//PARÁMETRO: 

function greeting(name) { 
    console.log(name)
    console.log('Helllo')
}

greeting('Marcus'); //le decimos que pase ese string a través de la variable name (lo pnemos en forma de var porque no sabemos que nombre vamos a recibir)
greeting('lola');

function add(n1, n2) {
    console.log(n1 + n2);
}

add(3, 2);
add(300, 200);
//seria la funcion suma

//RECOMENDACIÓN: estudiar el dom del navegador (Document Objet Model) que es lo que se puede alterar con js
//dio recomendaciones de cosas para estudiar pero ya no me dio el cerebro. ups





