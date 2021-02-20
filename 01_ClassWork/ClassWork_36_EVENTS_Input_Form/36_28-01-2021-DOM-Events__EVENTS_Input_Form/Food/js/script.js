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
