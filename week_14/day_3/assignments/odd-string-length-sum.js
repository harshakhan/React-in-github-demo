let str =['sahini','answesa','ankita','tanushri','udita','savera']
let oddLength = str.map(item=>item.length)
// console.log(oddLength)

let countOdd = oddLength.filter(item => item%2 == 1)
// console.log(countOdd) 

let sumOdd = countOdd.reduce((a,c)=>a+c)
console.log(sumOdd)