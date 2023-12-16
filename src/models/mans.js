const express = require('express');
const  mongoose = require('mongoose');
 
const manSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:[true,"it's being already selected"]
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:String,
        required:true,
        trim:true
    },
    event:{
        type:Date,
        default:"100m",
        trim:true
    }

})

// create a new collection
const MensRanking = new mongoose.model('MenRanking',manSchema);

module.exports = MensRanking;