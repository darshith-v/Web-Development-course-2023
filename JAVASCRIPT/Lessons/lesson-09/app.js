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

*/

// callback hell

function getData(dataId, getNextdata) {
  setTimeout(() => {
    console.log(dataId);
    if (getNextdata) {
      getNextdata();
    }
  }, 2000);
}

getData(1, () => {
  getData(2)
})

