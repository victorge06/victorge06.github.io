// Obtener la pantalla de la calculadora
const pantalla = document.getElementById("pantalla");

/*
    Función para agregar números u operadores
    a la pantalla de la calculadora
*/
function agregarValor(valor) {

    pantalla.value += valor;

}

/*
    Función para limpiar completamente
    la pantalla
*/
function limpiarPantalla() {

    pantalla.value = "";

}

/*
    Función para borrar el último carácter
    escrito en pantalla
*/
function borrarUltimo() {

    pantalla.value = pantalla.value.slice(0, -1);

}

/*
    Función para calcular el resultado
    de la operación escrita
*/
function calcularResultado() {

    try {

        pantalla.value = eval(pantalla.value);

    } catch (error) {

        pantalla.value = "Error";

    }

}