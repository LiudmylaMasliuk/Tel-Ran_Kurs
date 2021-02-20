function sumInput(){
    let numbers = [],
        sum = 0;

    while(true){
        const value = prompt('Enter the number, please');
        if(value ==='' || value === null || isNaN(value) || value === ' '){
            break;
        }
        numbers.push(+value);
    }
    for(let number of numbers){
        sum += number;
    }
    if(numbers.length == 0){
        return;
    }
    return sum;
}

function sumInput1(){
    let numbers = [];

    while(true){
        const value = prompt('Enter the number, please');
        if(value ==='' || value === null || isNaN(value) || value === ' '){
            break;
        }
        numbers.push(+value);
    }
    return sum(numbers);
}


function getAndCnangeInput(changeInput){
    let inputValues = [];

    while(true){
        const value = prompt('Enter the number, please');
        if(value ==='' || value === null || isNaN(value) || value === ' '){
            break;
        }
        inputValues.push(+value);
    }
    return changeInput(inputValues);
}


function sum(array){
    if(array.length == 0){
        return;
    }
    let sum = 0;
    for(let number of array){
        sum += number;
    }
    return sum;
}

function changeElementsInArray(array){
    let newArray =[];
    for(number of array){
        newArray.push(number *=2);
    }
    return newArray;
}



//alert(sumInput1());
//alert(sumInput2(changeElementsInArray));

/* alert(sumInput2(function(array){
    return `your input is ${array.join(', ')}`
})); */

//alert(sumInput2((array) => `your input is ${array.join(', ')}`));
 
//alert(sumInput2(array => array.map(item => item *2)));

//alert(sumInput2(array => array.filter(item => item %2 ==0)));
alert(sumInput2(array => array.reduce((sum, item) => sum + item )));

let arr = [1,2,10,12,8,7,15,3];
//arr.sort(compare);
arr.sort((a,b) => a - b);

/* function compare(a,b){
    if(a > b) return 1;
    if(b > a) return -1;
    if (a == b) return 0;
} */

function compare(a,b){
    return a - b; 
}
console.log(arr);

// Task01 
/* 
const users = [
    {name: 'Vasya', age: 25},
    {name: 'Anna', age: 24},
    {name: 'Masha', age: 18}   // firstName
];
 Отсортировать массив users по возрасту
 */

 //Task02
 // [1,5,8,2,4,6,9,3];
 //function filterRange(3, 6) -> [3,4,5,6]


//Task03
//отсортировать в порядке убывания [ 7,3,2,9,10 ] ->[10,9,7,3,2]
