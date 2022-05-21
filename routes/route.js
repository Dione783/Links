const express = require("express");
const route = express.Router();
const controller = require("../controllers/controller");

route.get("/",(req,res)=>{
    res.render('index',{err:false,body:{}});
})

route.get('/all',controller.all);
route.post('/',express.urlencoded({extended:true}),controller.add);
route.delete('/:id',express.json(),controller.remove);

module.exports = route;