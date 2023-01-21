const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userinfo = new Schema({
    username: String,
    email: String,
    password:String
})

const UserModal = mongoose.model('UsersInfo', Userinfo);

module.exports = UserModal;