//[4][8][1][5][9][10][2];  -> [4][1][5][8][9][2] | [10]

//

/* function bubbleSort(array){
    for(let i = array.length -1 ; i>0; i--){
        for(let j = 0; j<i ;j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        console.log(array);
    }
} */

function bubbleSort(array){
    let swapped;
    do{
    swapped = false;
    //console.log(array);
    array.forEach((item, index)=>{
        if(item > array[index +1]){
            let temp = item;
            array[index] = array[index + 1];
            array[index +1] = temp;
            swapped = true;
        }
    })
    }while(swapped);   
}

const arr = [4,8,1,5,9,10,2,3,7,12,15,6];
bubbleSort(arr);
console.log(arr);

//[ 1, 2, 4, 5, 8, 9, 10 ];
let iteration = 0;

function binarySearch(array, number){
    let low = 0,
        high = array.length -1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(array[mid] === number){
            iteration++;
            return mid;
        }else if(array[mid] > number){
            iteration++;
            high = mid -1;
        }else{
            iteration++;
            low = mid +1;
        }
    } 
    return -1;   
}

console.log(binarySearch(arr, 1));
console.log(iteration);

//Task01 
// function sumDigitalNumber(123456567);  -> 39 -> 12 -> 3 (recursion)

// Task02
//function getDivisors(12) ->  [2,3,4,6];
//function getDivisors(15) ->  [3,5];
//function getDivisors(13) ->  '13 is prime';

//Task03 
// function getArrayNames(['Kolya', 'Mark', 'Anna', 'Misha M', '123']) -> ['Mark', 'Anna']; 
