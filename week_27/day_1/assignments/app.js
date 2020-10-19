
// Create a folder with file name  and rename the file and then read the data

const fs = require('fs')
fs.mkdir('Masai', (err) => {
    if(err){
      console.log('Error creating the folder.');
    }
    else {
      console.log('Successfully created the folder.')
    }
})
var text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established 
            fact that a reader will be distracted by the readable content of a page when looking at 
            its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
            have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).`

fs.writeFile("./Masai/lorem.txt",text,(err)=>{
    if(err){
        console.log('Error creating the file')
    }else{
        console.log('The file is successfully created')
    }
})


fs.rename("./Masai/lorem.txt", "./Masai/lorem_ipsum.txt", (err) => {
    if (err) {
      console.log("Error renaming the file. ");
    } else {
      console.log("File renamed Successfully");
    }
  });

const readStream = fs.createReadStream('./Masai/lorem_ipsum.txt', 'utf-8');
readStream.on('data', (chunk) => {
      console.log(chunk)
    })



//-------------------------------------------

// // calculator

// const {addition, substraction ,multiplication,divide} = require('./addition.js');

// console.log(addition(1,2));
// console.log(substraction(1,2))
// console.log(multiplication(1,2))
// console.log(divide(1,2))

//---------------------------

// //QR Code

// let qr = require('qr-image')
// var obj = {name : "Harsha", age : "22", hobby: "Football" }
// var text = 'Name: '+obj.name +','+'Age: '+obj.age+','+'Hobby: '+obj.hobby

// let qr_png = qr.image(text,{type: "png",size:64})
// qr_png.pipe(require('fs').createWriteStream('qr.png'))



//------------------------------------------------