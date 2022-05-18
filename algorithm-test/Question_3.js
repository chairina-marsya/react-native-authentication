/**
 * Diberikan sebuah inputan angka positif integer. Buatlah function untuk
    menghasilkan sebuah array yang bersi value dari setiap digit dari angka
    tersebut.

    Contoh:
    - inputan: 5623847
    - hasil: [5000000, 600000, 20000, 3000, 800, 40, 7]
 */
var x = 5623847;
let length = 0;
let y = 0;
let z = [];

var myArr = String(x).split("").map((num)=>{
  return Number(num)
})

y = myArr.length-1;

var myArr2 = myArr.forEach((num)=>{
  z.push(num*(10**y));
  y-=1;
})
  
console.log(z);