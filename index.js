const MAX_GAMES = 4
let counter = 0

const computerPlay = () => {
    const OPTIONS = ['rock', 'paper', 'scissors']
    let selectedIndex = Math.floor(Math.random() * OPTIONS.length)
    let selectedOption = OPTIONS.splice(selectedIndex, 1).toString().toLowerCase()
    return selectedOption
}

const playerPlay = () => {
    const USER_CHOICE = prompt('Which is it, rock, paper or scissors ?').toLowerCase().trim()

    if (USER_CHOICE === 'rock' || USER_CHOICE === 'paper' || USER_CHOICE === 'scissors') {
        return USER_CHOICE
    }

    alert('Error, you can only choose between: rock, paper, scissors')
    return false
}

function playRound(computerSelection, playerSelection) {
switch (key) {
    case value:
        
        break;

    default:
        break;
}
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        return 'Fatality!'
    } else if (
        (computerSelection === playerSelection)) {
        return 'Tie'
    } else {
        return "Winner"
    }
}
while (counter <= MAX_GAMES) {
    counter++
    console.log(playRound(computerPlay(), playerPlay()));
}
