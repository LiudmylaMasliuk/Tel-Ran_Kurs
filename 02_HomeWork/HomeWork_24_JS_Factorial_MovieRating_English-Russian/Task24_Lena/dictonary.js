//Task 03
// Написать игру в русско-английские слова
// пользователя спрашивают перевод английского слова, если ответ правильный - вывести сообщение
// "Отлично!" , если нет - правильный перевод слова
//Попробовать реализовать логику используя двухмерный массив; 

const words = [
    ['food', 'еда', 'Essen'],
    ['bike', 'велосипед', 'Fahrrad'],
    ['apple', 'яблоко', 'Apfel'],
    ['do', 'делать', 'machen'],
    ['mean', 'иметь в виду','meinen']
];

const indexRu = 1,
      indexDe = 2;


checkUserTranslation(2);

function checkUserTranslation(index){
    for(let i = 0; i< words.length; i++){
        const userTransaltion = getUserTranslation(i);
        if(userTransaltion === words[i][index]) alert('correct!');
        else alert(`wrong, correct answear is ${words[i][index]}`);
    }
}

function getUserTranslation(index){
    return prompt(`how is the word ${words[index][0]} translated?`)
}

