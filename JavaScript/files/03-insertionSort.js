(function insertionSort03() {
  const insertionSort = array => {
    const newArray = [...array];

    for (let i = 1; i < newArray.length; i += 1) {
      const key = newArray[i]; // currently inserted element
      let j = i - 1;

      while (j >= 0 && key < newArray[j]) {
        newArray[j + 1] = newArray[j];
        j -= 1;
      }
      newArray[j + 1] = key;
    }
    return newArray;
  };

  // eslint-disable-next-line no-undef
  const exampleArray = createArrayWithRandomNumbers(30);
  console.log('========================================');
  console.log('03 - INSERTION SORT ALGORITHM');
  console.log('Unsorted array', exampleArray);
  console.log('Sorted numbers array', insertionSort(exampleArray));
})();
