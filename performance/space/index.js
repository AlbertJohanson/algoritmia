function contar(n) {
    for (let i = 0; i < n ; i++) {
        console.log(i);    
    }
}



function repetir(arreglo)
{
    let arreglo_repetido = arreglo;
    return arreglo_repetido;
}

function convertirString(arreglo)
{
    let arreglo_string = arreglo.map(element => element.toString());

    return arreglo_string;
}

console.log(convertirString([1,2,3,4,5]));


function dosDimensiones(valor)
{
    let x = new Array(valor);

    for (let i = 0; i < valor; i++) {
        x[i] = new Array(valor).fill(0);
    }

    return x;
}


console.log(dosDimensiones(5));

