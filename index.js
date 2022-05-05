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

// function sumTwoSmallestNumbers(numbers) {
//    let newArr = numbers.sort((a,b) => a - b)
//     let res = newArr[0] + newArr[1]
//     return res

// }
//
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
// function removeChar(str) {
//     return str.slice(1, -1)
// }
// console.log(removeChar('abibas'))
// function findShort(s) {
//     let str = s.split(' ')
//     let res = Infinity
//     for (let i = 0; i < str.length; i++) {
//         res = Math.min(str[i].length, res)
//     }
//     return res
//
// }
//
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
// function highAndLow(numbers) {
//     let nim = numbers.split(' ').sort()
//     let arr = []
//     nim.forEach(item => {
//         arr.push(Number(item))
//     })
//
//     let sortArr = arr.sort((a, b) => a - b)
//
//     let first = sortArr[0]
//     let last = sortArr[sortArr.length - 1]
//
//
//     return last} ${first}"`
//
// }
// // console.log(highAndLow('1 9 3 4 -5'))
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

// function reverseWords(str) {
//      return str.split(' ').reverse().join(' ').split('').reverse().join('')
// }
//
// console.log(reverseWords('double  spaced  words'))