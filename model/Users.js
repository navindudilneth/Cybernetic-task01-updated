const mysql = require('mysql2');
const UsersSchema = new mysql.Schema({

    id:{type:Number, required:true},
    name:{type:String, required:true},
    contact:{type:Number, required:true},
    address:{type:String,required:true}

});
module.exports = mysql.model('users',UsersSchema);