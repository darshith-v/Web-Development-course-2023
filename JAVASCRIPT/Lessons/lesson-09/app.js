/*
function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a,b)
}

// calculator(1, 2,sum)
calculator(1, 2, (a, b) => {
  console.log(a + b);
})



// callback hell

function getData(dataId, getNextdata) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextdata) {
      getNextdata();
    }
  }, 2000);
}

getData(1, () => {
  getData(2)
})
*/

for (let i = 0; i < 5; i++){
  let string = "";
  for (let j = 0; j < 5; j++){
    string += j;
  }
  console.log(i,string)
}
