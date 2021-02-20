//Task 01
//Max sum sub array
const arr = [10,2,4,-18,9,5]  //18 // 20 // 6 // 7  // 106

function getMaxSubSum(arr){
    let carrentSum = 0;
    let maxSum = 0;
    for(let item of arr){
        carrentSum += item;
        maxSum = Math.max(maxSum, carrentSum);
        if(carrentSum<0){
            carrentSum = 0;
        } 
    }
    return maxSum;
}

function findMaxNumber(a,b){
   /*  if (a>b){
        return a;
    }else{
        return b;
    } */
    return (a>b)? a:b;
}

arr = [10,2,4,-18,9,5];

function checkArrayLength(arr){
    return arr.length == 5;
}

console.log(checkArrayLength(arr));

console.log(getMaxSubSum(arr));

//
//Task 02
//factorial
// 5!  -> 1*2*3*4*5    function factorial(5);
function factorial(n){
    let result = 1;
    if(n == 0 || n == 1) return result;
    for (let index = 2; index <= n; index++) {
        result *= index;     
    }
    return result;
}

