const middleware = (req,res,next) =>{
    if(req.is('application/json')){
        console.log('Content-Type is appllication/json')
    }
    else{
        console.log('Content-type is application/json')
    }
    next();
}

module.exports = { middleware}