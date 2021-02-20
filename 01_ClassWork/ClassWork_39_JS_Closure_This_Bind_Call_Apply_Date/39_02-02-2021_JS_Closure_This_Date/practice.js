const cards = document.querySelectorAll('.card');

/* for(let i = 0; i < cards.length; i++){
  cards[i].onclick = toggleBorder;
} */
/* cards.forEach(function (btn) {btn.onclick = toggleBorder}); */

cards.forEach((btn) => btn.onclick = toggleBorder);


// function toggleBorder(event){
//   event.target.classList.toggle('my-border');
// }

///////////////////////////////
///// event.target = this /////
///////////////////////////////

function toggleBorder(){
  this.classList.toggle('my-border');
}

setInterval(function(){
  const rnd = parseInt(Math.random() * cards.length);
  // cards[rnd].classList.toggle('my-border');
  toggleBorder.call(cards[rnd]);

}, 500);