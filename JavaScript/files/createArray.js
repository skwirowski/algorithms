const createArrayWithRandomNumbers = num => {
  const array = [];

  for (let i = 0; i < num; i += 1) {
    const randomNumber = Math.floor(Math.random() * (num + 1));
    array.push(randomNumber);
  }
  return array;
};
