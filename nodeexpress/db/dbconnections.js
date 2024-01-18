const mysql=require("mysql");
const connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root123",
    database:"advjava",
    port:3306
})
connection.connect((err)=>{
    if(err){
    console.log("err in database connection"+err.message)
    }
else
console.log("database connected")
})

module.exports=connection;