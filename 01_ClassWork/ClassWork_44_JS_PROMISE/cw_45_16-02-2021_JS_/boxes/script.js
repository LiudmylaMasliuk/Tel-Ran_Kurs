upLoad();

function upLoad(){
  renderContent();
  dataBase();
}

function renderContent(){
  const btn = document.createElement('button');
  btn.innerHTML = 'click me';
  document.querySelector('.wrapper').append(btn);
  btn.onclick = onClickHandler;
}

function onClickHandler(){
  const wrapper = document.querySelector('.wrapper');
  const colors = JSON.parse(localStorage.getItem('colors'));
  for(let i = 0; i < 3; i++){
    const div = document.createElement('div');
    div.className = 'box';
    div.style.backgroundColor = colors[i];
    wrapper.prepend(div);
  }
}

function dataBase(){
  const colors = ['aquamarine', 'blue', 'lime']
  localStorage.setItem('colors', JSON.stringify(colors));
}



console.log(JSON.parse(localStorage.getItem('colors')));