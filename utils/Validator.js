const jwt = require("jsonwebtoken");


function Validator(req, res, next) {
    // tokens are authorization means which are passed in request headers;
    const { authorization } = req.headers;
    const authToken = authorization.split(" ")[1];

    const decoded = jwt.verify(authToken, process.env.JWT_ACCESS_TOKEN);
    if (decoded) {
        return next();
    }
    return res.json({
        message:"forbidden"
    })
}



module.exports  = Validator