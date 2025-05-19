function feliz() {
    console.log("Función feliz ejecutada");
    const estado = document.getElementById('estado');
    if (estado) estado.src = 'images/feliz.jpg';
    else console.warn("No se encontró el elemento con id 'estado'");
}

function triste() {
    console.log("Función triste ejecutada");
    const estado = document.getElementById('estado');
    if (estado) estado.src = 'images/triste.jpg';
    else console.warn("No se encontró el elemento con id 'estado'");
}

function cambiarColor() {
    console.log("Función cambiarColor ejecutada");
    const subtitulo = document.getElementById('subtitulo');
    if (subtitulo) subtitulo.style.color = 'red';
    else console.warn("No se encontró el elemento con id 'subtitulo'");
}

function cambiarTexto() {
    console.log("Función cambiarTexto ejecutada");
    const subtitulo = document.getElementById('subtitulo');
    const encabezado = document.getElementById('encabezado');

    if (subtitulo) subtitulo.textContent = "YA LE SE AL JS";
    else console.warn("No se encontró el elemento con id 'subtitulo'");

    if (encabezado) encabezado.style.backgroundColor = '#0b1494';
    else console.warn("No se encontró el elemento con id 'encabezado'");
}

function mostrarMensaje() {
    console.log("Función mostrarMensaje ejecutada");
    console.log("Hola Mundo");
    alert("Esto es un Alert o Alerta");

    let A = 3;
    let B = 4;
    alert(`La suma de A + B es: ${A + B}`);
}

function cambiarImagen() {
    console.log("Función cambiarImagen ejecutada");
    const logo = document.getElementById("logo");
    if (logo) {
        logo.src = "images/personaje.png";
    } else {
        console.warn("No se encontró el elemento con id 'logo'");
    }
}

function modoOscuro() {
    console.log("Función modoOscuro ejecutada");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function cambiarFondo() {
    const actual = getComputedStyle(document.body).backgroundColor;
    console.log(`Función cambiarFondo ejecutada. Fondo actual: ${actual}`);
    if (actual === 'rgb(173, 216, 230)') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
}

function sugerirCaptura() {
    console.log("Función sugerirCaptura ejecutada");
    const marco = document.createElement("div");
    marco.className = "captura-simulada";
    Object.assign(marco.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 9999,
    });
    document.body.appendChild(marco);

    const mensaje = document.createElement("div");
    mensaje.className = "mensaje-captura";
    mensaje.textContent = "Simulación de captura realizada 📸";
    Object.assign(mensaje.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        fontSize: "1.5rem",
        fontWeight: "bold",
        zIndex: 10000,
        boxShadow: "0 0 15px rgba(0,0,0,0.3)"
    });
    document.body.appendChild(mensaje);

    setTimeout(() => {
        document.body.removeChild(marco);
        document.body.removeChild(mensaje);
        console.log("Simulación de captura finalizada");
    }, 2000);
}

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
    const h1 = document.querySelector("h1");
    if (h1) h1.textContent = frases[indice];
    else console.warn("No se encontró un elemento <h1>");
    console.log(`Título cambiado a: ${frases[indice]}`);
}

function cambiarFuente() {
    const fuentes = [
        'Arial, sans-serif',
        'Comic Sans MS, cursive, sans-serif',
        'Georgia, serif',
        'Courier New, monospace',
        'Tahoma, sans-serif'
    ];
    const encabezado = document.querySelector('#encabezado h1');
    if (!encabezado) {
        console.warn("No se encontró el elemento '#encabezado h1'");
        return;
    }
    let fuenteActual = getComputedStyle(encabezado).fontFamily.toLowerCase().replace(/["']/g, "");
    let nuevaFuente;
    do {
        nuevaFuente = fuentes[Math.floor(Math.random() * fuentes.length)];
    } while (nuevaFuente.toLowerCase() === fuenteActual);
    encabezado.style.fontFamily = nuevaFuente;
    console.log(`Fuente cambiada de "${fuenteActual}" a "${nuevaFuente}"`);
}

function calcularDescuento() {
    const montoInput = document.getElementById("montoCompra");
    const resultadoDiv = document.getElementById("resultadoDescuento");
    const monto = parseFloat(montoInput.value);

    if (isNaN(monto) || monto <= 0) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, ingrese un monto válido mayor a cero.</p>";
        return;
    }

    const descuento = monto > 1000 ? monto * 0.10 : 0;
    const totalPagar = monto - descuento;

    resultadoDiv.innerHTML = `
        <p><strong>Total sin descuento:</strong> S/.${monto.toFixed(2)}</p>
        <p><strong>Descuento aplicado:</strong> S/.${descuento.toFixed(2)}</p>
        <p><strong>Total a pagar:</strong> S/.${totalPagar.toFixed(2)}</p>
    `;
}
