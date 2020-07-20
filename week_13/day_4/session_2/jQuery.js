function JQuery(selector){
    this.nodes=document.querySelectorAll(selector);
    this.length = this.nodes.length;
}
JQuery.prototype.each = function(callback){     //it will take the callback
    for(var i=0;i<this.length;i++){
        callback(this.nodes[i],i)  //passing the index and the element also
    }
    return this
}
function $(selector){
    return new JQuery(selector)

}

export default $