const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const PORT = 3000;
const routes = require("./routes/route");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/DataBaseTest");
let db = mongoose.connection;
const options = {
    origin:"http://168.192.0.4:3000"
}
app.use(cors({options}))

app.set("views",path.join(__dirname,'public'))
app.set('view engine',"ejs");
app.use('/',routes);
app.use(express.static(path.join(__dirname,'public')));



db.once("open",(res)=>{

})


app.listen(PORT,()=>{
    console.log("Rodando na porta:" + PORT);
})