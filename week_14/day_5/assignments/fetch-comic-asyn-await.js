let arr = []
window.onload = function () {
    fetch("https://xkcd.now.sh/?comic=latest")

        .then(res => res.json())

        .then((res) => getComic(res.num, 10))


}

async function getComic(num, total) {
    console.log(num)
     if(total==11){
         throw("Error")
     }
    if (total == 0) {
        return
    }

    try{
        await fetch(`https://xkcd.now.sh/?comic=${num}`)
        .then((res) => res.json())
        .then((res) => {
            arr.push(res)
            //using recursion
            getComic(num - 1, total - 1)

        })
    printComics(arr)
    }
    catch{
        console.log(err)
    }
}

function printComics(arr) {
    var res = document.getElementById("res")
    res.innerHTML = " "

    var div = document.createElement("div")
    for (var i = 0; i < arr.length; i++) {
        var h3 = document.createElement("h3")
        h3.textContent = arr[i].num + " " + arr[i].title
        var img = new Image(500, 200)
        img.src = arr[i].img
        img.alt = arr[i].alt
        div.append(h3, img)
    }


    res.append(div)
}