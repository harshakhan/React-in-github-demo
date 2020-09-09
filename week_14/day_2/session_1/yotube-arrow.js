// // function message(){
// //     return "Hello World"
// // }

// let message = () => {
//     return 'Hellow World!';

// }


// console.log(message())

//--------------------------------------------

// // function message(a){
// //     return `Hello ${a}`;
// // }

// let message = (a) => `Hello ${a}`;

// console.log(message('Jhon'));

//-----------------------------------------------------

// document.addEventListener('click',function(){
//     console.log('Click');
// })

// so we can wright the above in arrow 

// document.addEventListener('click',()=>  console.log('Click'))   // one side eventListener and other side function

// --------------------------------------------------------------------------------

// const people =[
//     {
//         fName: 'Jhon',
//         lName: 'Smith'
//     },
//     {
//         fName : 'Marry',
//         lName : 'Clark'
//     },
// ];

// console.log( people.map(function(person){  // here anonymous function is person and returning the person
//     return person.fName
// }))

// arrow function 

// const people =[
//     {
//         fName: 'Jhon',
//         lName: 'Smith'
//     },
//     {
//         fName : 'Marry',
//         lName : 'Clark'
//     },
// ];

// console.log( people.map((person) => person.lName));

//---------------------------------------------------------------------
// how array function handle .this from normal expresion

// normal expression

// function stopwatch(){
//     let self = this;
//     self.time = 0;

//     setInterval(function(){
//         self.time++;
//         console.log(self.time);
//     },1000);
// }

// let timer = new stopwatch()

// show for the normal expression we are facing some error using this function



// arrow function 

// arrow its have it way to handle this 



// function stopwatch(){
//     this.time = 0;

//     setInterval(()=>{
//         this.time++;
//         console.log(this.time);
//     },1000);
// }

// let timer = new stopwatch()


//------------------------------------------------------------------------

