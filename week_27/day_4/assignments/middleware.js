let count= 0;
const middleware_1 = (req,res,next) =>{
    count++;
    console.log("Total no of request the server recieved: " + count);
    next();
};

const middleware_2 = (req,res,next) =>{
    console.log({users: req.ip, timestamp: Date()});
    next();
}
module.exports = {middleware_1, middleware_2};