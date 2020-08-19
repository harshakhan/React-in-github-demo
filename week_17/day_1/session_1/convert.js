const convert = (p) => {
    var str = String(p)
    var dotStr = str.split('.')


    if(dotStr.length>1){
  
    var str2 = dotStr[1]
    if(str2.length > 1){
        if(str2[1] >=5){
            str2 = Number(str2[0])+1
        }
        else
            str2 = str2[0]
    }
    var finalStr = '₹'+dotStr[0]+'.'+str2
    return finalStr
        
    }
    
   else if(dotStr.length==1){
    if(str.length == 4){
        str = str[0]+','+str[1]+str[2]+str[3]
    }
    else if(str.length == 5){
        str = str[0]+str[1]+','+str[2]+str[3]+str[4]
    }
    else if(str.length == 6){
        str = str[0]+','+str[1]+str[2]+','+str[3]+str[4]+str[5]
    }
    else if(str.length == 8){
        str = str[0]+','+str[1]+str[2]+','+str[3]+str[4]+','+str[5]+str[6]+str[7]
    }
    var finalStr2 = '₹'+str
    return finalStr2

   }
       
}
module.exports = convert


