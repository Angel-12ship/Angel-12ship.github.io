document.getElementById("calcular").addEventListener("click", function(){
    let num1 = parseFloat(document.getElementById("numero1").value);//8
    let num2 = parseFloat(document.getElementById("numero2").value);//2
    let operacion = document.getElementById("operacion").value;//suma
    let resultado = document.getElementById("resultado");
//validacion que no me esta enviando vacios
    if(isNaN(num1)||isNaN(num2)){
        resultado.textContent = "Ingrese números Valido";
        return;
    }
function calcular(a,b, op){
    switch (op) {
        case "suma":
            return a+b;     
        case "resta":
            return a-b;
        default:
            return "Operación Inválida"
    }
}
let resultadoFinal = calcular(num1,num2,operacion);
resultado.textContent="El Resultado es: "+resultadoFinal;
});