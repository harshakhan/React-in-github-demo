//2nd way  of doing the promise with sugar syntaxing

// sugar syntaxing

console.log('person1: shows ticket')
console.log('person2: shows ticket')

//async function preMovie() {}

const preMovie = async () => {

    try {
        const promiceWifeBringingTickets = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("ticket");
            }, 5000)
        })

        const getPopcorn = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(`popcorn`)},3000)
            })


        const getButter = new Promise((resolve, reject) => resolve(`butter`))

        // => 
        let ticket = await promiceWifeBringingTickets;

        console.log(`Gargi: I got the ${ticket}`);
        console.log("Ritesh: we should go in");
        console.log('Gargi: no i am hungry')

        let popcorn = await getPopcorn;

        console.log(`Ritesh: I got sone ${popcorn}`)
        console.log("Ritesh: we should go in");
        console.log('Gargi: I need butter on my popcorn')

        let butter = await getButter;

        console.log(`Ritesh: i got some ${butter} on popcorn`)
        console.log("lets Go")

        return ticket
    }
    catch(argument){
        console(argument)
    }
}

preMovie().then((argument) => console.log(`person3: shows ${argument}`)).catch((argument) => {console.log(argument)})




console.log('person4: shows ticket')
console.log('person5: shows ticket')