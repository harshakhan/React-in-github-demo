const middleware = (req, res, next) => {
    if (req.path === "/echo") {
      let ans = req.is("application/json", req.body);
  
      if (!ans) {
        res
          .status(403)
          .set("Content-Type", "application/json")
          .send({ message: "please pass the  Content-Type as application/json" })
          .end();
      }
    }
    next();
  };
  
  module.exports = { middleware };