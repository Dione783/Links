const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({title:{type:String,required:true},description:String,url:String,click:{type:Number,default:0}});

const LinkModel = mongoose.model('LinkModel',linkSchema);

module.exports = LinkModel;