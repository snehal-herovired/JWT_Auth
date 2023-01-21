const express = require('express');
const AuthRouter = express.Router();
const RegisterUser =require("../controllers/RegisterUser")
const LoginUser =require("../controllers/LoginUser")
const getUser = require("../controllers/getUser")
const Validator =require("../utils/Validator")

AuthRouter.post("/register",RegisterUser);
AuthRouter.post("/login", LoginUser);


// authorized route 
AuthRouter.get("/user",Validator,getUser);




module.exports = AuthRouter;