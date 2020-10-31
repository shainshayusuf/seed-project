const express = require('express')

const mongoose = require('mongoose');
const cors = require('cors');

const Seed = require('./models/seed')

const app = express()

app.use(express.json());

app.use(cors());

mongoose.connect('mongodb://thilak:thilakal123@ds235169.mlab.com:35169/seed-details', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (req, res) => {
  console.log("Connected to database");
})

app.post('/seedcertifier',(req,res) =>{

  Seed.find({},(err,doc) =>{
    if (doc.length == 0) {
      const newUser = new Seed({
        seedCertifiers:req.body.props
        })
        
        try {
          newUser.save();
          // mongoose.save(newUser);
          res.send("Added successful");
        } catch (err) {
          console.log(err)
        }
    }
    else {
      console.log(doc[0]._id);
      Seed.findByIdAndUpdate(doc[0]._id,{$push:{'seedCertifiers':req.body.props}},{safe: true, upsert: true, new : true},
      function(err, model) {
          console.log(err);
      })
      
      
    }
  })
})

app.listen(3006, () => {
    console.log("Server port running on 3006");
  })