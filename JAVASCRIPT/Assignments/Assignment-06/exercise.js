function gamingButton(){
  const button = document.querySelector('.js-toggled-button');

  if(!button.classList.contains('is-toggled')){
    button.classList.add('is-toggled');
  }else{
    button.classList.remove('is-toggled');
  }
}

function toggledButton(selector){
  const _toggled = document.querySelector(selector);

  if(!_toggled.classList.contains('is-toggled')){

    // before turning this button ON, check if there's already a button that's turned ON and turn it OFF
    turnOffPreviousButton();

    _toggled.classList.add('is-toggled');
  } else {
    _toggled.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton(){
  const previousButton = document.querySelector('.is-toggled');

  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}




localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();


function updateCalculation(value) {
  calculation = calculation + value;

  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = `${calculation}`;
}
