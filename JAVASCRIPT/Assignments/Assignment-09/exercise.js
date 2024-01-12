function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  // If the function has not returned by now,
  // logically that means the word must not
  // exist in the array, so we'll return -1.
  return -1;
}

// console.log(findIndex(['green', 'red', 'blue', 'red'], 'blue'));

function Unique(array) {
  const result = [];
  
  for (let i = 0; i < array.length; i++){
    const word = array[i];

    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }

  return result;
}

console.log(Unique(['green', 'red', 'blue', 'red']));

/*
function multiply(num1, num2) {
  return num1 * num2;
}


console.log(multiply(2, 3));
console.log(multiply(7, 10));
*/

// 1
const oneLine = (num1, num2) => num1 * num2;

console.log(oneLine(2, 3));
console.log(oneLine(7, 10));

// 2

function countPositive(nums) {
  let positiveNumbers = 0;
  
  nums.forEach((num) => {
    if (num > 0) {
      positiveNumbers++;
    }
  });

  return positiveNumbers;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// 3


function addNum(array,num) {
  return array.map((value) => value * num);
}

console.log(addNum([1, 1, 2], 2));

/*
function removeEgg(foods) {
  return foods.filter((food) => food !== 'egg');
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
*/


function removeEgg(foods) {
  let eggsRemoved = 0;

  return foods.filter((food) => {
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }
    return true;
  })
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));