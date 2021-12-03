/**
 * Complejidad Temporal --> O( n )
 * Complejidad Espacial --> O(  )
 */

function linearSearch(array, key) {
    for (let i = 0; i < array.length; i++) { // O(n)
        if (array[i] === key) { // O(1)
            return i; // O(1)
        }
    }
    return -1; // O(1)
}