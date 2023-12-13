
  let score = JSON.parse(localStorage.getItem('score')) || 
    {
    wins: 0,
    losses: 0,
    tie: 0
    };

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

    localStorage.setItem('score',JSON.stringify(score));

    alert(`You chose ${playerMove} and computer chose ${computerMove}, ${result} 
    win: ${score.wins}, losses: ${score.losses}, tie: ${score.tie}`);
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
