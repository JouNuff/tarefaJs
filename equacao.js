//deve estar no formato ax + b = 0
function solucaoPrimeiroGrau(a, b) {

    if(a == 0) {
        return null;
    }

    res = {
        raiz: -b/a
    };

    return res;

}

//deve estar no formato ax² + b + c = 0
function solucaoSegundoGrau(a, b, c) {

    var x1;
    var x2;

    //equação sem o valor a
    if(a == 0) {
        return null;
    }

    //equação sem o valor b
    if(b == 0) {
        x1 = Math.sqrt((-c)/a); //raiz positiva
        x2 = Math.sqrt((-c)/a) * (-1); //raiz negativa

        res = {
            raiz1: x1,
            raiz2: x2
        }
    
        return res;
    }

    var delta = (b ** 2) - (4 * a * c);

    //equação com delta menor que zero
    if(delta < 0) {
        return null;
    }

    x1 = (  (b*(-1)) + Math.sqrt(delta)  ) / 2 * a;

    x2 = (  (b*(-1)) - Math.sqrt(delta)  ) / 2 * a;

    res = {
        raiz1: x1,
        raiz2: x2
    }

    return res;

}

module.exports = {
    solucaoPrimeiroGrau,
    solucaoSegundoGrau
}