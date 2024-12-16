function play(playerChoice) {
    const choices = ['snake', 'water', 'gun'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === 'snake' && computerChoice === 'water') ||
        (playerChoice === 'water' && computerChoice === 'gun') ||
        (playerChoice === 'gun' && computerChoice === 'snake')
    ) {
        result = `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
    } else {
        result = `You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
    }

    document.getElementById('result').innerHTML = `You chose: ${capitalize(playerChoice)}<br>Computer chose: ${capitalize(computerChoice)}<br>${result}`;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
