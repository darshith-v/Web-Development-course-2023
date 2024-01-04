// 1st question
let words = ['hello', 'world', 'search', 'good'];

let index = -1;

for (let i = 0; i < words.length; i++){
  if (words[i] === 'search') {
    index = i;
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

