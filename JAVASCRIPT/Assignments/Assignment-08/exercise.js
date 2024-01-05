/*
// 1st question

let words = ['hello', 'world', 'search', 'good','search'];

let index = -1;

for (let i = 0; i < words.length; i++){
  if (words[i] === 'search') {
    index = i;
    break;
  }
}

console.log(index);

words = ['not', 'found'];

index = -1;

for (let i = 0; i < words.length; i++){
  if (words[i] === 'search') {
    index = i;
  }
}

console.log(index);


// 2nd question

function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++){
    if (array[i] === word) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

// 11s

function removeEgg(foods) {
  let result = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      continue;
    } 
    result.push(foods[i]);
  }
  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


function removeEgg(foods) {
  let result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < foods.length; i++) {

    if (foods[i] === 'egg' && eggsRemoved < 2) {

      eggsRemoved++;
      
      continue;
    } 
    result.push(foods[i]);
  }
  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));



function removeEgg(foods) {
  const reversedFoods = foods.reverse();

  let result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
//for (let i = foods.length -1 ; i >= 0; i--){

    if (foods[i] === 'egg' && eggsRemoved < 2) {

      eggsRemoved++;
      
      continue;
    } 
    result.push(foods[i]);
  }
  return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
// console.log(removeEgg(['ham','egg','egg','apple','egg']));
// console.log(removeEgg(['ham','apple','egg']));
// console.log(removeEgg(['egg','apple','ham']));

*/

function removeEgg(foods) {
  const foodsCopy = foods.slice();
  const reversedFoods = foodsCopy.reverse();

  let result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
//for (let i = foods.length -1 ; i >= 0; i--){

    if (foods[i] === 'egg' && eggsRemoved < 2) {

      eggsRemoved++;
      
      continue;
    } 
    result.push(foods[i]);
  }
  return result.reverse();
}

// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
// console.log(removeEgg(['ham','egg','egg','apple','egg']));
// console.log(removeEgg(['ham','apple','egg']));
// console.log(removeEgg(['egg','apple','ham']));


const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);













