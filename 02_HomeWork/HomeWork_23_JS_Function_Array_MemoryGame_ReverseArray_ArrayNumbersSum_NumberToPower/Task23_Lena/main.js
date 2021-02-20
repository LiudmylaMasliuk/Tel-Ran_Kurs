const numbers = fillArrayRandomNumbers(5,100);
const maxQuestions = 3;
let checkError = true;

function getRandomRangeNumber(range){
    return parseInt(Math.random() * range);
}

function fillArrayRandomNumbers(length, range){
    let array =[];
    for(let i = 0; i<length; i++){
        array.push(getRandomRangeNumber(range));
    }
    return array;
}

function showMessage(numbers){
    alert('Remember the numbers and their order: ' + numbers);
}

function getUserAnswear(number){
    return +prompt(`What was the ${number} number?`);
}

function checkAnswear(number, userAnswear){
    if(userAnswear == number){
        alert('You right!')
    }else{
        alert('Wrong answear, right number is ' + number);
        checkError = false;
    }
}


/* const firstAnswear = getUserAnswear(1);
checkAnswear(numbers[0], firstAnswear);

const secondAnswear = getUserAnswear(numbers.length);
checkAnswear(numbers[numbers.length - 1], secondAnswear);

const thirdUserAnswear = getUserAnswear(randomIndex + 1 );
checkAnswear(numbers[randomIndex], thirdUserAnswear); */
 
function startGame(){
    showMessage(numbers);
    for(let i = 0; i < maxQuestions; i++){
        const randomIndex = getRandomRangeNumber(numbers.length);
        const UserAnswear = getUserAnswear(randomIndex + 1 );
        checkAnswear(numbers[randomIndex], UserAnswear);
    }
    if(checkError) alert(`You have a great memory!`);
}

startGame();

