var nums=[1,2,3,4,5,6,7,8,9,10]
var is_divisible=nums.filter(function(elements){
    return elements %3 ==0
})
console.log(is_divisible)
