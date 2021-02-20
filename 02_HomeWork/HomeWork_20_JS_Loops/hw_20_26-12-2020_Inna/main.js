//Task01 
/* Конвертер валют
    Запросить у пользователя сумму в рублях
    Конвертировать эту сумму в евро и в доллары
    Вывести результат на экран
*/


// converter:
// while(true){
//     var rub = prompt('Enter your amount in RUB. \nExit > cancel.');

//     while(isNaN(rub) || rub === ''){
//         rub = prompt('Please, enter a correct amount.\nExit > cancel.');
//     }
//     if(rub === null)break converter;
//     var eur = +rub * 0.011;
//     var dollar = +rub * 0.014;
//     alert('Your amount in EUR = ' + eur.toFixed(2));
//     alert('Your amount in US-Dollar = ' + dollar.toFixed(2));
// }





//Task02
/* Игра угадай число
    Случайным образом "загадать" число в диапозоне от 0 до ста
    Предложить пользователю угадать это число
        если введенный ответ больше загаданного числа - вывести сообщение: "загаданное число меньше"
        если ответ меньше - "загаданное число больше"
        если пользователь угадал - "поздравляю, вы выиграли!"
    У пользователя должно быть 5 попыток, после неудачной попытки должно выводиться 
    на экран предложение ввести число еще раз, в этом сообщение указывается сколько попыток осталось.
    Если за пять попыток пользователь не угадал число - вывести сообщение: "Вы проиграли, число было:..."
    
    * Задание со зведочкой для этой игры
    Сделать вариант этой игры для двух игроков и бесконечным числом попыток. 
    Сделайте возможность выйти из игры по желанию одного из игроков.   
 */



// let number = parseInt(Math.random() * 100);
// let input = prompt('Угадай целое число от 0 до 100. Осталось попыток: 5' + '\nВыход > cancel.' );


// game:
// for(let i = 4; i > 0;){
//     while(isNaN(input) || input < 0 || input === ''){
//         input = prompt('Ошибка ввода. Введите число от 0 до 100.\nВыход > cancel.');
//     }
//     if(input === null){
//         alert('Пока! Число было: ' + number);
//         break game; 
//     }else if(input > number){
//         input = prompt('Загаданное число меньше. Осталось попыток: ' + i-- + '\nВыход > cancel.');
//     }else if(input < number){
//         input = prompt('Загаданное число больше. Осталось попыток: ' + i-- + '\nВыход > cancel.');
//     }else{
//         alert('Поздравляю, вы выиграли!');
//         break game;
//     }
//         if(i === 0){
//         alert('Вы проиграли, число было: ' + number);
//     } 
// }



/* ************** Задание со зведочкой для этой игры ************** */

// let number = parseInt(Math.random() * 100);
// let input1;
// let input2; 

// game:
// while(true){
//     input1 = prompt('Игрок 1, угадайте число от 0 до 100.\nДля выхода нажмите Cancel.');
//         while(isNaN(input1) || input1 < 0 || input1 === ''){
//             input1 = prompt('Ошибка ввода. Введите число от 0 до 100.\nДля выхода нажмите Cancel.');
//         }
//         if (input1 === null){
//             alert('Пока! Число было: ' + number);
//             break game;
//         }else if(input1 > number){
//             alert('Игрок 1, Загаданное число меньше.');
//         }else if(input1 < number){
//             alert('Игрок 1, Загаданное число больше.');
//         }else{
//             alert('Игрок 1, Поздравляю, вы выиграли!');
//             break game;
//         }

//     input2 = prompt('Игрок 2, угадайте число от 0 до 100.\nДля выхода нажмите Cancel.');
//         while(isNaN(input2) || input2 < 0 || input2 === ''){
//             input2 = prompt('Ошибка ввода. Введите число от 0 до 100.\nДля выхода нажмите Cancel.');
//         }
//         if (input2 === null){
//             alert('Пока! Число было: ' + number);
//             break game;
//         }else if(input2 > number){
//             alert('Игрок 2, Загаданное число меньше.');
//         }else if(input2 < number){
//             alert('Игрок 2, Загаданное число больше.');
//         }else{
//             alert('Игрок 2, Поздравляю, вы выиграли!');
//             break game;
//         }

// }

const guessNumber = parseInt(Math.random() * 100);
let playerNumber = 1;
while(true){
    let userAnswer = prompt(`Guess the number.\nTurn player ${playerNumber}\nTo exit enter "q"`);
    if(userAnswer == 'q'){
        alert(`Guess the number ${guessNumber}`)
        break;
    }
userAnswer = parseInt(userAnswer)
    if(guessNumber == userAnswer){
        alert(`You won! The winner is ${playerNumber}`);
        break;
    }else if(userAnswer > guessNumber){
        alert('too big');
    }else if(userAnswer < guessNumber){
        alert('too small')
    }
// to switch the players
    if(playerNumber ==1){
        playerNumber=2;
    }else{
        playerNumber=1;
    }

}








    



