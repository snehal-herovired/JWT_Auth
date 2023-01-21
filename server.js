require("dotenv").config();
const express = require('express');
const mongo = require("mongoose");
const app = express();
app.use(express.json());

const Port = process.env.PORT || 5000;

mongo.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected to Mongodb database"))


// use the router from routes;
const AuthRouter = require("./routes/AuthRouter");
app.use("/auth", AuthRouter);


app.listen(Port, () => {
    console.log(`server is running on ${Port}`);
})
