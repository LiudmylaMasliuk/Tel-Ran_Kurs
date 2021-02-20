//============================================================
//======================== while =============================
//============================================================

let count = 5;

while (count > 0) { // telo cikla
  document.write('Hello! <br />'); //iperaciya
  count --; // umenwaet cikl na 1 edinicu
}

// document.write('Hello! <br />');
// document.write('Hello! <br />');
// document.write('Hello! <br />');
// document.write('Hello! <br />');
// document.write('Hello! <br />');

// let i = 3;

// while (i) { // 3,2,1 -> true, 0 -> false
//   alert(i); // alert(i--) mozhno napisat takzhe
//   i--; // esli mi uberem i--, to budet loop 
//       //  mozhno napisat takzhe: while(i) alert(i--)
//       //  mozhno napisat takzhe: i = i-1; i -= 1; i--
// }

// esli mi uberem i--, to budet loop


//============================================================
//======================== do ================================
//============================================================

// let j = 5;
// do {
//   alert(j);
//   j ++;
// } while(j < 4);


// let j = 1;
// do {
//   alert(j);
//   j ++;
// } while(j < 0); // 1 raz vipolnitsja


// let check;
// do{
//   check = prompt('enter a number > 50'); // '' -> false -> disapper  
//                                           // cancel -> null -> false -> disapper 
// } while (check <= 50 && check) // check = 0 (check == 0) -> true
//                                 // (check) -> false
//                                 // '' -> false
//                                 // null -> false
//                                 // '2' > 50 '0' > 50



                                

//============================================================
//======================== for ===============================
//============================================================  

// for(let i = 0; i < 3; i++){ 
//   alert(i);
// }


// for(let i = 0; i < 3; i++){ // i++ = i+=2 // (let i=0, j=0, j<=0, j>=5; i++, j--)
//   alert(i);
// }

// for(let i = 1; i < 4; i++){
//   alert(i);
// }

// let i = 1; // mozhno zadavanie peremenno vinesti za 'for'
// for(i = 1; i < 3; i++){
//   alert(i);
// }

// let i = 1; 
// for(; i < 3; i++){ // mozhno ubrat 'i', no objazatelno ostavit ';'
//   alert(i);
// }

// let i = 1; 
// for(; i < 3;){ // mozhno ubrat wag 'i++' vniz k alert
//   alert(i++);
// }

// // for(;;;) tozhe vozmozhno


// let sum = 0;

// while (true){
//   let value = +prompt ('enter a number');
//   console.log(value)
//   console.log(!value)
//   if (!value){ 
//     break;}
//   sum += value;
// }
// alert('The sum is: ' + sum);




//============================================================
//======================== continue ==========================
//============================================================

// for(let i = 0; i < 10; i++){
//   if(i % 2 == 0) continue; 
//   alert(i);
// }

// % delit bez ostatka



let number = +prompt('enter a number > 0'); // +dva -> NaN
let summe = 0;

// 5 --> 1+2+3+4+5

while(isNaN(number) || number < 0){ // na slu4aj esli vvedeno slovo ili otrizatelnoe 4islo
  number = +prompt('enter a number > 0');
}
for(let i = 1; i<=number; i++){
  summe = summe + i; // summe +=1;
}
alert(summe);


//========================================================
//===================== var ==== let =====================
//========================================================

// esli 'let' stoit v tele 'do' --> nado zadat zana4enie dlja 'let' vne tela.
// 'var' budet viden, esli on dazhe budet v tele.

// let number;
// let summe = 0;
// do{
//   number = +prompt('enter a number > 0');
// }
// while(isNaN(number) || number < 0){
// }
// for(let i = 1; i<=number; i++){
//   summe = summe + i;
// }
// alert(summe);



let summe = 0;
do{
  var number = +prompt('enter a number > 0');
}
while(isNaN(number) || number < 0){
}
for(let i = 1; i<=number; i++){
  summe = summe + i;
}
alert(summe);



//============================================================
//================ Mat.random ================================
//============================================================

// let answer = Mat.random() * 100; // * 100 = do sta
// alert(answer);

let answer = parseInt(Mat.random() * 100); // parseInt okrugljaet
alert(answer);


alert('Hello \n world!'); // vivod v 2 stroki

let a = 2.3678940
alert('Hello \n world!\n' + a.toFixed(2)); // ukara4ivat do simvolov ukazannih v skobkah --> 2.37





