const nav = document.querySelector('.nav'),
      root = document.querySelector('#root');
let currentPageLink = nav.querySelector('a[href="home"]');

renderHome();

nav.onclick = function(event){
  event.preventDefault();
  if(event.target.getAttribute('href') === 'home') renderHome();
  if(event.target.getAttribute('href') === 'cart') renderCart();
}

function renderHome(){
  document.querySelector('#homeBtn').classList.add('active');
  document.querySelector('#cartBtn').classList.remove('active');
  root.className = 'products';
  root.innerHTML = `<div class="products">
  <div class="card">
      <img src="./images/salad-pngrepo-com (1).png" alt="">
      <h2>Ceaser salad</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.</p>
      <h3>Price: € 6</h3>
      <button>Add to cart</button>
  </div>
  <div class="card">
      <img src="./images/soup-pngrepo-com.png" alt="">
      <h2>Tomato soup</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.</p>
      <h3>Price: € 5</h3>
      <button>Add to cart</button>
  </div>
  <div class="card">
      <img src="./images/steak-pngrepo-com.png" alt="">
      <h2>Steak</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.</p>
      <h3>Price: € 12</h3>
      <button>Add to cart</button>
  </div>
  <div class="card">
      <img src="./images/orange-juice-juice-pngrepo-com.png" alt="">
      <h2>Orange juice</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.</p>
      <h3>Price: € 3</h3>
      <button>Add to cart</button>
  </div>
`;
}

function renderCart(){
  document.querySelector('#homeBtn').classList.remove('active');
  document.querySelector('#cartBtn').classList.add('active');
  root.className = 'cart';
  root.innerHTML = `<div class="cart">
  <table>
      <thead>
      <th class="title">title</th>
      <th class="price">price</th>
      <th class="count">count</th>
      <th class="total">total</th>
      </thead>
      <tbody>
      <tr>
          <td>Сaesar salad</td>
          <td>€ 6</td>
          <td>1</td>
          <td>€ 6</td>
      </tr>
      <tr>
          <td>Tomato soup</td>
          <td>€ 5</td>
          <td>1</td>
          <td>€ 5</td>
      </tr>
      <tr>
          <td>Steak</td>
          <td>€ 12</td>
          <td>2</td>
          <td>€ 24</td>
      </tr>
      <tr>
          <td>Orange juice</td>
          <td>€ 3</td>
          <td>2</td>
          <td>€ 6</td>
      </tr>
      </tbody>
  </table>
  <div class="totalPrice">Total: € 41</div>
  `;
}

