const express =  require('express');
const { registerPartials, registerPartial } = require('hbs');
const app=express();
require('dotenv').config();
const hbs=require('hbs');

//hbs=registerPartials(__dirname+"/views/partials/", function (err) {});
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
//hbs=registerPartial(__dirname+"/views/partials/", function (err) {});

app.use(express.static('public'));
app.set('view engine', 'hbs');
const puerto=process.env.PORT;

/*
app.get('/home',function(req,res){
    res.render("home",{nombre:"Brayan"});
});
app.get('/',function(req,res){
    res.render("home.hbs",{nombre:"Brayan"});
});


app.get('/generic',function(req,res){
    //res.sendFile(__dirname+"/public/home.html");
    res.render("generic",{nombre:"Brayrequire('dotenv').config();an"});
});
app.get('/elements',function(req,res){
    //res.sendFile(__dirname+"/public/home.html");
    res.render("elements",{nombre:"Brayan"});
})

app.get('/index',function(req,res){
    res.sendFile(__dirname+"/public/index.html");
    //res.render("home");
})
app.get('*',function(req,res){
    
    res.send("404 ! page no found");
})

*/
app.get('*',function(req,res){
    res.sendFile(__dirname+'/public/index.html')
    //res.send("404 ! page no found");
})

app.listen(puerto,()=>{
    console.log("Hola Mundo");
    console.log(process.env.PORT);
})