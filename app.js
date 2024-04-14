const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");

const app = express();
require("dotenv").config();

app.use(expressLayouts);
app.set('layout','./layouts/default');
app.set('view engine',"ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended : true}));

const port = 5000 || process.env.port;

app.use('/', require('./routes/userRouter'));

app.all("*",(req,res)=>{
    data = {
        title : 'Page not found',
        description : 'Requested page does not exit'
    }
    res.status(404).render('404',data);
});

app.listen(port, console.log(`app running on port ${port}`));



