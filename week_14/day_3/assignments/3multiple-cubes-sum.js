let arr = [15,20,30,45,50,60,70]

let first = arr.filter(item=> item %3 == 0)
// console.log(first)

let secound = first.map(item=>item*item*item)
// console.log(secound)

let sum = secound.reduce((a,c)=>a+c)
console.log(sum)