/*
1 st question

const myArray = [10, 20, 30];
myArray[2] = 99;
console.log(myArray);
*/

/*
2nd question

function getLastValue(array) {
  const lastIndex = array.length - 1;

  return array[lastIndex];
}

console.log(getLastValue([1, 3, 5, 7, 8]));

*/

/*
 3rd question

 
*/
function arraySwap(array) {
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];

  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}

console.log(arraySwap([23, 76, 99, 10, 6]));









