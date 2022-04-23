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

// function positiveSum(arr) {
//     return arr.filter(item => item > 0).reduce((i, n) => i+n,0)
// }
//
// console.log(positiveSum([1,-4,7,12]))
// function abbrevName(name){
//     return  name.split(' ').map(item => item[0].toUpperCase()).join('.')
//
//
// }
// console.log(abbrevName('Sam Harris'))

// function boolToWord( bool ){
//  return  bool === true ? "Yes" : 'No'
// }
//
// console.log(boolToWord(false))

function sumTwoSmallestNumbers(numbers) {
   let newArr = numbers.sort((a,b) => a - b)
    let res = newArr[0] + newArr[1]
    return res

}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
