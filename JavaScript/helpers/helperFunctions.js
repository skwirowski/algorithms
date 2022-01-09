/**
 * Creates array of given amount of random numbers
 * @param { number } num - number of elements to generate in an array
 */
export default function createArrayOfRandomNumbers(num) {
  const arrayOfRandomNumbers = [];
  const MAX_NUMBER_VALUE = 99;

  for (let i = 0; i < num; i += 1) {
    const randomNumber = Math.floor(Math.random() * (MAX_NUMBER_VALUE + 1)); // generates number between 0 to MAX_NUMBER_VALUE
    arrayOfRandomNumbers.push(randomNumber); // adds generated number at the end of arrayOfRandomNumbers
  }
  return arrayOfRandomNumbers;
}
