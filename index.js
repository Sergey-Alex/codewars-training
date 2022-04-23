// let isSquare = function(n){
//     if (n%Math.sqrt(n) == 0 || Math.sqrt(n) === 0){
//         return true
//     } else {
//         return false
//     }
//
//
// }
//
// console.log(isSquare(-1))
//
// function digPow(n, p){
//     let strN = String(n).split('');
//     let summ= 0
//     for (let i = 0; i < strN.length; i++){
//           summ+=Math.pow(Number(strN[i]), p)
//         p++
//     }
//     let data = summ / n
//     if(summ%n === 0){
//         return data
//     }else {
//         return  -1
//     }
// }
// console.log(digPow(89, 1))

// function opposite(number) {
//   if (number > 0){
//       return  -number
//   } else if (number < 0) {
//       return  Math.abs(number)
//   } else if (number == 0){
//       return  null
//   }
// }
//
// console.log(opposite(0))