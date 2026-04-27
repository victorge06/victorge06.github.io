function act1() {
    let h1 = document.getElementById("titulo");
    h1.textContent = "DOM Manipulado";
    h1.style.color = "red";
    h1.classList.add("titulo-activo");
}

function act2() {
    let p = document.getElementById("parrafo");
    p.innerHTML += " <strong>Texto añadido</strong>";
}

function act3() {
    document.getElementById("celda1").textContent = "Nueva Celda 1";
    document.getElementById("celda2").textContent = "Nueva Celda 2";
}

function act4() {
    let fila = document.getElementById("fila");
    let nuevaCelda = document.createElement("td");
    nuevaCelda.textContent = "Celda Nueva";
    fila.appendChild(nuevaCelda);
}

function act5() {
    document.getElementById("celda1").style.backgroundColor = "lightblue";
    document.getElementById("celda2").style.backgroundColor = "lightblue";
}

function act6() {
    let celdas = document.querySelectorAll("td");
    celdas.forEach(celda => {
        celda.onclick = function () {
            this.style.backgroundColor = "yellow";
        }
    });
}
