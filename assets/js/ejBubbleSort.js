// Ejercicio Array Bubble Sort.

/**
 * Sort an Array using Bubble method.
 * @param {Array} array array to sort
 * @returns {Array} Bubble Sort Array
 */
function bubbleSort$() {
  let array = this;
  let totConditionals = 0;

  for (let i = 0; i < array.length; i++) {
    let isSwap = false;

    for (let j = 0; j < array.length - 1 - i; j++) {
      totConditionals++;
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        isSwap = true;
      }
    }

    if (! isSwap) {
      break;
    }
  }

  console.log({ totConditionals });
  return array;
}


Array.prototype.bubbleSort$ = bubbleSort$;

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // console.log(bubbleSort$(arr));
arr.bubbleSort$();
console.log(arr);

const arr2 = [5, 1, 0, 3, 4];
arr2.bubbleSort$();
console.log(arr2);

const arr3 = [[2], true, false, 3, 2, '1', '0', 1, '100', [1], {0: 1}];
arr3.bubbleSort$();
console.log(arr3);