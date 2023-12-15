// Function to generate the computer's choice (rock, paper, or scissors)
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Check for valid player selection
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        alert('Invalid choice. Please choose rock, paper, or scissors.');
        return playRound(prompt('Enter your choice: rock, paper, or scissors'), getComputerChoice());

    }

    // Display player and computer choices
    console.log(`Player chooses ${playerSelection}`);
    console.log(`Computer chooses ${computerSelection}`);

    // Determine the winner of the round
    if (playerSelection === computerSelection.toLowerCase()) {
        // It's a tie, re-play the round
        console.log('It\'s a tie! Re-play the round.');
        alert('It\'s a tie! Re-play the round.')
        return playRound(prompt('Enter your choice: rock, paper, or scissors'), getComputerChoice());
    } else if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        // Player wins
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        // Computer wins
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Function to play the game
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice: rock, paper, or scissors');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        alert(playRound(playerSelection, computerSelection))
    }
}

// Start the game
game();