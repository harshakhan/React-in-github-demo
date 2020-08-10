const time_Elapsed = (p,q) => {
    p = new Date(p)
    q = new Date(q)
    p = p.getTime()
    q = q.getTime()
    let diff
    console.log(p,q)
    if ( p > 0 &&  q > 0){
        if (p > q){
            diff = p-q
        }
        else{
            diff = q-p
        }
        console.log(diff)
        diff = diff/1000
        if(diff == 1){
            return (`${diff} second ago`)
        }
        else if(diff < 60){
            return (`${diff} seconds ago`)
        }
        else if (diff >= 60 && diff < 3600){
            let a = Math.floor(diff/60)
            if(a == 1){return (`${a} minute ago`)}
            else{return (`${a} minutes ago`)}
            
        }
        else if (diff >= 3600 && diff < 86400){
            let a = Math.floor(diff/3600)
            if(a == 1){return (`${a} hour ago`)}
            else{return (`${a} hours ago`)}
        }
        else if (diff >= 86400){
            let a = Math.floor(diff/60/60/24)
            if(a == 1){return (`${a} day ago`)}
            else{return (`${a} days ago`)}
        }
    }
    else{
        if(isNaN(p)){
            return ("Invalid Date in the First argument")
        }
        else if(isNaN(q)){
            return ("Invalid Date in the Second argument")
        }
        else{
            return ("Invalid Date in Both the argument")
        }
    }

}



module.exports = time_Elapsed