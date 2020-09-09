// // Examples
// let setA = new Set([1, 2, 3, 4])
// let setB = new Set([2, 3])
// let setC = new Set([3, 4, 5, 6])
// isSuperset(setA, setB)          // => true
// union(setA, setC)               // => Set [1, 2, 3, 4, 5, 6]
// intersection(setA, setC)        // => Set [3, 4]
// symmetricDifference(setA, setC) // => Set [1, 2, 5, 6]
// difference(setA, setC)          // => Set [1, 2]

//----------------------------------------------------

let setA = new Set([1, 2, 3, 4])
let setB = new Set([2, 3])
let setC = new Set([3, 4, 5, 6])

const isSuperset = (set,subset)=>{
    for(let items of subset){
        if(!set.has(items)){
            return false
        }
    }
    return true
}

const union=(setA,setC)=>{
    let union = new Set(setA)
    // console.log(union)
    for(let items of setC){
        union.add(items)
    }
    return (union)
}

const intersection=(setA, setC)=>{
    let intersection = new Set()
    for(let items of setA){
        if(setC.has(items)){
            intersection.add(items)
        }
    }
    return intersection
}

const symmetricDifference =(setA,setC)=>{
    let symmetricdifference =new Set(setA)
    for(let elem of setC){
        if(symmetricdifference.has(elem)){
            symmetricdifference.delete(elem)
        }
        else{
            symmetricdifference.add(elem)
        }
    }
    return symmetricdifference

}

const difference = (setA,setC)=>{
    let difference = new Set(setA)
    for(let elem of setC){
        difference.delete(elem)
    }
    return difference
}


console.log(isSuperset(setA,setB))
console.log(union(setA,setC))
console.log(intersection(setA,setC))
console.log(symmetricDifference(setA,setC))
console.log(difference(setA,setC))
