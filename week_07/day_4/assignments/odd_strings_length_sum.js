var str= ['ankur','rites','nurpul','ritesh','yogesh','albert','avishek']

var arr=[]
for(var i=0;i<str.length;i++){
    if(i%2==0){
        var ans= (str[i])
        arr.push(ans)
    }
}
console.log(arr)

var length =arr.map(function(elements){
    return elements.length
})
console.log(length)

var sum_total =length.reduce(function(sum,elements){
    return sum+elements
})
console.log(sum_total)
