//funcion para calcular la cantidad de agua que debes beber.



function mostar() {
    let peso

    peso = prompt("Diga su peso en kilogramos, diga terminar si desea salir: ");
    peso = parseInt(peso);
    do {
        if (peso >= 70) {
            alert("Ud debe beber 2,6 o mas litros diarios de agua");
        }else if ((peso >= 61) && (peso <= 69)) {
            alert("Ud debe beber 2,4 litros diarios de agua");
        
        } else if ((peso >= 51) && (peso <= 60)) {
            alert("Ud debe beber 2,1 litros diarios de agua");

            
        } else if  ((peso >= 30) && (peso <= 50)) {
            alert("Ud debe beber 1,7 litros diarios de agua");

        }else 
        {
            alert( "Ingrese un valor valido");
        }

    } while (peso == "terminar");

    return mostar;
}
mostar();