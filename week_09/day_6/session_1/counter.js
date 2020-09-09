window.onload = (function(){
    var timer = document.getElementById('timer')
    var data = new Data()
    timer.innerHTML = data.toLocaleTimeString()
},1000)
