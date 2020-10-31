const express = require('express')

const mongoose = require('mongoose');
const cors = require('cors');

const Seed = require('./models/seed')

const app = express()

app.use(express.json());

app.use(cors());

mongoose.connect('mongodb+srv://shainsha:Pdn4L54FXNMQEUB4@cluster0.runpf.mongodb.net/seed-details?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (req, res) => {
  console.log("Connected to database");
})

app.post('/seedcertifier',(req,res) =>{
    console.log(req.body.props)
})

app.listen(3006, () => {
    console.log("Server port running on 3006");
  })