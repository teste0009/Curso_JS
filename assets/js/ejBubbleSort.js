// Ejercicio Bubble Sort.

/**
 * Sort an Array using Bubble method.
 * @param {Array} array array to sort
 * @returns {Array} Bubble Sort Array
 */
function bubbleSort$(array=this) {
  console.log(array);
  if( ! Array.isArray(array)) return null;

  totConditionals = 0;
  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length - 1 - i; j++) {
      console.log(array[j], array[j+1]);
      totConditionals++;
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
    console.log(array.toString());
    console.log('---------');
  }

  console.log({ totConditionals });
  return array;
}

Array.prototype.bubbleSort$ = bubbleSort$;

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// console.log(bubbleSort$(arr));

arr.bubbleSort$(arr);

console.log(arr);