// 1st way of doing the promise

console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiceWifeBringingTickets = new Promise((resolve,reject) => {
    setTimeout( ()  => {
        resolve("ticket");
    }, 3000)
})



const getPopcorn = promiceWifeBringingTickets.then((argument) => {
    console.log("Gargi: I got the Ticket");
    console.log("Ritesh: we should go in");
    console.log('Gargi: no i am hungry')
    return new Promise ((resolve,reject) => resolve(`${argument} popcorn`))
})

const getButter = getPopcorn.then((argument) => {
    console.log("Ritesh: we should go in");
    console.log('Gargi: I need butter on my popcorn')
    return new Promise ((resolve,reject) => resolve(`${argument} butter`))
})

getButter.then((argument) => console.log(argument))


console.log('person4: shows ticket')
console.log('person5: shows ticket')