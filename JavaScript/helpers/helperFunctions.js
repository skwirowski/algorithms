/**
 * Creates array of given amount of random numbers
 * @param { number } num - number of elements to generate in an array
 */
export default function createArrayOfRandomNumbers(num) {
  const arrayOfRandomNumbers = [];

  for (let i = 0; i < num; i += 1) {
    const randomNumber = Math.floor(Math.random() * (num + 1)); // generates number between 0 to n
    arrayOfRandomNumbers.push(randomNumber); // adds generated number at the end of arrayOfRandomNumbers
  }
  return arrayOfRandomNumbers;
}
