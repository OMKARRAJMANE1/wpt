Steps:
1. npm init
2. add dependencies in package.json:
   express,ejs,mysql,body-parser
3.npm install

4.create database : nodedb
5.create table books:

    create table books(book_id int primarykey,title varchar(30),author varchar(30),price double);

6.node app.js

7.on browser put URL:
    localhost:9000/books