const tabTitles = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabTitlesParent = document.querySelector('.tabheader__items');


function hideTabContent(){
  tabsContent.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show');
  });

  tabTitles.forEach(item => {
    item.classList.remove('tabheader__item_active');
  });
}

function showTabContent(index=0){ // default 0
  tabsContent[index].classList.add('show');
  tabsContent[index].classList.remove('hide');
  tabTitles[index].classList.add('tabheader__item_active');
}

tabTitlesParent.addEventListener('click', function(event){
  const target = event.target; // kuda kliknuli sohranit v peremennuju
  console.log(target);
  if(target && target.classList.contains('tabheader__item')){
    tabTitles.forEach((item, index) => {
      if(target === item){
        console.log(item);
        hideTabContent();
        showTabContent(index);
      }
    });
  }
});


hideTabContent();
showTabContent();


// modal

const modalTriggers = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');


modalTriggers.forEach((btn) => {
  if(btn.dataset.modal == 'bottom'){ 
    // dataset vozvrawaet vse data attributi, kotorie est u elementa
    btn.style.marginLeft = '35px';
    btn.style.marginTop = '35px';
  }
});

modalTriggers.forEach((btn) => {
  btn.addEventListener('click', function(){
    // modal.classList.add('show'); // dobav oknu modal class show
    // modal.classList.remove('hide'); // udali u okna modal class hide
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden'; // stop kadr
  });
});



function closeModal(){
  // modal.classList.add('hide'); // udali u okna modal class hide
  // modal.classList.remove('show'); // dobav oknu modal class show
  modal.classList.toggle('show');
  document.body.style.overflow = ''; // otmenim stop kadr
}

modal.addEventListener('click', function(event){
  if(event.target === modal || event.target === modalCloseBtn){
    closeModal();
  }
});

// 4tobi pri nazhatii na knopku 'escape' is4ezalo modalnoe okno
// event.key
// event.keycode --> ustarevwij metod
document.addEventListener('keydown', (event) =>{
  if(event.key === 'Escape' && modal.classList.contains('show')){
    closeModal();
  }
});