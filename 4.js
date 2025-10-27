function verificarSinal(numero){
    if (numero > 0){
        confirm.log("Positivo");
    }else if (numero< 0){
        console.log("Negativo");
    }else{
        console.log("Zero");
    }
}
verificarSinal(-5);