
let numbers = [1,2,3,4,5,6,7,8,9,10];
let tablePifagor = [];

for(let k = 1; k <= 10; k++){
  let temp = [];
  for(let i = 0; i < numbers.length; i++){
    temp.push(numbers[i] * k);
  }
  tablePifagor.push(temp);
}
console.log(tablePifagor);


document.write('<h1 style="text-align:center;">Multiplication table</h1>');
document.write('<table border = "1", cellspacing = "0", cellpadding = "5", align = "center">');
for(let i = 1; i <= 10; i++){
  document.write('<tr>');
  for(j = 1; j <= 10; j++){
        // document.write('<td width="50px">');
        // document.write(tablePifagor[i][j]);
        // document.write('</td>');
        document.write(`<td>${j}&times;${i} = ${j*i}`);
  }
  document.write('</tr>');
}
document.write('</table>');