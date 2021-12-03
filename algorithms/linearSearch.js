/**
 * Complejidad Temporal --> O( n )
 * Complejidad Espacial --> O( n )
 * Espacio Auxiliar --> O( 1 )
 */

function linearSearch(array, key) { // 0(n)
    for (let i = 0; i < array.length; i++) { // temporal(// O(n)) espacial(// O(1))
        if (array[i] === key) { // Temporal(// O(1))
            return i; // Temporal(// O(1))
        }
    }
    return -1; // Temporal(// O(1))  // O(1)
}