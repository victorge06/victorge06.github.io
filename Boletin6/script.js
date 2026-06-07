const colorPar = document.getElementById("colorPar");
const colorImpar = document.getElementById("colorImpar");

function aplicarColores() {

    const filas = document.querySelectorAll("#tabla tbody tr");

    const colorFilasPares = colorPar.value;
    const colorFilasImpares = colorImpar.value;

    filas.forEach((fila, index) => {

        if (index % 2 === 0) {
            fila.style.backgroundColor = colorFilasImpares;
        } else {
            fila.style.backgroundColor = colorFilasPares;
        }

    });

    // Guardar colores
    localStorage.setItem("colorPar", colorFilasPares);
    localStorage.setItem("colorImpar", colorFilasImpares);
}

// Cargar colores guardados
window.onload = function () {

    const colorParGuardado = localStorage.getItem("colorPar");
    const colorImparGuardado = localStorage.getItem("colorImpar");

    if (colorParGuardado) {
        colorPar.value = colorParGuardado;
    }

    if (colorImparGuardado) {
        colorImpar.value = colorImparGuardado;
    }

    aplicarColores();
};

// Eventos
colorPar.addEventListener("change", aplicarColores);
colorImpar.addEventListener("change", aplicarColores);