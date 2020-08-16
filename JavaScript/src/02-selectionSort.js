(function selectionSort02() {
  const swapArrayElements = (array, x, y) => {
    const newArray = [...array];
    [newArray[x], newArray[y]] = [newArray[y], newArray[x]];
    return newArray;
  };

  const selectionSort = (array) => {
    let newArray = [...array];

    for (let i = 0; i < newArray.length - 1; i += 1) {
      let min = i; // smallest element index

      // inner loop looks for minimum value in an array and sets smallest element index
      for (let j = i + 1; j < newArray.length; j += 1) {
        if (newArray[j] < newArray[min]) {
          min = j;
        }
      }
      if (min !== i) {
        newArray = swapArrayElements(newArray, i, min);
      }
    }
    return newArray;
  };

  // eslint-disable-next-line no-undef
  const exampleArray = createArrayWithRandomNumbers(30);
  console.log('========================================');
  console.log('02 - SELECTION SORT ALGORITHM');
  console.log('Unsorted array', exampleArray);
  console.log('Sorted numbers array', selectionSort(exampleArray));
})();
