const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");


require("dotenv").config();

const mongoose = require('mongoose');
const routes = require('./router/index');
const PORT = 8000 ;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", routes);
async function startConnection(){
    try{
        await mongoose.connect('mongodb+srv://ksun42134:vDvtUiRvM7gH5ovq@cluster0.kkkcnog.mongodb.net/');
        app.listen(PORT, (err) => {
            if(err){
                throw new Error(err);
               
            }

            console.log(`database is connected`);
            console.log(`server is running on port ${PORT}`);
        });
    }catch(error){
       console.log("error ", error);
    }
}


module.exports.startConnection = startConnection;
