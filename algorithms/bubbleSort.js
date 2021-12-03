/**
 * Complejidad Temporal --> O( n^2 )
 * Complejidad Espacial --> O( n)
 * Espacio Auxiliar --> O( 1 )
 */

function bubbleSort(array) { // O(n)
    let longitud = array.length; // O(1)
    for (let i = 0; i < longitud; i++) { // O( 1 )
        for (let j = 0; j < longitud; j++) {  // O( 1 )
            if (array[j] > array[j + 1]) {  // O( 1 )
                let temporal = array[j];  // O( 1 )
                array[j] = array[j + 1];  // O( 1 )
                array[j + 1] = temporal;  // O( 1 )
            }
        }
    }
    return array; 
}