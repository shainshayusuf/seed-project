const mongoose = require('mongoose');

const seedDetailsSchema = new mongoose.Schema({
seedCertifiers :{
    type:Array,
    required:false,
    "default" : []
},
seedGrowers : {
    type:Array,
    required:false,
    "default" : []
 },
 seedProducers : {
     type:Array,
     required:false,
     "default" : []
 },
 seedTesters : {
     type:Array,
     required:false,
     "default" : []
 },
 seedProcessing : {
     type:Array,
     required:false,
     "default" : []
 }
})


module.exports=mongoose.model('seedDetails',seedDetailsSchema); 