/* setTimeout(callback,2000);

function callback(){
  console.log('callback');
}

console.log('end of script'); */



/* console.log('data request...');

setTimeout(()=>{
  console.log('data preparation...');

  const product = {
    name: 'phone',
    price: 100,
  }
  setTimeout(()=>{
    product.status = 'order';
    console.log(product);
  },2000)

},2000); */


///////////////////////////////////////
//////////// P R O M I S E ////////////
///////////////////////////////////////
// promise может закончится или по resolve или по reject

console.log('data request...');

const request = new Promise(function(resolve,reject){
  setTimeout(()=>{
    console.log('data preparation...');
  
    const product = {
      name: 'phone',
      price: 100,
    }
    resolve(product);

  },2000);
});

request.then((product)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      product.status = 'order';
      //resolve(product);
      reject();
  },2000);
}).then(data => {
  data.modify = true;
  return data;
}).then(data => {
  console.log('data received:');
  console.log(data);
});
}).catch(() => {
  console.error('Error!');
}).finally(() => {
  console.log('Fin');
});




/*  /// T H E N ///
 // та логика, которая происходит после удачного выполнения resolve
request.then(()=>{
  console.log('data received');
}); */

/// C A T C H ///
 // та логика, которая происходит после выполнения reject



