const tabTitles = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabTitlesParent = document.querySelector('.tabheader__items');

 function hideTabContent(){
     tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show');
     });
     
     tabTitles.forEach(item =>{
         item.classList.remove('tabheader__item_active');
     });
 }  

 function showTabContent(index=0){
     tabsContent[index].classList.add('show');
     tabsContent[index].classList.remove('hide');
     tabTitles[index].classList.add('tabheader__item_active');
 }

 tabTitlesParent.addEventListener('click', function(event){
     const target = event.target;
     console.log(target);
     if(target && target.classList.contains('tabheader__item')){
         tabTitles.forEach((item, i) =>{
            if(target === item){
                hideTabContent();
                showTabContent(i);
            }
         });
     }

 });
 
 hideTabContent();
 showTabContent();

 // modal

 const modalTriggers = document.querySelectorAll('[data-modal]'),
       modal = document.querySelector('.modal'),
       modalCloseBtn = document.querySelector('[data-close]');;
 
    modalTriggers.forEach((item)=>{
     console.log(item);
     if(item.dataset.modal == 'bottom'){
         item.style.marginLeft = '35px';
     }
 });

 modalTriggers.forEach(btn => {
    btn.addEventListener('click', function() {
        /* modal.classList.add('show');
        modal.classList.remove('hide'); */
        // Либо вариант с toggle - но тогда назначить класс в верстке
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
   /*  modal.classList.add('hide');
    modal.classList.remove('show'); */
    modal.classList.toggle('show');
    // Либо вариант с toggle - но тогда назначить класс в верстке
    document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) { 
        closeModal();
    }
});



