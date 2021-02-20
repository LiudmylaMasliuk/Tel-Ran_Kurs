const size15Btn = document.querySelector('#size15'),
      size25Btn = document.getElementById('size25'),
      size35Btn = document.getElementById('size35'),
      redBtn = document.getElementById('redBtn'),
      greenBtn = document.getElementById('greenBtn'),
      blueBtn = document.getElementById('blueBtn'),
      topText = document.querySelector('.topText');

      console.log(redBtn);
      let currentColor = 'black';
      let currentSize = '15px';

      size15Btn.onclick = function(){
          //topText.style.fontSize = 'font-size: 15px';
          currentSize = '15px';
          topText.style = `font-size: ${currentSize}; color: ${currentColor};`
      }

      size25Btn.onclick = function(){
        topText.style.fontSize = '25px';
    }

    size35Btn.onclick = function(){
        topText.style.fontSize = '35px';
    }

    redBtn.onclick = function(){
        topText.style.color = 'color: red';
    }

    greenBtn.onclick = function(){
        topText.style.color = 'green';
    }

    blueBtn.onclick = function(){
        topText.style.color = 'blue';
    }

    const inpSize = document.querySelector('#inpSize'),
          inpColor = document.querySelector('#inpColor'),
          setSizeBtn = document.querySelector('#setSizeBtn'),
          setColorBtn = document.querySelector('#setColorBtn'),
          bottomText = document.querySelector('.bottomText');

    function updateBottomText(){
        bottomText.style = `font-size: ${inpSize.value}px; color: ${inpColor.value}`;
    }

    setColorBtn.onclick = updateBottomText;
    setSizeBtn.onclick = updateBottomText;

    const sumInpOp1 = document.querySelector('#sumOp1'),
          sumInpOp2 = document.querySelector('#sumOp2'),
          subInpOp1 = document.querySelector('#subOp1'),
          subInpOp2 = document.querySelector('#subOp2'),
          multiInpOp1 = document.querySelector('#multiOp1'),
          multiInpOp2 = document.querySelector('#multiOp2'),
          divInpOp1 = document.querySelector('#divOp1'),
          divInpOp2 = document.querySelector('#divOp2'),
          addBtn = document.querySelector('#addBtn'),
          subBtn = document.querySelector('#subBtn'),
          multiBtn = document.querySelector('#multiBtn'),
          divBtn = document.querySelector('#divBtn'),
          sumRes = document.querySelector('#sumRes'),
          subRes = document.querySelector('#subRes'),
          multiRes = document.querySelector('#multiRes'),
          divRes = document.querySelector('#divRes');

    addBtn.onclick = function(){
        sumRes.innerHTML = Number(sumInpOp1.value) + parseFloat(sumInpOp2.value);
    }

    subBtn.onclick = function(){
        subRes.innerHTML = subInpOp1.value - subInpOp2.value;
    }

    multiBtn.onclick = function(){
        multiRes.innerHTML = multiInpOp1.value * multiInpOp2.value;
    }

    divBtn.onclick = function(){
        divRes.innerHTML = divInpOp1.value / divInpOp2.value;
    }


    const inpText = document.querySelector('#inpText'),
          checkBtn = document.querySelector('#checkButton'),
          result = document.querySelector('#result');

    
   function isPalindrom(value){
       value = value.toLowerCase();
       for(let i=0, j = value.length-1; i<j; i++, j--){
           if(value[i] !== value[j]){     //value.charAt(i) !== value.charAt(j)
               return false;
           }
       }
       return true;
   }

    checkBtn.onclick = function(){
       if(isPalindrom(inpText.value)){   //abbat  //  
           result.innerHTML = 'Palindrom!';
           result.style.color = 'green';
       }else{
        result.innerHTML = 'Not a Palindrom!';
        result.style.color = 'red';
       }
   } 

   /* checkBtn.onclick = function(){
        result.innerHTML = isPalindrom(inpText.value)? 'Palindrom!':'Not a Palindrom!';
     
} */

const counter = document.querySelector('#counter'),
      numberOfClick = document.querySelector('#numberOfClick');
let count = 0;

counter.onclick = function(){
    count++;
    numberOfClick.innerHTML = `click: ${count}`;
}
