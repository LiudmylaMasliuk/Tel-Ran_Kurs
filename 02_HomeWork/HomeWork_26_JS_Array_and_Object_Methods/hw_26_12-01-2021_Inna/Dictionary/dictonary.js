
// Переписать метод checkUserTranslation, он должен показывать слова не по порядку 
// и если пользователь ввел правильный перевод - удалять слово из массива
// Когда слов в массиве не останется, если пользователь не сделал ни одной ошибки показывать сообщение - "Great job!"
// Если ошибки были - показывать число сделанных ошибок
// Спросить пользователя, хочет ли он перейти на следующий уровень? (сохранить ответ в переменной)

const easyWords = [
    ['food', 'еда'],
    ['bike', 'велосипед'],
    ['apple', 'яблоко'],
    ['do', 'делать'],
    ['mean', 'иметь в виду']
],
    complexWords = [
    ['food', 'еда'],
    ['bike', 'велосипед'],
    ['apple', 'яблоко'],
    ['do', 'делать'],
    ['mean', 'иметь в виду']

],
    ru = 1,
    eng = 0;

levels = [easyWords, complexWords];

startGame(levels);

function startGame(array){
    for(i = 0; i < array.length; i++){
        const errors = checkUserTranslation(array[i]);
        const nextLevel = finaleMessage(errors);
        if(!nextLevel) break;
    }
}
function checkUserTranslation(words){
    let errorCount = 0;
    while(words.length != 0){
        const index = getRandomArrayIndex(words.length);
        const userTransaltion = getUserTranslation(index,words);
        if(userTransaltion === words[index][ru]){
             alert('correct!');
             words.splice(index,1);
        }else{ 
            alert(`wrong, correct answear is ${words[index][ru]}`);
            errorCount ++;
        }
    }
    return errorCount;
}

function getUserTranslation(index, words){
    return prompt(`how is the word ${words[index][eng]} translated?`)
}

function getRandomArrayIndex(range){
    return Math.floor(Math.random() * range);
}

function finaleMessage(errorCount){
    if(errorCount == 0) alert('Great job!');
    else alert(`you were wrong ${errorCount} times.`);
    return confirm('One more time?');
}