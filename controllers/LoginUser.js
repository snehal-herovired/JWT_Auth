const UserModal = require("../modals/UserSchema");
const jwt = require("jsonwebtoken");
function LoginUser(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    
    if (!email) {
        return res.json({ error:"email not found"})
    }
    UserModal.findOne({ email }, (err, data) => {
        if (err) {
            return res.json({
                message:"not a valid user email"
            })
        } else {
                         // jwt.sign({data},secretkey,{time and expiry})
          let accesstoken =jwt.sign({email},process.env.JWT_ACCESS_TOKEN,{expiresIn:"20m"})
            return res.json({
                message: "logged in successfully",
                login: true,
                token:accesstoken
            })
        }
    })
}

module.exports = LoginUser;