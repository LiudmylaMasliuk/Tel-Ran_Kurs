/////////////////////////////
////////// D A T E //////////
/////////////////////////////

const now1 = new Date();
console.log(now1); // --> 2021-02-03T12:20:00.621Z


const now2 = new Date('2021-02-03');
console.log(now2); // --> 2021-02-03T00:00:00.000Z

const now3 = new Date(2021, 2, 3, 20);
console.log(now3); // --> 2021-03-03T19:00:00.000Z


const now4 = new Date(0);
console.log(now4); // --> 1970-01-01T00:00:00.000Z

const now5 = new Date(-99999999);
console.log(now5); // --> 1969-12-30T20:13:20.001Z

/////////////
/// G E T ///
/////////////
const now6 = new Date();
console.log(now6.getUTCFullYear()); // --> 2021
console.log(now6.getUTCMonth()); // --> 1
console.log(now6.getDate()); // --> 3
console.log(now6.getDay()); // --> 3

console.log(now6.getHours()); // --> 13
console.log(now6.getUTCHours()); // Greenwich --> 12
console.log(now6.getTimezoneOffset()); // raznica mezhdu Greenwich i nawim vremenem // --> -60
console.log(now6.getTime()); // --> 1612355452739 // s janvarja 1970 goda do segodnjawnego dnja


/////////////
/// s E T ///
/////////////
console.log(now6.setHours(18)); // --> 1612373630687
console.log(now6); // --> 2021-02-03T17:33:50.687Z

// esli 4islo bolwe, 4em 4asov v sutkah --> vivodit sledujuwij den
console.log(now6.setHours(40)); // --> 1612452904335
console.log(now6); // --> 2021-02-04T15:35:04.335Z



////////// Д Л Я   Т Е С Т И Р О В А Н И Я //////////
////////////////////////////////////////////////////
let start = new Date();
for(let i = 0; i < 100000; i++){
  let some = i ** 2;
}
let end = new Date();
console.log(`time running is ${end - start} ms`); // --> time running is 5 ms


////////////////////////////////////////////

const endDate = new Date('2021-02-10');
const daysLeft = (endDate - new Date()); // deadline - date_now
console.log(daysLeft);

const days = Math.floor(daysLeft / (24 * 60 * 60 * 1000)), 
// (24 * 60 * 60 * 1000) = koli4estvo milisekund odnogo dnja
      hours = Math.floor((daysLeft / (60 * 60 * 1000)) % 24),
      minutes = Math.floor((daysLeft / (60 * 1000)) % 60),
      seconds = Math.floor((daysLeft / 1000) % 60);

console.log(days, hours, minutes, seconds); // --> 6 11 2 14
console.log(days, hours, minutes, seconds); // --> 6 11 1 39





