
// Переписать метод checkUserTranslation, он должен показывать слова не по порядку 
// и если пользователь ввел правильный перевод - удалять слово из массива
// Когда слов в массиве не останется, если пользователь не сделал ни одной ошибки показывать сообщение - "Great job!"
// Если ошибки были - показывать число сделанных ошибок
// Спросить пользователя, хочет ли он перейти на следующий уровень? (сохранить ответ в переменной)

const words = [
    ['food', 'еда'],
    ['bike', 'велосипед'],
    ['apple', 'яблоко'],
    ['do', 'делать'],
    ['mean', 'иметь в виду']
],
    ru = 1,
    eng = 0;

const errors = checkUserTranslation();
let nextLevel = finaleMessage(errors);  // let nextLevel = finaleMessage(checkUserTranslation());
console.log(nextLevel);

function checkUserTranslation(){
    let errorCount = 0;
    while(words.length != 0){
        const index = getRandomArrayIndex(words.length);
        const userTransaltion = getUserTranslation(index);
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

function getUserTranslation(index){
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

//Task01
// 'background-color' -> backgroundColor;
// 'list-style-image' -> listStyleImage;
// 

//Task 02
/* const users = [
    {name: 'Vasya', age: 25},
    {name: 'Anna', age: 24},
    {name: 'Masha', age: 18}
];

function getNames(arrayUsers){
    return arrayNames;
} 

getNames(users) -> ['Vasya','Anna','Masha'];

*/

