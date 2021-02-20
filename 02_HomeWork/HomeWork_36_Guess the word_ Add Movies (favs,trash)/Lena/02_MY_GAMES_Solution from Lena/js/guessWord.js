const words = [
  ['apple', `it's a fruit`],
  ['mouse', `it's a small animal`],
  ['tomato', `it's a vegetable`],
  ['airplane', `it's a transport`],
  [`brownie`, `it's a delicious`]
],
  info = document.querySelector('#info'),
  startBtn = document.querySelector('#game_start'),
  userAnswer = document.querySelector('#userAnswer'),
  checkBtn = document.querySelector('#button'),
  key = 0,
  value = 1;

  let guessedWord = '',
      answerArray = [],
      remainingLetters,
      tryCounter;
   
start();  
startBtn.addEventListener('click', startGame);  
checkBtn.addEventListener('click', playGame);  
      
function start(){
  guessedWord = getGuessWord(words);
  answerArray = getAnswerArray(guessedWord);
  remainingLetters = guessedWord[key].length;
  tryCounter = 10;
  hide(userAnswer);
  hide(checkBtn);
  show(startBtn);
}

function getGuessWord(words){
  const randomIndex = Math.floor(Math.random() * words.length);
       // word = words[randomIndex];   
  return words[randomIndex];     
}

function getAnswerArray(word){
  const w = word[key];
  let answerArray = [];
  for(let i = 0; i<w.length; i++){
      answerArray[i] = '-';
  }
  return answerArray;
}

function hide(item){
  item.style.display = 'none';
}

function show(item){
  item.style.display = 'block';
}

function checkLetter(word, letter){
  let isLetterInWord = false;
  for(let i = 0; i< word.length; i++){
      if(word[i] === letter && answerArray[i] === '-'){
          answerArray[i] = letter;
          remainingLetters--;
          isLetterInWord = true;
      }
  }
  return isLetterInWord;
}

function startGame(){
  info.innerHTML = `My word is ${answerArray.length} letters<br> ${guessedWord[value]}. <br>
 <b> ${answerArray.join(' ')} </b> <br> enter the letter`;
 hide(startBtn);
 show(userAnswer);
 show(checkBtn);
 userAnswer.focus();
}

function playGame(){
  let guess = userAnswer.value;
  if(guess.length !==1){
      info.innerHTML = 'please enter one letter only';
      userAnswer.value = '';
  }else{
      tryCounter --;
      userAnswer.value = '';
      userAnswer.focus();
      if(tryCounter >= 0){
          info.innerHTML = checkLetter(guessedWord[key], guess) ? `Super! <br>
          <b> ${answerArray.join(' ')} </b><br> try to guess another one! ` : `There is not such 
          letter( <br><b> ${answerArray.join(' ')} </b><br>try again!`
      }else{
          info.innerHTML = 'Game over ( One more time?'
          start();
      }
      if(remainingLetters === 0){
          info.innerHTML = `<b style = 'font-size: 48px;'>${answerArray.join(' ')}</b><br>
          Super! You win!<br>One more time?`
          start();
      }

  }

}

