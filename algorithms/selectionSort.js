/**
 * Complejidad Temporal --> O( n^2 )
 * Complejidad Espacial --> O(  )
 */


function selectionSort(arr) {
    let longitud = arr.length; // O(1)
    for (let i = 0; i < longitud; i++) { // O(n)
        let min = i; // O(1)
        for (let j = i + 1; j < longitud; j++) { // O(n)
            if (arr[j] < arr[min]) { // O(1)
                min = j; // O(1)
            }
        }
        if (min !== i) { // O(1)
            let aux = arr[i]; // O(1)
            arr[i] = arr[min]; // O(1)
            arr[min] = aux; // O(1)
        }
    }
    return arr; // O(1)
}