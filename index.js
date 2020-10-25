const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());

app.get("/",function(req,res){
    res.send("Hello");
});



app.listen(3001,function(){
    console.log("Started at 3001");
})
