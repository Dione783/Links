const LinkModel = require('../model/Link');


const controller = {
    add:async (req,res)=>{
        let link = new LinkModel(req.body);
        try{
            let doc = await link.save();
            res.redirect('/');
        }catch(err){
            res.render('index',{err,body:req.body});
        }
    },
    all:async (req,res)=>{
        try{
            let all = await LinkModel.find({});
            res.render('all',{all});
        }catch(err){
            res.status(204).send("Nenhum Dado Encontrado");
        }
    },
    removeAll:async (req,res)=>{
        try {
            LinkModel.deleteMany((element)=>{
                return element.id == element.id;
            })
        } catch (err) {
            res.status(204).send("Nenhum Dado Encontrado");
        }
    },
    remove:async (req,res)=>{
        let id = req.params.id;
        try {
            deleted = await LinkModel.findByIdAndDelete(id);
            console.log("deleted:"+deleted);
            res.send(deleted);
        } catch (err) {
            res.send(err);
        }
    },
}

module.exports = controller;