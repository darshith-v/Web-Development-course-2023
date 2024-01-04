
// 1 st question

let myArray = [10, 20, 30];
myArray[2] = 99;
console.log(myArray);

// 2nd question

function getLastValue(array) {
  const lastIndex = array.length - 1;

  return array[lastIndex];
}

console.log(getLastValue([1, 3, 5, 7, 8]));


//  3rd question

 function arraySwap(array) {
   const lastIndex = array.length - 1;
   const lastValue = array[lastIndex];
 
   const firstValue = array[0];
 
   array[0] = lastValue;
   array[lastIndex] = firstValue;
 
   return array;
 }
 
 console.log(arraySwap([23, 76, 99, 10, 6]));

// 4th question

for (let i = 0; i < 10; i++){
  if (i % 2 == 0) {
    console.log(i);
  }
}
/*
// In while - loop


i = 0;
while (i < 10 + 1) {
  if (i % 2 == 0) {
    console.log(i);    
  }
  i++;
}
*/

for (let i = 5; i >= 0; i--){
  console.log(i);
}

let i = 5;
while (i >= 0) {
  console.log(i);
  i--;
}

myArray = [1, 2, 3];
let result = [];

for (let i = 0; i < myArray.length; i++){
  result.push(myArray[i] + 1);
}

console.log(result);



function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++){
    result.push(array[i] + 1);
  }

  return result;
}

console.log(addOne([1, 2, 3]));



// 11i question

function addNum(array, num) {
  const result = [];

  for (let i = 0; i < array.length; i++){
    result.push(array[i] + num);
  }

  return result;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));


function addArray(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++){
    result.push(array1[i] + array2[i]);
  }
  return result;
}

console.log(addArray([1, 1, 2], [1, 1, 3]));
console.log(addArray([1, 2, 3], [4, 5, 6]));


function countPositive(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++){
    if (nums[i] > 0) {
      result ++
    }
  }

  return result;
}

console.log(countPositive([1, -3, 8, -4]));
console.log(countPositive([1, -3, 8, 4]));



function minMax(nums) {
  result = {
    min: nums[0],
    max: nums[0]
  }

  for (let i = 0; i < nums.length; i++){
    const value = nums[i];

    if (value < result.min) {
      result.min = value;
    } else if (value > result.max) {
      result.max = value;
    }
  }

  return result;
}

console.log(minMax([1, -3, 5, 10]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]))
console.log(minMax([3]))



function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++){
    const word = words[i];

    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }
  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple', 'grape']));





















