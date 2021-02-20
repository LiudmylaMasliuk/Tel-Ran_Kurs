// Task01
//function powerNumber(3,2) -> 9
//function powerNumber(5,3) -> 125
const power = (a,b) => a**b;
console.log(power(2,3));

//a = 2; a = 2*2 ; 

function powerNumber(a,b){
    let result = 1;
    for(let i=0; i<b; i++){
        result *= a;
    }
    return result;
}

//const res = powerNumber(3,3);
console.log(powerNumber(3,3));


//Task02
const numbers = [2,3,4,5,6];
//function sumNumbers(numbers) -> 20;

function sumArrayNumbers(array){
    let sum = 0;
    for(number of array){      // for key in obejct
        sum += number;
    }
    //console.log(sum);
    return sum;
}

console.log(sumArrayNumbers(numbers));


//Task03
numbers = [2,3,4,5,6];
//function reversArray(numbers) -> [6,5,4,3,2]

// [1][2][3][4][5][6]   [6][5][4][3][2][1]

function reverseArray (array){
    for(let i = 0; i< array.length/2; i++){
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i ] = temp;
    }
}

reverseArray(numbers);
console.log(numbers);

function reverse(array){
    let res =[];
    for(let i = array.length - 1; i>=0; i--){
        res.push(array[i]);
    }
    return res;
}

const array = reverse(numbers);
console.log(array);

//console.log(reverse(numbers));