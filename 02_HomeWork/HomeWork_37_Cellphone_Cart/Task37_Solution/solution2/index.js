const products = [
    {id: 1, title: 'Ericsson T20', price: 70, url: '../img/ericsson-t20s-1000x1000.jpg'},
    {id: 2, title: 'Ericsson T65', price: 300, url: '../img/ericsson-t65-1000x1000.jpg'},
    {id: 3, title: 'Nokia 5210', price: 100, url: '../img/nokia-5210-1000x1000.jpg'},
    {id: 4, title: 'Nokia 6300', price: 110, url: '../img/nokia-6300-1000x1000.jpg'},
    {id: 5, title: 'Nokia 6310i', price: 110, url: '../img/nokia-6310i-1000x1000.jpg'},
    {id: 6, title: 'Nokia E5', price: 100, url: '../img/nokia-e5-1000x1000.jpg'},
    {id: 7, title: 'Nokia E63', price: 300, url: '../img/nokia-e63-1000x1000.jpg'},
    {id: 8, title: 'Siemens A50', price: 80, url: '../img/siemens-a50-1000x1000.jpg'},
  ],
     cart = [],
     nav = document.querySelector('.nav'),
     root = document.querySelector('#root');
let currentPageLink = nav.querySelector('a[href = "home"]');

renderHome();

nav.onclick = function(event){
    event.preventDefault();
    if(event.target.tagName ==='A'){
        if(event.target.getAttribute('href') !== currentPageLink.getAttribute('href')){
            currentPageLink.classList.remove('active');
            currentPageLink = event.target;
            currentPageLink.classList.add('active');
            navigation(currentPageLink.getAttribute('href'));
        }
    }
}

function navigation(path){
    switch(path){
        case 'home' : renderHome(); break;
        case 'cart' : renderCart(); break;
    }
}

function renderHome(){
    root.className = 'products';
    root.innerHTML = products.map(card).join('');
    root.onclick = addToCartClickHandler;
}

function renderCart(){
    root.className = 'cart';
    root.innerHTML = `
    <table>
        <thead>
        <th class="title">title</th>
        <th class="price">price</th>
        <th class="count">count</th>
        <th class="total">total</th>
        </thead>
        <tbody>
          ${cart.map(cartRow).join('')} 
        </tbody>
    </table>
    <div class="totalPrice">Total: ${
        cart.reduce(function (acc, item){return acc + item.price * item.count},0) 
    }</div>
    `;
    root.onclick = null;
}

function addToCartClickHandler(event){
    if(event.target.tagName === 'BUTTON'){
        let item = cart.find(function(product){
            return product.id === parseInt(event.target.dataset.id);
        });
        if(item){
            item.count++;
        }else{
            let product = products.find(function(item){
                return item.id === parseInt(event.target.dataset.id);
            });
            cart.push({
                id : product.id,
                title: product.title,
                price: product.price,
                count: 1
            });
        }    

    }
}

function cartRow(productCart){
    return `
    <tr>
        <td>${productCart.title}</td>
        <td>${productCart.price} $</td>
        <td>${productCart.count}</td>
        <td>${productCart.price * productCart.count} $</td>
    </tr>
    `
}

function card(product){
    return `
    <div class="card">
        <h2>${product.title}</h2>
        <img src="${product.url}" alt="">
        <h3>${product.price} $</h3>
        <button data-id = "${product.id}">Add to cart</button>
    </div>
    `
}