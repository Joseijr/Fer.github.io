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
    "Lo harias por una salchipapa?",
    "Ni por 2 salchipapas?",
    "No digas que no",
    "Ni modo",
    "Que sean 4 salchipapas",
    "Porfaaaaaaa",
    "Tu me odias verdad",
    "¿Qué esperas?",
    "Di sí ahora",
    "Tú eres buena gente Fer",
    "Eres mi única esperanza",
    "Solo tú puedes",
    "Esto es urgente"
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
