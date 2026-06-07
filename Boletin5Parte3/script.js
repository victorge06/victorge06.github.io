// ==========================
// ACTIVIDAD 10
// ==========================
function compararPalabras() {

    let palabra1 =
        document.getElementById("palabra1").value;

    let palabra2 =
        document.getElementById("palabra2").value;

    if (palabra1.length > palabra2.length) {

        alert(`${palabra1} tiene más caracteres`);

    } else if (palabra2.length > palabra1.length) {

        alert(`${palabra2} tiene más caracteres`);

    } else {

        alert(
            "Las dos palabras tienen el mismo número de caracteres"
        );
    }
}

// ==========================
// ACTIVIDAD 11
// ==========================
function sumatorio() {

    let numero =
        parseInt(document.getElementById("numeroSuma").value);

    let suma = 0;

    for (let i = 0; i <= numero; i++) {

        suma += i;
    }

    document.getElementById("resultadoSuma").innerHTML =
        `El sumatorio es ${suma}`;
}

// ==========================
// ACTIVIDAD 12
// ==========================
const recetas = [

    {
        id: 1,
        nombrereceta: "Salmorejo",
        ingredientes: "Tomate, aceite y pan"
    },

    {
        id: 2,
        nombrereceta: "Gachas",
        ingredientes: "Harina, agua y azúcar"
    },

    {
        id: 3,
        nombrereceta: "Migas",
        ingredientes: "Pan, ajo y aceite"
    }
];

function mostrarRecetas() {

    let tabla = `
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nombre Receta</th>
            <th>Ingredientes</th>
        </tr>
    `;

    recetas.forEach(receta => {

        tabla += `
        <tr>
            <td>${receta.id}</td>
            <td>${receta.nombrereceta}</td>
            <td>${receta.ingredientes}</td>
        </tr>
        `;
    });

    tabla += `</table>`;

    document.getElementById("tablaRecetas").innerHTML =
        tabla;
}

// ==========================
// ACTIVIDAD 15
// ==========================
let agenda = new Map();

function agregarUsuario() {

    let nombre =
        document.getElementById("nombreAgenda").value;

    let dni =
        document.getElementById("dniAgenda").value;

    agenda.set(dni, nombre);

    alert("Usuario añadido correctamente");
}

function mostrarAgenda() {

    let resultado = "";

    agenda.forEach((nombre, dni) => {

        resultado +=
            `Nombre: ${nombre} - DNI: ${dni}<br>`;
    });

    document.getElementById("resultadoAgenda").innerHTML =
        resultado;
}