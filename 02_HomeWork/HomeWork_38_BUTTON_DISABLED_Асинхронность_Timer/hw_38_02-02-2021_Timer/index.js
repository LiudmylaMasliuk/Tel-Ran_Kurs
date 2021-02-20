const input = document.querySelector('.display'),
      startBtn = document.querySelector('#start'),
      stopBtn = document.querySelector('#stop'),
      message = document.querySelector('.message');



startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click',  actStart);

function startTimer(){
  let num = input.value;
  const id = setInterval(counter, 1000);

  function counter(){
    if(input.value <= 0){
      clearInterval(id);
      num = 0;
      input.value = `${num}`;
      message.innerHTML = 'Time is over';
    }else if(input.value > 0){
    num--;
    message.innerHTML = '';
    stopBtn.addEventListener('click', function(){
        clearInterval(id);
        input.value = `${num}`;
        message.innerHTML = input.value;
        actStop();
        disStart();
    });
    startBtn.addEventListener('click', function(){
      actStart();
      disStop();

    });
    input.value = `${num}`;
    }
  }
}


function actStart(){
  startBtn.className = '';
  startBtn.className = 'act_start';
}

function disStart(){
  startBtn.className = '';
  startBtn.className = 'inact_start';
}

function actStop(){
  stopBtn.className = '';
  stopBtn.className = 'act_stop';
}

function disStop(){
  stopBtn.className = '';
  stopBtn.className = 'inact_stop';
}






