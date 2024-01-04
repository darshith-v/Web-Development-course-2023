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
*/

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

