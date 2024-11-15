// Task 1 JS ASSIGNMENT 11

const positiveNumber = parseFloat(prompt("Enter a positive number:"));

alert(`Number: ${positiveNumber}`);
alert(`Round value: ${Math.round(positiveNumber)}`);
alert(`Floor value: ${Math.floor(positiveNumber)}`);
alert(`Ceil value: ${Math.ceil(positiveNumber)}`);


// Task 2

const negativeNumber = parseFloat(prompt("Enter a negative floating point number:"));

alert(`Number: ${negativeNumber}`);
alert(`Round value: ${Math.round(negativeNumber)}`);
alert(`Floor value: ${Math.floor(negativeNumber)}`);
alert(`Ceil value: ${Math.ceil(negativeNumber)}`);


// Task 3

const diceValue = Math.floor(Math.random() * 6) + 1;

alert(`The value of the dice roll is: ${diceValue}`);


// Task 4

const diceValues = Math.floor(Math.random() * 6) + 1;

alert(`The value of the dice roll is: ${diceValues}`);


// Task 5

const coinToss = Math.random() < 0.5 ? "Heads" : "Tails";

alert(`The result of the coin toss is: ${coinToss}`);


// Task 6

const randomNumber = Math.floor(Math.random() * 100) + 1;

alert(`Random number between 1 and 100: ${randomNumber}`);


// Task 7


const weightInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

const weight = parseFloat(weightInput.replace(/[^\d.-]/g, ''));

alert(`Your weight is: ${weight} kg`);


// Task 8

const secretNumber = Math.floor(Math.random() * 10) + 1;

const userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));

if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
} else {
    alert(`Sorry, the secret number was ${secretNumber}.`);
}
