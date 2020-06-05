var arr = [1,2,3,4,5,6,7,8,9,10]

var find_nums=arr.filter(function(elements){
    return elements%3==0
})



var find_cubes=find_nums.map(function(elements){
    return elements*elements*elements
})
console.log(find_cubes)
