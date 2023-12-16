const express = require("express");
const router =new express.Router();
const MensRanking = require("../models/mans")
// crete json data using post
router.post("/mens",async(req,res)=>{
    try{
    const addMensRecord = new MensRanking(req.body);
    console.log(req.body);
    const insertMan= await addMensRecord.save();
    res.status(201).send(insertMan);
    }catch(e){
     res.status(400).send(e);// 400 for bad request and 500 for server error
    }
  })
  
  
  // handle get request means read data 
  
  router.get("/mens",async(req,res)=>{
      try{
    const getMan = await MensRanking.find({}).sort({"ranking":1})
      res.status(201).send(getMan);
      }catch(e){
       res.status(400).send(e);// 400 for bad request and 500 for server error
      }
    })
  
    // handle get request for individual means read data 
  
    router.get("/mens/:id",async(req,res)=>{
      try{
          const _id = req.params.id;
    const getMan = await MensRanking.findById(_id)
      res.status(201).send(getMan);
      }catch(e){
       res.status(400).send(e);// 400 for bad request and 500 for server error
      }
    })
  
    // handle patch request for individual for update pirticular data not all. for all data update we use put request 
  
    router.patch("/mens/:id",async(req,res)=>{
      try{
          const _id = req.params.id;
    const getMan = await MensRanking.findByIdAndUpdate(_id,req.body,{
      new:true
    });
      res.send(getMan);
      }catch(e){
       res.status(500).send(e);// 400 for bad request and 500 for server error
      }
    })
  
    // handle delete request for individual for delete data 
  
    router.delete("/mens/:id",async(req,res)=>{
      try{
          const _id = req.params.id;
    const getMan = await MensRanking.findByIdAndDelete(_id);
      res.send(getMan);
      }catch(e){
       res.status(500).send(e);// 400 for bad request and 500 for server error
      }
    })
  
module.exports= router;

