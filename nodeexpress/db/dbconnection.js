const mysql=require("mysql")
var connections=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root123",
    database:"nodedb",
    port:3306
})

connections.connect((err)=>{
    if(err){
        console.log("database connection failed",err)
    }
    else{
        console.log("database connected successfully")
    }
})

module.exports=connections;