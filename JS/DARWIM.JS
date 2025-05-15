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
