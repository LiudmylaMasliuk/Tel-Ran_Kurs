function f1(){
  if(Math.random() > 0.5){
    throw new Error('Error! Something went wrong!'); // -> sozdaetsja objekt owibki
  }
  return 100;
}

/* const res = f1();
console.log(res); */
console.log('end of code'); // --> konec koda NE budet pe4atatsja


///////////////////////////////
////// T R Y    C A T C H /////
///////////////////////////////

try{
  const res = f1();
  console.log(res);
}catch(error){
  console.log(error.message);
  // 4to mi delaem v slu4ae owibki
}

console.log('end of code'); // // --> konec koda budet pe4atatsja


//////////////////////////////////////////////
////// T R Y   C A T C H   F I N A L L Y /////
/////////////////////////////////////////////

try{
  const res = f1();
  console.log(res);
}catch(error){
  console.log(error.message);
  // 4to mi delaem v slu4ae owibki
}finally{
  console.log('Good code');
  // 4to dolzhno proizojti objazatelno
}