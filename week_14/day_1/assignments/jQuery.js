// $ - it is called litterals

function JQuery(selector){
    this.nodes = document.querySelectorAll(selector)
    this.length = this.nodes.length
}

JQuery.prototype.each = function(callback){
    for(var i=0;i<this.length;i++){
        callback(this.nodes[i],i)
    }
    return this  //this return the elements
}

JQuery.prototype.hide = function(){
    for(var i =0;i<this.length;i++){
        if(this.nodes[i].style.display =="block"){
            this.nodes[i].style.display ="none"
        }
        else{
            this.nodes[i].style.display ="none"
        }
    }
    return this
}

JQuery.prototype.show = function(){
    for(var i =0; i<this.length;i++){
        if(this.nodes[i].style.display == "none"){
            this.nodes[i].style.display="block"
        }
    }
    return this

}

function $(selector){    // here '$(selector)' it helping us to send all the things that are there in the 
    return new JQuery(selector)
}
export default $