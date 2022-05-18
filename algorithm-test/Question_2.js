/**
 * Diberikan sebuah inputan array multidimensi. Buatlah function untuk
    mengkonversikan array tersebut menjadi 1 dimensi. Tidak boleh
    menggunakan built-in function seperti array.flat() di javascript.
    Contoh:
    - inputan: [1, 2, [3, 4], 5, [6, 7], 8]
    - hasil: [1, 2, 3, 4, 5, 6, 7, 8]
 */

var arr = [1,2,[3,4],5,[6,7],8];
let x = [];

// forEach method
arr.forEach(function(element) {
  if(typeof element === 'object') {
  	element.forEach(function(item){
  		x.push(item);
    });
  } else {
  	x.push(element);
  }
});
console.log('new array', x);
