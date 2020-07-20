function jQuery(selector){
    this.nodes = document.querySelectorAll(selector);
    this.length = this.nodes.length;
    console.log(this.nodes)
}
jQuery.prototype.each = function(callback){
  // add code
  for(var i=0; i<this.length; i++)
  {
      callback(this.nodes[i], i)
  }  
  return this
}
jQuery.prototype.show = function(){
  // add code
  for(var i=0; i<this.length; i++)
  {
      this.nodes[i].removeAttribute("style")
  }
}
  jQuery.prototype.hide = function(){
  // add code
  for(var i=0; i<this.length; i++)
  {
      this.nodes[i].setAttribute("style","display: none")
  }
}
function $(selector){
    return new jQuery(selector)
}
export default $