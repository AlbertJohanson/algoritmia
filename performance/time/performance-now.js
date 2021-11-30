const performance = require('perf_hooks')

function contar(n) {
    for (let i = 0; i < n ; i++) {
        console.log(i);    
    }
}

let start = performance.performance.now();
contar(5);
let end = performance.performance.now();

let duration = end - start;


console.log(`El tiempo de ejecución es de ${duration} milisegundos`);