const botonRojo = document.getElementById("botonRojo");
const botonVerde = document.getElementById("botonVerde");

const palabras = [
    "Segura",
    "Por favor",
    "Di que SÍ",
    "Porfiiii",
    "Solo esta vez",
    "No seas mala onda",
    "Te lo ruego",
    "Con todo mi corazón",
    "Hazlo por mí",
    "Ándale",
    "No me ignores",
    "No seas así",
    "Te lo suplico",
    "Es importante",
    "No cuesta nada",
    "Solo un clic",
    "Me harías muy feliz",
    "Anda di que sí",
    "Plis plis plis",
    "Con carita triste 🥺",
    "Hazlo por la ciencia",
    "No lo pienses",
    "Vamos, tú puedes",
    "Confío en ti",
    "No digas que no",
    "Por los viejos tiempos",
    "No me dejes en visto",
    "Hazlo yaaa",
    "No lo pospongas",
    "¿Qué esperas?",
    "Di sí ahora",
    "Tú eres buena gente",
    "Ayuda a este pobre botón",
    "Hazlo antes de que se acabe",
    "Tu toque mágico",
    "Eres mi única esperanza",
    "Solo tú puedes",
    "Esto es urgente",
    "Hazlo por los memes"
];
let indice = 0;
let tamanoVerde = 10;

botonRojo.addEventListener("click", () => {
    // Cambiar texto del botón rojo
    botonRojo.textContent = palabras[indice];
    indice = (indice + 1) % palabras.length;

    // Aumentar tamaño del botón verde
    tamanoVerde += 10;
    botonVerde.style.fontSize = `${tamanoVerde}px`;
});
