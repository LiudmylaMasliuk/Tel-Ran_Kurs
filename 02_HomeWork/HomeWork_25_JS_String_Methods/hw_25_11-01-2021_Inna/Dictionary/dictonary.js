
// Переписать метод checkUserTranslation, он должен показывать слова не по порядку 
// и если пользователь ввел правильный перевод - удалять слово из массива
// Когда слов в массиве не останется, если пользователь не сделал ни одной ошибки показывать сообщение - "Great job!"
// Если ошибки были - показывать число сделанных ошибок
// Спросить пользователя, хочет ли он перейти на следующий уровень? (сохранить ответ в переменной)

const words = [
  ['cat','кошка'],        // [0][0], [0][1]
  ['cow','корова'],       // [1][0], [1][1]
  ['dog','собака'],       // [2][0], [2][1]
  ['goat','коза'],        // [3][0], [3][1]
  ['bear','медведь'],     // [4][0], [4][1]
  ['mouse','мышь'],       // [5][0], [5][1] 
  ['pig','поросёнок'],
  ['bird','птица'], 
  ['fish','рыба'],            
];
       

const ru = 1,
      eng = 0;
let errors = checkUserTranslation();
let nextLevel = finalMessage(errors);
console.log(nextLevel);


function getRandomIndex(range){
    return Math.floor(Math.random() * range); 
  }

function getUserTranslation(index){
    return prompt(`How is the word ${words[index][eng]} translated?`)
}
function checkUserTranslation(){
    let errorCount = 0;
    while(words.length != 0){
        const index = getRandomIndex(words.length);
        const userTranslation = getUserTranslation(index);
        if(userTranslation === words[index][ru]){
        alert('Correct!');
        words.splice(index,1); // delete the correct element
    }else{
        alert(`Wrong! The correct answer is ${words[index][eng]}`);
        errorCount ++;
        } 
    }
    return errorCount;
}

function continueGame(){
    let cont = confirm('Would you like to continue the game?');
    return cont;
}
function finalMessage(errorCount){
    if(errorCount) alert('Great job!');
    else alert(`The number of your mistakes is ${errorCount}.`);
    continueGame();
}




