//Max sum sub array

//arr = [2,4,-8,9,11];

// 2
// 2 + 4
// 2 + 4 + (-8)
// 2 + 4 + (-8) + 9
// 2 + 4 + (-8) + 9 + 11

// 4
// 4 + (-8)
// 4 + (-8) + 9
// 4 + (-8) + 9 + 11

// (-8) + 9
// (-8) + 9 + 11

// 9
// 9 + 11

// 11


// Math.max (maxSum, subArraySum);

arr = [2,4,-8,9,11];
function getSum(array){
  let maxSum = 0;
  let subArraySum = 0;
  for(let number of array){
    subArraySum += number;
    maxSum = Math.max(maxSum,subArraySum);
    if(subArraySum < 0){
      subArraySum = 0;
    }
  }
  return maxSum;
}
console.log(getSum(arr));

