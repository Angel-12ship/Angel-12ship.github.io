// Cambia la imagen del emoji a "feliz"
function feliz() {
    console.log("Función feliz ejecutada");
    document.getElementById('estado').src = 'images/feliz.jpg';
}

// Cambia la imagen del emoji a "triste"
function triste() {
    console.log("Función triste ejecutada");
    document.getElementById('estado').src = 'images/triste.jpg';
}

// Cambia el color del subtítulo a rojo
function cambiarColor() {
    console.log("Función cambiarColor ejecutada");
    document.getElementById('subtitulo').style.color = 'red';
}

// Cambia el texto del subtítulo y el fondo del encabezado
function cambiarTexto() {
    console.log("Función cambiarTexto ejecutada");
    const subtitulo = document.getElementById('subtitulo');
    const encabezado = document.getElementById('encabezado');

    subtitulo.textContent = "YA LE SE AL JS";
    encabezado.style.backgroundColor = '#0b1494';
}

// Muestra mensaje y realiza operaciones básicas
function mostrarMensaje() {
    console.log("Función mostrarMensaje ejecutada");
    console.log("Hola Mundo");
    alert("Esto es un Alert o Alerta");

    let A = 3;
    let B = 4;
    alert(`La suma de A + B es: ${A + B}`);
}

// Cambia el logo por otra imagen (asegúrate de tener un elemento con id="logo")
function cambiarImagen() {
    console.log("Función cambiarImagen ejecutada");
    const logo = document.getElementById("logo");
    if (logo) {
        logo.src = "images/personaje.png";
    } else {
        console.warn("No se encontró el elemento con id 'logo'");
    }
}

// Activa modo oscuro
function modoOscuro() {
    console.log("Función modoOscuro ejecutada");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

// Alterna entre fondo blanco y azul claro
function cambiarFondo() {
    const actual = getComputedStyle(document.body).backgroundColor;
    console.log(`Función cambiarFondo ejecutada. Fondo actual: ${actual}`);
    // Compara el color rgb para azul claro (lightblue)
    if (actual === 'rgb(173, 216, 230)') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
}

// Simula una captura de pantalla con efecto visual
function sugerirCaptura() {
    console.log("Función sugerirCaptura ejecutada");
    const marco = document.createElement("div");
    marco.className = "captura-simulada";
    document.body.appendChild(marco);

    const mensaje = document.createElement("div");
    mensaje.className = "mensaje-captura";
    mensaje.textContent = "Simulación de captura realizada 📸";
    document.body.appendChild(mensaje);

    setTimeout(() => {
        document.body.removeChild(marco);
        document.body.removeChild(mensaje);
        console.log("Simulación de captura finalizada");
    }, 2000);
}

// Cambia el texto del título <h1> por una frase divertida al azar
function cambiarTitulo() {
    console.log("Función cambiarTitulo ejecutada");
    const frases = [
        "¡Hola, mundo divertido!",
        "Bienvenido a la locura JS",
        "Aprendiendo y disfrutando",
        "¿Listo para el desafío?",
        "Código y risas garantizadas",
        "¡Este es el mejor sitio!",
        "Programando con estilo 😎"
    ];
    const indice = Math.floor(Math.random() * frases.length);
    document.querySelector("h1").textContent = frases[indice];
    console.log(`Título cambiado a: ${frases[indice]}`);
}

// Cambia la fuente del <h1> dentro del encabezado #encabezado
function cambiarFuente() {
    const fuentes = [
        'Arial, sans-serif',
        'Comic Sans MS, cursive, sans-serif',
        'Georgia, serif',
        'Courier New, monospace',
        'Tahoma, sans-serif'
    ];
    const encabezado = document.querySelector('#encabezado h1');
    let fuenteActual = getComputedStyle(encabezado).fontFamily.toLowerCase().replace(/["']/g, "");
    let nuevaFuente;
    do {
        nuevaFuente = fuentes[Math.floor(Math.random() * fuentes.length)];
    } while (nuevaFuente.toLowerCase() === fuenteActual);
    encabezado.style.fontFamily = nuevaFuente;
    console.log(`Fuente cambiada de "${fuenteActual}" a "${nuevaFuente}"`);
}
