const express=require("express")
const myrouter=express.Router()
const connection=require("../db/dbconnection")

myrouter.get("/books",(req,resp)=>{
    connection.query("select * from books",(err,data,fields)=>{
        if(err){
            resp.status(500).send("data not found")
        }
        else{
            resp.render("index",{bookdata:data})
        }
    })
})

myrouter.get("/addbook",(req,resp)=>{
    resp.render("add-book")
})

myrouter.post("/insertbook",(req,resp)=>{
    connection.query("insert into books values(?,?,?,?)",[req.body.bid,req.body.title,req.body.author,req.body.price],(err)=>{
        if(err){
            resp.status(500).send("data not inserted!!")
        }
        else{
            resp.status(200).redirect("/books")
        }
    })
})

myrouter.get("/deletebook/:bid",(req,resp)=>{
    connection.query("delete from books where book_id=?",[req.params.bid],(err)=>{
        if(err){
            resp.status(500).send("data not deleted")
        }
        else{
            resp.status(200).redirect("/books")
        }
    })
})

myrouter.get("/updatebook/:bid",(req,resp)=>{
    connection.query("select * from books where book_id=?",[req.params.bid],(err,data,fields)=>{
        if(err){
            resp.status(500).send("data not found")
        }
        else{
            resp.render("update",{bookdata:data})
        }
    })
})

myrouter.get("/updatebook",(req,resp)=>{
    connection.query("update books set title=?,author=?,price=? where book_id=?",[req.query.title,req.query.author,req.query.price,req.query.bid],(err)=>{
        if(err){
            resp.status(500).send("data not updated")
        }
        else{
            resp.redirect("/books")
        }
    })
})

module.exports=myrouter;
