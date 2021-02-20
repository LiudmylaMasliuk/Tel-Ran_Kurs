// const array = [           //  key    value
//   ['cat','кошка'],        // [0][0], [0][1]
//   ['cow','корова'],       // [1][0], [1][1]
//   ['dog','собака'],       // [2][0], [2][1]
//   ['goat','коза'],        // [3][0], [3][1]
//   ['bear','медведь'],     // [4][0], [4][1]
//   ['mouse','мышь'],       // [5][0], [5][1]        
// ]                         
//                       // [index][0], [index][1] 

//                        // array.lenght = 6
// let checkError = true;

// /* Задаём пользователю вопрос  */
// function getAnswer(array,index){
//     return prompt(`What is the russian word for ${array[index][0]}?`);
//   }
//   /* Сверяем его ввод с правильным ответом (value)  */
// function checkAnswer(answer,array,index){
//   if(answer === array[index][1]){
//     alert(`Right!`);
//   }else{
//     alert(`Wrong! The right word is ${array[index][1]}.`);
//     checkError = false;
//   }
// }

// function startGame(){           
//   for (let i = 0; i < array.length - 1; i++){
//     const answer = getAnswer(array,i);          // cat --> cow --> dog --> goat --> bear --> mouse
//     checkAnswer(answer,array,i);
//   }
//   if(checkError) alert(`Your English is fantastic!!!`);
// }

// startGame();



const words = [        
  ['food','еда', 'Essen'],        
  ['bike','велосипед', 'Fahrrad'],       
  ['apple','яблоко', ' Apfel'],      
  ['do','делать','machen'],      
] 

const indexRu = 1,
      indexDe = 2;

checkUserTranslation(2);

function checkUserTranslation(languageIndex){
  for(let i = 0; i < words.length; i++){
    const userTranslation = getUserTranslation(i);
    if(userTranslation === words[i][languageIndex]) alert ('Correct!')
    else alert (`wrong! The correct answer is ${words[i][languageIndex]}`)
  }
}

function getUserTranslation(index){
  return prompt(`What is the russian word for ${words[index][0]}?`)
}
























