import createArrayOfRandomNumbers from 'helpers/helperFunctions';

// * Selection Sort

/**
 * Finds smallest element in the given array
 * @param { number[] } arr - array of numbers
 * @returns { number } - index of smallest array's element
 */
function findSmallestElement(arr) {
  let smallestElement = arr[0]; // keeps smallest number value
  let smallestElementIndex = 0; // keeps smallest number's index
  const iterations = arr.length;

  for (let i = 1; i < iterations; i += 1) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
      smallestElementIndex = i;
    }
  }
  return smallestElementIndex;
}

/**
 * Changes given array by adding a number at the end of it
 * @param { Array } arr - array to add a number at the end of it
 * @param { number } element - number to add to the array
 */
function addElementAtEndOfArray(arr, element) {
  arr.push(element);
}

/**
 * Changes given array by adding a number at the beginning of it
 * @param { Array } arr - array to add a number at the beginning of it
 * @param { number } element - number to add to the array
 */
function addElementAtBeginningOfArray(arr, element) {
  arr.unshift(element);
}

/**
 * Sorts unsorted array of numbers
 *
 * @callback sortingDirectionCallback
 * @param { Array } - array where new item is added
 * @param { element } - element that is added to an array
 * @returns { void }
 *
 * @param { number[] } arr - unsorted array of numbers
 * @param { sortingDirectionCallback } callback - function adding single element at the end/beginning of an array
 * @returns { number[] } - array of sorted numbers
 */
function selectionSort(arr, callback) {
  const sortedArray = []; // empty array for sorted numbers
  const unsortedArray = [...arr]; // copy of argument array for splice to modify
  const iterations = arr.length;

  for (let i = 0; i < iterations; i += 1) {
    const smallestElementIndex = findSmallestElement(unsortedArray); // currently smallest number in the unsortedArray

    // ? callback adds current smallest number to sortedArray
    // *  - if adds at the end results in ascending order
    // *  - if adds at the beginning results in descending order
    callback(sortedArray, unsortedArray[smallestElementIndex]);
    unsortedArray.splice(smallestElementIndex, 1); // removes current smallest number from unsortedArray
  }
  return sortedArray;
}

/**
 * Sorts unsorted array of numbers in ascending order
 * @param { numbers[] } arr - unsorted array of numbers
 */
function ascendingSort(arr) {
  return selectionSort(arr, addElementAtEndOfArray);
}

/**
 * Sorts unsorted array of numbers in descending order
 * @param { numbers[] } arr - unsorted array of numbers
 */
function descendingSort(arr) {
  return selectionSort(arr, addElementAtBeginningOfArray);
}

const unsortedArrayExample = createArrayOfRandomNumbers(30);

console.log('SORTING ALGORITHMS');
console.log('========================================');
console.log('01 - SELECTION SORT ALGORITHM');
console.log('Example unsorted array: ', unsortedArrayExample);
console.log('Sorted in ascending order: ', ascendingSort(unsortedArrayExample));
console.log('Sorted in descending order: ', descendingSort(unsortedArrayExample));
console.log('----------------------------------------');
