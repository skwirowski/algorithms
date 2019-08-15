const exampleArray = [2, 4, 9, 1, 0, 5, 3, 6, 8, 7];
const anotherExampleArray = [19, 28, 39, 100, 24, 33, 99, 12, 48, 8];

const findSmallestElement = array => {
  let smallestElementIndex = 0;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[smallestElementIndex]) {
      smallestElementIndex = i;
    }
  }
  return smallestElementIndex;
};

const selectionSortAscending = array => {
  let sortedArray = [];
  const unsortedArray = [...array];

  for (let i = 0; i < array.length; i += 1) {
    const smallestElement = findSmallestElement(unsortedArray);
    sortedArray = [...sortedArray, ...unsortedArray.splice(smallestElement, 1)];
  }
  return sortedArray;
};

const selectionSortDescending = array => {
  let sortedArray = [];
  const unsortedArray = [...array];

  for (let i = 0; i < array.length; i += 1) {
    const smallestElement = findSmallestElement(unsortedArray);
    sortedArray = [...unsortedArray.splice(smallestElement, 1), ...sortedArray];
  }
  return sortedArray;
};

console.log(selectionSortAscending(exampleArray));
console.log(selectionSortDescending(anotherExampleArray));
