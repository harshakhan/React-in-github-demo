const m1 = (req,res,next) => {
    console.log('This is the first middleware');
    next()
}

const m2 = (req,res,next) =>{
    console.log('This is the secound middleware')
    next()
}
module.exports= {m1,m2}