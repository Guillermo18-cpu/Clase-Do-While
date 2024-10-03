var numeroEntrada=0;
var opcion;
var resultadoFactorial=1; 

do {
    opcion=  parseInt(prompt("¿Ingrese la opcion que desee realizar: 1. Calcular factorial   2.Determinar si es par     3. Terminar?"))

    switch (opcion) {
        case 1:
            numeroEntrada = parseInt(prompt ("Ingrese un numero para calcular su factorial: "));
            resultadoFactorial=1
            for (let i =1; i<=numeroEntrada; i++){ 

                resultadoFactorial=resultadoFactorial*i
            }     
        
            alert(resultadoFactorial + " es el factorial de " + numeroEntrada);
            break;


        case 2:
            numeroEntrada=parseInt(prompt("Ingrese un numero para determinar si es par o impar"));

            if (((numeroEntrada%2))==0) {

                alert(numeroEntrada+ "es par");
                
            } else {

                alert(numeroEntrada+ "es impar");
 
            }
            
            
            break;

    }
} while (opcion !=3);