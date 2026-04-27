let encendida = false;

const img = document.getElementById("bombilla");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (encendida) {
    img.src = "apagada.png";
    btn.textContent = "Encender";
    encendida = false;
  } else {
    img.src = "encendida.png";
    btn.textContent = "Apagar";
    encendida = true;
  }
});