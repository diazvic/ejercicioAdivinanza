const respuestaCorrecta = document.getElementById("respuesta-correcta");
const respuesta = document.getElementById("respuesta");
const respuestaIncorrectaUno = document.getElementById("respuesta-incorrecta-uno");
const respuestaIncorrectaDos = document.getElementById("respuesta-incorrecta-dos");


const convertirAVerde = () => {
    respuestaCorrecta.style.backgroundColor = "#2ECC71";
    respuesta.textContent = "¡Respuesta correcta!";
};

respuestaCorrecta.onclick = convertirAVerde;

const convertirARojo = () => {
    respuestaIncorrectaUno.style.backgroundColor = "#ff0000";
    respuestaIncorrectaDos.style.backgroundColor = "#ff0000";
    respuestaCorrecta.style.backgroundColor = "#2ECC71";
    respuesta.textContent = "¡Respuesta equivocada!";
};
respuestaIncorrectaUno.onclick = convertirARojo;
respuestaIncorrectaDos.onclick = convertirARojo;