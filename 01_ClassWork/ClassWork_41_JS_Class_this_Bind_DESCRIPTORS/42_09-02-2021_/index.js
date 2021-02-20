const timerInput = document.querySelector('#timerInput'),
      result = document.querySelector('#result'),
      startBtn = document.querySelector('#startBtn'),
      stopBtn = document.querySelector('#stopBtn');

result.style.display = 'none';
/* 
const timer = new Timer(0); */ // {count:0, interval:null}


const timer = new Timer(0, onUpdate, onStop);

startBtn.onclick = function(){
  const input = parseInt(timerInput.value);
  timer.count = input;
  timer.start();
  timerInput.style.display = 'none';
  result.style.display = 'block';
}

/* stopBtn.onclick = function(){
  timer.stop();
} */

stopBtn.onclick = timer.stop.bind(timer);


function onUpdate(count){
  result.innerHTML = count;
}

function onStop(count){
  timerInput.value = count;
  result.style.display = 'none';
  timerInput.style.display = 'block';
}