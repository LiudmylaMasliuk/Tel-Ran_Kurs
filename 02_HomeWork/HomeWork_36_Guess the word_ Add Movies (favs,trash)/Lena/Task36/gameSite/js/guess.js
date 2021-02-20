const input = document.querySelector('#userAnswer'),
      checkBtn = document.querySelector('#button'),
      repeatBtn = document.querySelector('#repeatBtn'),
      maxTryCount = 5;

let tryCount = 0,
    guessNumber = parseInt(Math.random() *101),
    guessedNumber = false;

function changeInfo(text){
    document.querySelector('#info').innerHTML = text;
}

function hide(item){
    item.style.display = 'none';
}

hide(repeatBtn);

function show(item){
    item.style.display = 'block';
}

function finalyMessage(isGuessed = false){
    if(tryCount ===0){
        gameResult(`We'll play another time.`);
    }else if(isGuessed){
        gameResult('You winn!!!');
    }else{
        gameResult(`You lost( <br>correct answer: ${guessNumber}`);
    }
}


function gameResult(text){
    hide(checkBtn);
    hide(input);
    changeInfo(text);
    show(repeatBtn);
}

checkBtn.onclick = function guess(){
    console.log(guessNumber);
    const userAnswer = input.value;
    tryCount++;
    if(userAnswer==='q'){
        tryCount = 0;
        return finalyMessage();
    }
    else if(userAnswer == guessNumber){
        isGuessed = true;
        return finalyMessage(isGuessed);
    }
    else if(tryCount === maxTryCount){
       return finalyMessage();

    }else{
        changeInfo(`the number is to ${userAnswer>guessNumber ? 'big' : 'small'} 
        <br> try again. you have ${maxTryCount - tryCount} more attempts.`);
        input.value = '';
    }
}

    repeatBtn.onclick = function(){
        guessNumber = parseInt(Math.random() * 101);
        tryCount = 0;
        input.value = "";
        hide(repeatBtn);
        show(checkBtn);
        show(input);
        changeInfo(`Guessed number is grater than 0, but less than 100<br>To exit enter 'q'`);
    }




