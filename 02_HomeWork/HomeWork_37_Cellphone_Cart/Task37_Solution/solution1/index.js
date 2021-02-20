const cart =[],  //{title: Nokia, price: 100, count:1}
      productsDiv = document.querySelector('.products'),
      cartDiv = document.querySelector('.cart'),
      homeBtn = document.querySelector('#homeBtn'),
      cartBtn = document.querySelector('#cartBtn'),
      buttons = document.querySelectorAll('.card button');

cartDiv.style.display = 'none';

homeBtn.onclick = function(event){
    event.preventDefault();
    cartBtn.className = '';
    homeBtn.className = 'active';
    cartDiv.style.display = 'none';
    productsDiv.style.display = 'flex';
}

cartBtn.onclick = function(event){
    event.preventDefault();
    cartBtn.className = 'active';
    homeBtn.className = '';
    productsDiv.style.display = 'none';
    cartDiv.style.display = 'block';
    renderCart(); 
}

for(let i = 0; i<buttons.length; i++){
    buttons[i].onclick = function(event){
        addToCart(event.target.dataset.title, event.target.dataset.price);
    }
}

function addToCart(title, price){
    for(let i = 0; i<cart.length; i++){
        if(cart[i].title === title){
            cart[i].count++;
            return;
        }
    }
    cart.push({
        title: title,
        price: parseFloat(price),
        count: 1
    })
}

function renderCart(){
    const tbody = document.querySelector('.cart tbody');
    tbody.innerHTML = '';
    let totalPrice = 0;
    for(let i = 0; i<cart.length; i++){
        totalPrice += cart[i].price * cart[i].count;
        tbody.innerHTML += `<tr>
            <td>${cart[i].title}</td>
            <td>${cart[i].price} $</td>
            <td>${cart[i].count}</td>
            <td>${cart[i].price * cart[i].count} $</td>
            </tr>`
    }
    document.querySelector('.totalPrice').innerHTML = 'Total: $ ' + totalPrice;
}


