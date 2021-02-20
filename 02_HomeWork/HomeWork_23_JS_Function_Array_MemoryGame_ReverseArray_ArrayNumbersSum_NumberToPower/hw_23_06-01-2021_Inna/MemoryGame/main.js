// // Memory training game

/* get random numbers in the range, that will insert later */
function getRandomRangeNumbers(range){             
    return parseInt(Math.random() * range);
}
/* get random index for the third question */
function getRandomIndex(array){     
    return parseInt(Math.random() * array.length);
}
/* fill array with random numbers */
function fillArrayRandomNumbers(length, range){  
    let array =[];
    for(let i = 0; i < length; i++){
        array.push(getRandomRangeNumbers(range));
    }
    return array;
}
/* Ask the user to memorize the numbers and their order */
function showMessage(array){
    alert('Memorize the numbers and their order: ' + numbers);
}
/* Ask the user for numbers  */
function getUserAnswer(number){
    return +prompt(`What was the number Nr. ${number} number?`);
}
/* Check if the user's answer is correct  */
function checkAnswer(number, userAnswer){
    if(userAnswer == number){
        alert('You are right!');
    }else{
        alert('Wrong answer! The right number is ' + number);
       checkError = false;
    }
}

// const numbers = fillArrayRandomNumbers(5,100);
// showMessage(numbers);
// const firstAnswer = getUserAnswer(1);
// checkAnswer(numbers[0], firstAnswer);
// const secondAnswer = getUserAnswer(numbers.length);
// checkAnswer(numbers[numbers.length - 1], secondAnswer);
// const randomIndex = getRandomIndex(numbers);
// const thirdUserAnswer = getUserAnswer(randomIndex + 1);
// checkAnswer(numbers[randomIndex], thirdUserAnswer);





/* The same game inside the function */

// The index is now randomly generated in every question.
// We also can determine a number of questions. 
// If all the user`s answers are correct, we say, that the user has a fantastic memory.

const numbers = fillArrayRandomNumbers(5,100); // create 5 random numbers from 0 - 100. 
const maxQuestions = 3; // number of questions (how many times the cycle works).
let checkError = true;
console.log(numbers); // if we`d like to see the random numbers in the console.
 
function startGame(){
    showMessage(numbers); // ask the use to memorize the numbers and their order.
    for(let i = 0; i < maxQuestions; i++){ // create a cycle
        const randomIndex = getRandomIndex(numbers); // create a random index (position of the number).
        const UserAnswer = getUserAnswer(randomIndex + 1); // ("+ 1" --> esli index = 0 --> number Nr. 1)
        checkAnswer(numbers[randomIndex], UserAnswer);
    }
    if(checkError) alert(`You have a fantastic memory!`);
}

startGame();