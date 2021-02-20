const productsDB = [
  {id: 1, title:'Ericsson T20', src: './img/ericsson-t20s-1000x1000.jpg', price: '70'},
  {id: 2, title:'Ericsson T65', src: './img/ericsson-t65-1000x1000.jpg', price: '300'},
  {id: 3, title:'Nokia 5210', src: './img/nokia-5210-1000x1000.jpg', price: '100'},
  {id: 4, title:'Nokia 6300', src: './img/nokia-6300-1000x1000.jpg', price: '110'},
  {id: 5, title:'Nokia 6310i', src: './img/nokia-6310i-1000x1000.jpg', price: '110'},
  {id: 6, title:'Nokia E5', src: './img/nokia-e5-1000x1000.jpg', price: '100'},
  {id: 7, title:'Nokia E63', src: './img/nokia-e63-1000x1000.jpg', price: '300'},
  {id: 8, title:'Siemens A50', src: './img/siemens-a50-1000x1000.jpg', price: '$80'},
  {id: 8, title:'Siemens A50', src: './img/siemens-a50-1000x1000.jpg', price: '$80'},
  {id: 8, title:'Siemens A50', src: './img/siemens-a50-1000x1000.jpg', price: '$80'},
  {id: 8, title:'Siemens A50', src: './img/siemens-a50-1000x1000.jpg', price: '$80'},
]

const cart = [];
//console.log(cart);
console.log(productsDB[0].id);
console.log(sortCart(productsDB));






const nav = document.querySelector('.nav'),
      root = document.querySelector('#root');

let currentPageLink = nav.querySelector('a[href="home"]');
renderHome();



nav.onclick = function(event){
  event.preventDefault();
  if(event.target.getAttribute('id') === 'homeBtn') renderHome();
  if(event.target.getAttribute('id') === 'cartBtn') renderCart();
  console.log(event.target);
}

function renderHome(){
  document.querySelector('#homeBtn').classList.add('active');
  document.querySelector('#cartBtn').classList.remove('active');
  root.innerHTML = '';
  root.className = 'products';

  for(let i = 0; i < productsDB.length; i++){
  const card = document.createElement('div'),
        title = document.createElement('h2'),
        img = document.createElement('img'),
        price = document.createElement('h3'),
        button = document.createElement('button');

    card.setAttribute('class', 'card');
    card.setAttribute('id', `${i}`);
    title.innerHTML = productsDB[i].title;
    title.className = 'item_title';
    img.setAttribute('src', `${productsDB[i].src}`);
    button.innerHTML = 'add to cart';
    price.innerHTML = productsDB[i].price;
    price.className = 'item_price';
    card.append(title,img,price,button);
    root.append(card);

    button.addEventListener('click', addToCart);
    
  }
}

function addToCart(event){
  let item = {title:'', price:'', count: 1};
  let parent = event.target.parentNode;
  item.title = parent.querySelector('.item_title').innerHTML;
  item.price = parent.querySelector('.item_price').innerHTML;
  cart.push(item);
}

function sortCart (array){
  temp = [];
  for(let index = 0; index < array.length; index++){
    if(array.indexOf(array[index].id) == index){
      temp.push(array[index]);
    }
  }
  return temp;
}






function renderCart(){
  document.querySelector('#homeBtn').classList.remove('active');
  document.querySelector('#cartBtn').classList.add('active');
  root.innerHTML = '';
  root.className = 'cart';

  if(cart.length === 0){
    const table = document.createElement('table'),
    heading = document.createElement('thead'),
    title = document.createElement('th'),
    price = document.createElement('th'),
    count = document.createElement('th'),
    total = document.createElement('th');

    title.className = 'title';
    price.className = 'price';
    count.className = 'count';
    total.className = 'total';

    title.innerHTML = 'Title';
    price.innerHTML = 'Price';
    count.innerHTML = 'Count';
    total.innerHTML = 'Total';
    heading.append(title,price,count,total);

    const itemBody = document.createElement('tbody'),
    itemRow = document.createElement('tr'),
    itemTitle = document.createElement('td'),
    itemPrice = document.createElement('td'),
    itemCount = document.createElement('td'),
    itemTotal = document.createElement('td');

    itemRow.append(itemTitle,itemPrice,itemCount,itemTotal);
    itemBody.append(itemRow);
    table.append(heading,itemBody);
    root.append(table);

  }else{
    const table = document.createElement('table'),
    heading = document.createElement('thead'),
    title = document.createElement('th'),
    price = document.createElement('th'),
    count = document.createElement('th'),
    total = document.createElement('th');

    title.className = 'title';
    price.className = 'price';
    count.className = 'count';
    total.className = 'total';

    title.innerHTML = 'Title';
    price.innerHTML = 'Price';
    count.innerHTML = 'Count';
    total.innerHTML = 'Total';
    heading.append(title,price,count,total);

    
    for(let i = 0; i < cart.length; i++){
      const itemBody = document.createElement('tbody'),
          itemRow = document.createElement('tr'),
          itemTitle = document.createElement('td'),
          itemPrice = document.createElement('td'),
          itemCount = document.createElement('td'),
          itemTotal = document.createElement('td');

      itemTitle.innerHTML = `${cart[i].title}`;
      itemPrice.innerHTML = `${cart[i].price}`;
      itemCount.innerHTML = `${cart[i].count}`;
      itemTotal.innerHTML = `${cart[i].total}`;

      itemRow.append(itemTitle,itemPrice,itemCount,itemTotal);
      itemBody.append(itemRow);
      table.append(heading,itemBody);
      root.append(table);
    }
  }
}
