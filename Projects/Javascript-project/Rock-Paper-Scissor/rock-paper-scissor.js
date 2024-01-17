  let score = JSON.parse(localStorage.getItem('score')) || 
    {
    wins: 0,
    losses: 0,
    tie: 0
    };
    
  function update() {
     document.querySelector('.js-update').innerHTML = `win: ${score.wins}, losses: ${score.losses}, tie: ${score.tie}`;
  };
  
let isAutoPlaying = false;  
let intervalId;  

function autoplay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 2000);
    isAutoPlaying = true;

    document.querySelector('.js-auto-palying-button')
      .innerHTML = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;

    document.querySelector('.js-auto-palying-button')
      .innerHTML = 'Auto Play';
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('Rock');
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper');
})

document.querySelector('.js-scissor-button').addEventListener('click', () => {
  playGame('Scissor');
})

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.tie = 0;
  localStorage.removeItem('score');
  update();
}

document.querySelector('.js-reset-game').addEventListener('click', () => {
  resetScore();
})


// let addEventListener() with keydown

document.body.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === 'r') {
    playGame('Rock')
  } else if (key === 'p') {
    playGame('Paper');
  } else if (key === 's') {
    playGame('Scissor');
  } else if (key === 'a') {
    autoplay();
  } else if (key === "Backspace" || key === "Delete"){
    showResetConfirmation();
  }
});

function showResetConfirmation() {
  document.querySelector('.js-reset-confirmation').innerHTML = `
    Are you sure you want to reset the score?

    <button class = "js-reset-confirm-yes
      reset-confirm-button">
    Yes
    </button>

    <button class = "js-reset-confirm-no
      reset-confirm-button">
    No
    </button>
  `;

  document.querySelector('.js-reset-confirm-yes').addEventListener('click', () => {
    resetScore();
    hideResetConfirmation();
  });

  document.querySelector('.js-reset-confirm-no').addEventListener('click', () => {
    hideResetConfirmation();
  });
}

function hideResetConfirmation() {
  document.querySelector('.js-reset-confirmation').innerHTML = '';
}


document.querySelector('.js-auto-palying-button').addEventListener('click', () => {
  autoplay();
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissor') {
    if (computerMove === 'Rock') {
      result = 'You lose';
    } else if (computerMove === 'Scissor') {
      result = 'Tie !';
    } else if (computerMove === 'Paper') {
      result = 'You win';
    }

  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win !';
    } else if (computerMove === 'Scissor') {
      result = 'You lose';
    } else if (computerMove === 'Paper') {
      result = 'Tie !';
    }

  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie !';
    } else if (computerMove === 'Scissor') {
      result = 'You win';
    } else if (computerMove === 'Paper') {
      result = 'You lose';
    }
  }

  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.losses += 1;
  } else if (result === 'Tie !') {
    score.tie += 1;
  };

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = `${result}`;

  document.querySelector('.js-moves').innerHTML =
    `You
    
    <img src="images/${playerMove}-emoji.png" class="move-icons">
    <img src="images/${computerMove}-emoji.png" class="move-icons">

    Computer`;
  
  update();
  
  // document.querySelector('.js-update').innerHTML = `win: ${score.wins}, losses: ${score.losses}, tie: ${score.tie}`;

}

function pickComputerMove() {

  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissor';
  }
  return computerMove;
}
