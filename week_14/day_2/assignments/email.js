
//     File EmailChecker.js
//     Given an string, check if its a valid email.
//     If valid, print YES
//     If not, print NO
//     use the Unix Philosophy Approach


//     Valid

// mysite@masaischool.com
// sre@masaischool.org
// mysite@masai.school.net

// Not Valid
// masai.school.com [@ is not present]
// masai@.com [ domain can not start with dot `.` ]
// @masai.school.net [ No character before @ ]
// name@gmail.b [ `.b` is not a valid tld ]
// name@.org.org [ domain can not start with dot `.` ]
// .name@masaischool.org [ an email should not be start with `.` ]
// masaischool()*@gmail.com [ only allows character, digit, underscore, and dash ]
// name..1234@yahoo.com [double dots are not allowed]


//------------------------------------------------------------------------------------

// Logic-

// const emailChecker = (email) =>{
//     //condition 1,2,3
//     //if false
//     // return false



//     //true
// return true

// }

//-----------------------------------------------------------------
const allowedChars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234560789_-.'


 const checkIfAllowed = name => {
     for(var i = 0 ; i<name.lengh;i++){
         if(allowedChars.indexOf(name[i]) === -1){
             return false
         }
     }
     return true
 }

const checkName = name => {
 if(name.length === 0){
     return false
 }
 if(name[0] === '.'){
     return false
 }
 if(name.indexOf('..') !== -1){
     return false
 }
 if(!checkIfAllowed(name)){
     return false
 }
return true


}

const checkForAt = email => email.split('@').length === 2


const checkDomain  = domain => {
    if(domain.length ===0 ){
        return false
    }
    if(domain[0] === '.' ){
        return false
    }
    if(!checkIfAllowed(domain) ){
        return false
    }
    let tld  = domain.split('.')
    tld  = tld[tld.length -1]
    if (['org','net','com','in'].indexOf(tld)===-1){
        return false
    }
    return true
}


const emailChecker = (email) =>{
    if(!checkForAt(email)){
          return false
    }

    let [name,tld] = email.split('@') 

    if(!checkName(name)){
        return false
    }
    if(!checkDomain(tld)){
        return false
    }
    return true
}

const test  = `mysite@masaischool.com
my.name@masaischool.org
mysite@masai.school.net
masai.school.com
masai@.com
@masai.school.net
name@gmail.b
name@.org.org
.name@masaischool.org
masaischool()*@gmail.com
name..1234@yahoo.com`.split('\n').map(emailChecker)

console.log(test);