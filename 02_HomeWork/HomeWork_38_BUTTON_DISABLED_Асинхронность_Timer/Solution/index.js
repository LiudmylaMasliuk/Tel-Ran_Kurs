const input = document.querySelector('#input'),
      startBtn = document.querySelector('#startBtn'),
      stopBtn = document.querySelector('#stopBtn'),
      result = document.querySelector('.result');

result.innerHTML = '';

let count;
let i;
input.focus();

startBtn.onclick = function(){
  count = parseInt(input.value);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  input.disabled = true;
  result.innerHTML = count;
  i = setInterval(function(){
    count--;
    if(count > 0){
    result.innerHTML = count; 
  }else{
    stopTimer();
    result.innerHTML = 'Time is over';
    input.value = '';
    input.focus();
  }
}, 1000);
}

function stopTimer(){
  clearInterval(i);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  input.disabled = false;
  if(count > 0){
  result.innerHTML = 'Time is stopped';
  input.value = count;
  }else{
    result.innerHTML = 'Time is over';
    input.value = '';
    input.focus();
  }
}

stopBtn.onclick = stopTimer;