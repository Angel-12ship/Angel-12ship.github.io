// Calculadora básica
document.getElementById("calcular").addEventListener("click", function () {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = document.getElementById("resultado");

    // Validación para evitar valores vacíos o no numéricos
    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Ingrese números válidos";
        return;
    }

    function calcular(a, b, op) {
        switch (op) {
            case "suma":
                return a + b;
            case "resta":
                return a - b;
            case "multiplicacion":
                return a * b;
            case "division":
                if (b === 0) {
                    return "No se puede dividir entre cero";
                }
                return a / b;
            default:
                return "Operación inválida";
        }
    }

    let resultadoFinal = calcular(num1, num2, operacion);
    resultado.textContent = "El resultado es: " + resultadoFinal;
});

// Calculadora de descuento
function calcularDescuento() {
    let monto = parseFloat(document.getElementById("montoCompra").value);
    let resultadoDescuento = document.getElementById("resultadoDescuento");

    if (isNaN(monto) || monto < 0) {
        resultadoDescuento.innerHTML = '<p style="color:red;">Ingrese un monto válido.</p>';
        return;
    }

    let descuento = 0;
    let totalPagar = monto;

    if (monto > 1000) {
        descuento = monto * 0.10;
        totalPagar = monto - descuento;
    }

    resultadoDescuento.innerHTML = `
        <p><strong>Total sin descuento:</strong> S/. ${monto.toFixed(2)}</p>
        <p><strong>Descuento aplicado:</strong> S/. ${descuento.toFixed(2)}</p>
        <p><strong>Total a pagar:</strong> S/. ${totalPagar.toFixed(2)}</p>
    `;
}
