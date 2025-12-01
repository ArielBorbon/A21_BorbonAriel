const NACIONALIDADES_ACEPTADAS = [
    { key: 'AU', name: "Australia" },
    { key: 'BR', name: "Brasil" },
    { key: 'CA', name: "Canadá" },
    { key: 'CH', name: "Suiza" },
    { key: 'DE', name: "Alemania" },
    { key: 'DK', name: "Dinamarca" },
    { key: 'ES', name: "España" },
    { key: 'FI', name: "Finlandia" },
    { key: 'FR', name: "Francia" },
    { key: 'GB', name: "Reino Unido" },
    { key: 'IE', name: "Irlanda" },
    { key: 'IN', name: "India" },
    { key: 'IR', name: "Irán" },
    { key: 'MX', name: "México" },
    { key: 'NL', name: "Países Bajos" },
    { key: 'NO', name: "Noruega" },
    { key: 'NZ', name: "Nueva Zelanda" },
    { key: 'RS', name: "Serbia" },
    { key: 'TR', name: "Turquía" },
    { key: 'UA', name: "Ucrania" },
    { key: 'US', name: "Estados Unidos" },
];



const REGEX_SOLO_LETRAS = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

function validarInputAlMomento(evento) {
    const input = evento.target;
    const valor = input.value;
    const nombreCampo = input.name;
    let hayError = false;

    if (valor.trim() === "") {
        hayError = true;
    }

    if (nombreCampo === "nombre" || nombreCampo === "apellido") {

        if (valor !== "" && !REGEX_SOLO_LETRAS.test(valor)) {
            hayError = true;
        }
    }

    if (hayError) {

        input.style.borderColor = "red";
        input.style.outlineColor = "red";

    } else {

        input.style.borderColor = "";
        input.style.outlineColor = "";

    }
}


function resaltarLabel(elemento, accion) {
    let label;

    if (elemento.type === "checkbox") {
        label = elemento.parentElement;
    }
    else {
        label = elemento.previousElementSibling;
    }

    if (label && label.tagName === 'LABEL') {
        if (accion === 'add') label.classList.add("selected_2");
        if (accion === 'remove') label.classList.remove("selected_2");
        if (accion === 'toggle') label.classList.toggle("selected_2");
    }
}



function resaltar(evento) {

    evento.target.classList.add("selected");

    resaltarLabel(evento.target, 'add');
}

function noResaltar(evento) {
    
    evento.target.classList.remove("selected");

    resaltarLabel(evento.target, 'remove');
}

function resaltarDesResaltar(evento) {
    evento.target.classList.toggle("selected");

    resaltarLabel(evento.target, 'toggle');
}




