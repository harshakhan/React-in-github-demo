var str=["harsha", "aditi", "tanushre","Aditi","Ankita",'Anupam','Diya','Sayak']

var a_letter = str.filter(function(elements){
    return (elements[0]=="A" || elements[elements.length-1]=="a")
})
console.log(a_letter)