const productsDiv = document.querySelector('.products'),
      cartDiv = document.querySelector('.cart'),
      homeBtn = document.querySelector('#homeBtn'),
      cartBtn = document.querySelector('#cartBtn');

cartDiv.style.display = 'none';

homeBtn.onclick = function(event){
  event.preventDefault(); // 4tobi ne perehodil po ssilkam, tak kak eto zadano po umol4aniju
  cartBtn.className = ''; // ubiraem imja klassa (active) // 4erez className --> ustarevwij metod --> ispolzovat lu4we classList
  homeBtn.className = 'active'; // dobavljaem imja klassa (active)
  cartDiv.style.display = 'none';
  productsDiv.style.display = 'flex';

}

cartBtn.onclick = function(event){
  event.preventDefault();
  cartBtn.className = 'activ';
  homeBtn.className = '';
  cartDiv.style.display = 'block';
  productsDiv.style.display = 'none';
}