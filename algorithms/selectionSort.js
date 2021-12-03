/**
 * Complejidad Temporal --> O( n^2 )
 * Complejidad Espacial --> O( n )
 * Espacio Auxiliar --> O( 1 )
 */


function selectionSort(arr) { 
    let longitud = arr.length; 
    for (let i = 0; i < longitud; i++) { 
        let min = i; 
        for (let j = i + 1; j < longitud; j++) { 
            if (arr[j] < arr[min]) { 
                min = j; 
            }
        }
        if (min !== i) { 
            let aux = arr[i]; 
            arr[i] = arr[min]; 
            arr[min] = aux; 
        }
    }
    return arr; 
}