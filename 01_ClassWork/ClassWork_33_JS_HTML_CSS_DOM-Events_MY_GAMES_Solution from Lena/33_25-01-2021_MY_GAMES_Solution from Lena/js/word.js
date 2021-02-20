const info = document.querySelector('#info'),
      userAnswer = document.querySelector('#userAnswer'),
      inputBtn = document.querySelector('#button'),
      box = document.querySelector('.box'),
      letter = document.createElement('input'),  //<input>
      checkBtn = document.createElement('a');   //<a></a>

      // apple   - - - - -

let answerArray = [],
    word,
    remainingLetters,
    inputLetter;

function getAnswerArray(){
    const answerArray = [];
    for(let i =0; i<userAnswer.value.length; i++){
        answerArray[i] = '-';
    }
    return answerArray;
} 

function checkLetter(word, letter){    // mama , m
    let letterContains = false;
    for(let i = 0; i<word.length; i++){
        if(word[i]=== letter && answerArray[i] ==='-'){
            answerArray[i] = letter;
            remainingLetters--;
            letterContains = true;
        }
    }
    return letterContains;
}

function startGame(){
    word = userAnswer.value;             // if('')console.log('hello')
    if(!word) alert ('enter a word, please');
    else {remainingLetters = word.length;
    answerArray = getAnswerArray();
    info.innerHTML = `Your word is ${answerArray.length} letters<br>
    <p style = 'font-size: 48px;'>${answerArray.join('')}</p><br>
    enter a letter`;
    userAnswer.remove();
    inputBtn.remove();
    letter.type = 'text';
    letter.setAttribute('id', 'letter');
    box.append(letter);
    checkBtn.href = '#';
    checkBtn.innerText = 'check';
    checkBtn.id = 'checkBtn';
    box.append(checkBtn);
    }
}

function playGame(){
    inputLetter = letter.value;
    if(checkLetter(word, inputLetter)){
        info.innerHTML = `Super! <br>
        <p style = 'font-size: 48px;'>${answerArray.join('')}</p><br>
        one more letter?`;
        if(remainingLetters == 0){
            info.innerHTML = `Super! <br>
        <p style = 'font-size: 48px;'>${answerArray.join('')}</p><br>
        The end )))`;
        letter.remove();
        checkBtn.remove();
        }
        letter.value = '';
    }else{
        info.innerHTML = `No such letter <br>
        <p style = 'font-size: 48px;'>${answerArray.join('')}</p><br>
        one more letter?`;
        letter.value = '';
    }
}

inputBtn.addEventListener('click', startGame);   
inputBtn.addEventListener('click', function(){
    console.log('game start');
});
checkBtn.addEventListener('click', playGame);