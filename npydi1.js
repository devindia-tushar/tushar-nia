let numbers = [1, 2, 3];

function getOrdinalSuffix(i) {
  let j = i % 10, k = i % 100;
  if (j == 1 && k != 11) return i + 'st';
  if (j == 2 && k != 12) return i + 'nd';  
  if (j == 3 && k != 13) return i + 'rd';
  return i + 'th';
}

let call = 1;
let sum = numbers.reduce(function (previousValue, currentValue, currentIndex, array) {
    let result = previousValue + currentValue;

    // show the 1st call, 2nd call, etc.
    console.log(`${getOrdinalSuffix(call)} call`);
    call++;

    // show the immediate values
    console.table({ previousValue, currentValue, currentIndex, result });

    return result;
},100);

console.log(`Result: ${sum}`);