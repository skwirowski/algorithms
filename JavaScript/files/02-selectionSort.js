(function selectionSort02() {
  const createArrayWithRandomNumbers = num => {
    const array = [];

    for (let i = 0; i < num; i += 1) {
      const randomNumber = Math.floor(Math.random() * (num + 1));
      array.push(randomNumber);
    }
    return array;
  };

  const swapArrayElements = (array, x, y) => {
    const newArray = [...array];
    [newArray[x], newArray[y]] = [newArray[y], newArray[x]];
    return newArray;
  };

  const selectionSort = array => {
    let newArray = [...array];

    // outer loop receives smallest element index and swaps smallest element with first element in the array
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

  const exampleArray = createArrayWithRandomNumbers(30);
  console.log('========================================');
  console.log('02 - SELECTION SORT ALGORITHM');
  console.log('Unsorted array', exampleArray);
  console.log('Sorted numbers array', selectionSort(exampleArray));
})();
