const jwt = require("jsonwebtoken");

const userAuth = (req, res, next)=>{
    try {
        const verify = jwt.verify(req.cookies.id, "secret")
        console.log(verify);
        next();
    } catch (error) {
        console.log("Error occured");
        res.redirect("/signin");
    }
    
    
}

module.exports = userAuth;