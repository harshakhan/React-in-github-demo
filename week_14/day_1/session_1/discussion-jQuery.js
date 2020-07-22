function JQuery(selector){
    this.nodes = document.querySelectorAll(selector)  // here select all the value from html
    this.length = this.nodes.length
}


//prototype here - inherits all the proprty from the parent function

// each - print each and every elements
Jquery.prototype.each = function(callback){
    for(var i =0;i<this.length;i++){
        callback(this.nodes[i],i)  // this.nodes[i] = it will give each and every elements and i = 0,1,2
    }
    return this
}

function $(selector){
    return new JQuery(selector)
}
export default $