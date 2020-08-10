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
            let x = Math.floor(diff/60)
            if(x == 1){return (`${x} minute ago`)}
            else{return (`${x} minutes ago`)}
            
        }
        else if (diff >= 3600 && diff < 86400){
            let x = Math.floor(diff/3600)
            if(x == 1){return (`${x} hour ago`)}
            else{return (`${x} hours ago`)}
        }
        else if (diff >= 86400){
            let x = Math.floor(diff/60/60/24)
            if(x == 1){return (`${x} day ago`)}
            else{return (`${x} days ago`)}
        }
    }
    else{
        if(isNaN(p)){
            return ("Invalid Date for the First argument")
        }
        else if(isNaN(q)){
            return ("Invalid Date for the Second argument")
        }
        else{
            return ("Invalid Date in Both the argument")
        }
    }

}



module.exports = time_Elapsed