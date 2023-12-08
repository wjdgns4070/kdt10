const numberDisplay = document.getElementById('number-display');
const userInput = document.getElementById('answer');
const feedback = document.getElementById('feedback');

let gameNumbers;
let timer;

function startGame() {
    gameNumbers = generateRandomNumbers();
    displayNumbers(gameNumbers);
    timer = setTimeout(() => {
        clearDisplay();
        userInput.removeAttribute('disabled');
        userInput.focus();
    }, 100);
}

function generateRandomNumbers() {
    const numbers = [];
    for (let i = 1; i <= 9; i++) {
        numbers.push(i);
    }
    return numbers.sort(() => Math.random() - 0.5).slice(0, 3); // Display 3 random numbers
}

function displayNumbers(numbers) {
    numberDisplay.textContent = numbers.join(', ');
}

function clearDisplay() {
    numberDisplay.textContent = '';
}

function checkAnswer() {
    clearTimeout(timer);
    userInput.setAttribute('disabled', true);

    const userAnswer = userInput.value
        .split(',')
        .map(num => parseInt(num.trim(), 10))
        .filter(num => !isNaN(num));

    const correctNumbers = gameNumbers.filter(num => userAnswer.includes(num));
    
    displayFeedback(correctNumbers);
}

function displayFeedback(correctNumbers) {
    feedback.textContent = `You remembered ${correctNumbers.length} number(s) correctly!`;

    // Reset the game after a delay
    setTimeout(() => {
        feedback.textContent = '';
        userInput.value = '';
        startGame();
    }, 2000);
}

// Start the game when the page loads
window.onload = startGame;
