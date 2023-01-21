const UserModal = require("../modals/UserSchema");

function RegisterUser(req, res, next) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let userdata = {
        username: username,
        email: email,
        password:password
    }


    let result = new UserModal(userdata);
    result.save().then((item) => {
       return res.json({
           message: "registration successfull",
           data :item
        })
    }).catch((err) => {
        console.log(err);
        return res.json({
            message: "Registration failed"
        })
    })
}

module.exports = RegisterUser;

