const factorial01 = (i, a) => {
  a = a || 1;

  if (i < 2) {
    return a;
  }

  return factorial01(i - 1, a * i);
};

const factorial02 = (i) => {
  if (i === 0) {
    return 1;
  }

  return i * factorial02(i - 1);
};

const exampleNumber = 5;
console.log('RECURRENCE');
console.log('========================================');
console.log('01 - FACTORIAL');
console.log(`Factorial from ${exampleNumber}: `, factorial01(exampleNumber));
console.log('----------------------------------------');
console.log('02 - FACTORIAL');
console.log(`Factorial from ${exampleNumber}: `, factorial02(exampleNumber));
console.log('----------------------------------------');
