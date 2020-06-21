// var obj ={name:"masai", place:"bangalore"}
// var str = JSON.stringify(obj)

// console.log(str);


// first example storing the array and the number.



// ----------------------------------------------------------------------------------


// var obj =[1,2,3,45]

// var str = JSON.stringify(obj)

// console.log(str);


// passing the number example


//--------------------------------------------------------------------
// var str ='{"name":"masai", "place":"bangalore"}'     // passing the full string int the str
// var obj = JSON.parse(str)      // to convert it into object

// console.log(obj);
// console.log(obj.name)


//------------------------------------------------------------------------------


//local storage

//API

// localStorage.getItem("name")    // its asked for which local storage you need
// localStorage.setItem("name","school") // i am storing the name school over there and then retrving  the name and then doing the console log to display
// var name = localStorage.getItem("name") 
// console.log(name)


//----------------------------------------------------------------
// var name = localStorage.getItem("names")
// console.log(typeof name)


//--------------------------------------------------------------------------------
//taking input from the input after the btn in clicked

// window.onload=function(){
//     var btn = document.getElementById("btn")
//     btn.addEventListener("click",addTodo)
// }


// function addTodo(){
//     var input = document.getElementById('input').value
//     // console.log(input)  // to see the input from the input box comment

//     var arr=[]window.onload=function(){
//     var btn = document.getElementById("btn")
//     btn.addEventListener("click",addTodo)

//     renderDOM(getData())  // names:"["school","principle"]"
// }

// function getData(){
//     return JSON.parse(localStorage.getItem('names')) 
// }





// function addTodo(){
//     var input = document.getElementById('input').value
//     // console.log(input)  // to see the input from the input box comment

//     var arr= getData()  // after doing this it will store the previous data and will also add the new ellement along with it.
//     arr.push(input)                                        // names:"["school","principle"]"
//     localStorage.setItem('names',JSON.stringify(arr))  // data is passed into the local storage in a from of an array


//     renderDOM(arr)
// }

// function renderDOM(data){
//     var ul = document.querySelector("ul")
//     ul.innerHTMl=""


//     for(var i=0 ; i<data.length;i++){             // itterating through the every item
//         var li = document.createElement('li')     // crating the new elements in the form of li
//         li.textContent= data[i]                  // creating the text content for every itterated data
//         ul.append(li)                            // at last we are going to apped li into the ul of all te terated data.

//     }
// }
//     arr.push(input)
//     localStorage.setItem('names',JSON.stringify(arr))  // data is passed into the local storage in a from of an array
// }


// the problems we are going to face here is that after adding new input it will replace the previous data. So to avoid this we need to store the previous data that
// will be mentioned in the next exaple
//----------------------------------------------------------------------------------------------------------------------------------------
// window.onload=function(){
//     var btn = document.getElementById("btn")
//     btn.addEventListener("click",addTodo)
// }





// function addTodo(){
//     var input = document.getElementById('input').value
//     // console.log(input)  // to see the input from the input box comment

//     var arr= JSON.parse(localStorage.getItem('names'))   // after doing this it will store the previous data and will also add the new ellement along with it.
//     arr.push(input)                                        // names:"["school","principle"]"
//     localStorage.setItem('names',JSON.stringify(arr))  // data is passed into the local storage in a from of an array


//     renderDOM(arr)
// }

// function renderDOM(data){
//     var ul = document.querySelector("ul")
//     ul.innerHTML=""


//     for(var i=0 ; i<data.length;i++){             // itterating through the every item
//         var li = document.createElement('li')     // crating the new elements in the form of li
//         li.textContent= data[i]                  // creating the text content for every itterated data
//         ul.append(li)                            // at last we are going to apped li into the ul of all te terated data.

//     }
// }





// we will do the same but small changes are needed.



///--------------------------------------------------------------------------------------------


// window.onload=function(){
//     var btn = document.getElementById("btn")
//     btn.addEventListener("click",addTodo)

//     renderDOM(getData())
// }

// function getData(){
//     return JSON.parse(localStorage.getItem('names')) 
// }





// function addTodo(){
//     var input = document.getElementById('input').value
//     // console.log(input)  // to see the input from the input box comment

//     var arr= getData()  // after doing this it will store the previous data and will also add the new ellement along with it.
//     arr.push(input)                                        // names:"["school","principle"]"
//     localStorage.setItem('names',JSON.stringify(arr))  // data is passed into the local storage in a from of an array


//     renderDOM(arr)
// }

// function renderDOM(data){
//     var ul = document.querySelector("ul")
//     ul.innerHTML=""


//     for(var i=0 ; i<data.length;i++){             // itterating through the every item
//         var li = document.createElement('li')     // crating the new elements in the form of li
//         li.textContent= data[i]                  // creating the text content for every itterated data
//         ul.append(li)                            // at last we are going to apped li into the ul of all te terated data.

//     }
// }


// here once the data are removed from the local storage we cant add any data as it will show the  error (due to the 'data is null' )=>
//=> to avoid this see the next example.


//-----------------------------------------------------------------------------------------------------


// window.onload=function(){
//     var btn = document.getElementById("btn")
//     btn.addEventListener("click",addTodo)

//     renderDOM(getData())
// }

// function getData(){
//     return JSON.parse(localStorage.getItem('names')) 
// }





// function addTodo(){
//     var input = document.getElementById('input').value
//     // console.log(input)  // to see the input from the input box comment

//     var arr= getData()  // after doing this it will store the previous data and will also add the new ellement along with it.

//     if(!arr){              // if the local storage is null it will not through the error
//         arr=[]
//     }



//     arr.push(input)                                        // names:"["school","principle"]"
//     localStorage.setItem('names',JSON.stringify(arr))  // data is passed into the local storage in a from of an array


//     renderDOM(arr)
// }

// function renderDOM(data){

//     if(!data){                       // we have use the same process to avoid data is null error.
//         return
//     }
//     var ul = document.querySelector("ul")
//     ul.innerHTML=""


//     for(var i=0 ; i<data.length;i++){             // itterating through the every item
//         var li = document.createElement('li')     // crating the new elements in the form of li
//         li.textContent= data[i]                  // creating the text content for every itterated data
//         ul.append(li)                            // at last we are going to apped li into the ul of all te terated data.

//     }
// }

// this example will perfect for  the list process
//---------------------------------------------------------------------------------------------------------------------------

//taking two input one with the name and another with the phone number



// window.onload=function(){
//     var btn = document.getElementById("btn")
//     btn.addEventListener("click",addTodo)

//     renderDOM(getData())
// }

// function getData(){
//     return JSON.parse(localStorage.getItem('names')) 
// }





// function addTodo(){
//     var name = document.getElementById('name').value
//     var phone = document.getElementById('phone').value
//     // console.log(input)  // to see the input from the input box comment

//     var arr= getData()  // after doing this it will store the previous data and will also add the new ellement along with it.

//     if(!arr){              // if the local storage is null it will not through the error. Managing the error.
//         arr=[]
//     }



//     arr.push({name,phone})            //  changing the structure to push the data
//     localStorage.setItem('names',JSON.stringify(arr))  // data is passed into the local storage in a from of an array


//     renderDOM(arr)
// }

// function renderDOM(data){

//     if(!data){                       // we have use the same process to avoid data is null error. Managing the error.
//         return
//     }
//     var ul = document.querySelector("ul")
//     ul.innerHTML=""


//     for(var i=0 ; i<data.length;i++){             // itterating through the every item
//         var li = document.createElement('li')     // crating the new elements in the form of li
//         li.textContent= data[i].name + " - "+ data[i].phone                  // creating the text content for every itterated data
//         ul.append(li)                            // at last we are going to apped li into the ul of all te terated data.

//     }
// }


//-------------------------------------------------------------------------------------------------------------------------



// EVERYTHING ARE SAME JUST WE WILL USE THE OR OPERATOR IN ONE OF THE LINE '341'


// window.onload=function(){
//     var btn = document.getElementById("btn")
//     btn.addEventListener("click",addTodo)

//     renderDOM(getData())
// }

// function getData(){
//     return JSON.parse(localStorage.getItem('names')) 
// }





// function addTodo(){
//     var name = document.getElementById('name').value
//     var phone = document.getElementById('phone').value
//     // console.log(input)  // to see the input from the input box comment

//     var arr= getData() || []   // we are just using the or operator
   



//     arr.push({name,phone})            //  changing the structure to push the data
//     localStorage.setItem('names',JSON.stringify(arr))  // data is passed into the local storage in a from of an array


//     renderDOM(arr)
// }

// function renderDOM(data){

//     if(!data){                       // we have use the same process to avoid data is null error. Managing the error.
//         return
//     }
//     var ul = document.querySelector("ul")
//     ul.innerHTML=""


//     for(var i=0 ; i<data.length;i++){             // itterating through the every item
//         var li = document.createElement('li')     // crating the new elements in the form of li
//         li.textContent= data[i].name + " - "+ data[i].phone                  // creating the text content for every itterated data
//         ul.append(li)                            // at last we are going to apped li into the ul of all te terated data.

//     }
// }