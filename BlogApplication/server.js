const express = require('express');
const connectMongo = require('./connection');
const router = require('./routes/routes');
const session = require("express-session");
const mongoSession = require("connect-mongodb-session")(session);
const layout = require("express-ejs-layouts");
const path = require('path');

connectMongo();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(layout);

// Set up static file serving for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.set('layouts','./views/layout');
app.set('view engine','ejs');
app.set('views',"./views")

const store = new mongoSession({
    uri:"mongodb://localhost:27017/BlogApp"
})

app.use(session({
    secret:"secrete",
    saveUninitialized:false,
    store:store,
    resave:false,
    cookie:{secure:false}
}))

app.use((req,res,next)=>{
    res.locals.user = req.session.user || null;
    next();
})

app.use("/user/",router);

app.listen(3000,()=>{
    console.log("http://localhost:3000/user/")
})