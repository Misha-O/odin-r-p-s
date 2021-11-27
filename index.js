const btnActions = document.querySelectorAll('[data-element]')
const playerSelectionContainer = document.getElementById('playerSelectionContainer')
const computerSelectionContainer = document.getElementById('computerSelectionContainer')
const computerScoreInfo = document.getElementById('computerScoreInfo')
const playerScoreInfo = document.getElementById('playerScoreInfo')
const textResult = document.getElementById('textResult')
const MAX_GAMES = 5
let computerScore = 0
let playerScore = 0

const computerPlay = () => {
    let selectedIndex = Math.floor(Math.random() * ['rock', 'paper', 'scissors'].length)
    let selectedOption = ['rock', 'paper', 'scissors'].splice(selectedIndex, 1).toString().toLowerCase()
    return selectedOption
}
const playRound = (event, computerSelection) => {
    let playerSelection = event.target.dataset.element
    playerSelectionContainer.innerText = playerSelection
    computerSelectionContainer.innerText = computerSelection
    
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        computerScore++
        computerScoreInfo.innerText = Number(computerScore)
        return (textResult.innerText = 'Fatality! You lost.')
    } else if (computerSelection === playerSelection) {
        return (textResult.innerText = 'Draw')
    } else {
        playerScore++
        playerScoreInfo.innerText = Number(playerScore)
        return (textResult.innerText = 'Congratulations! You won.')
    }
    
}

btnActions.forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (computerScore < MAX_GAMES && playerScore < MAX_GAMES) {
            playRound(e, computerPlay())
        } else {
            textResult.innerText = 'The winner is ' + (computerScore > playerScore ? 'computer' : 'player') + '. Please reload the page if you want to play again.'
        }
    })
})
