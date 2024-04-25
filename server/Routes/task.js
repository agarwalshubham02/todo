const express = require("express");
const taskRouter = new express.Router();
const bodyParser = require("body-parser");
const { userData,getDB } = require("./user");
const { ObjectId } = require("mongodb");

//bodyParser.json() here parses incoming JSON request from client
taskRouter.post("/add",bodyParser.json(),async(req,res)=>{
    const db = getDB();
    const id = await db.collection("task").insertOne({
        title:req.body.title,
        description:req.body.desc,
        date:req.body.date,
        uid:userData.uid
    });
    if(id){
        res.status(201).send(id);
    }
    else{
        res.status(401).send("Please check username or password");
    }
})

taskRouter.post("/viewOne",bodyParser.json(),async(req,res)=>{
    const db = getDB();
    const task = await db.collection("task").findOne({
        uid:userData.uid,
        _id:new ObjectId(req.body._id)
    });
    if(task){
        res.status(201).send(task);
    }
    else{
        res.status(401).send("Please enter correct task id");
    }
})

taskRouter.post("/delete",bodyParser.json(),async(req,res)=>{
    const db = getDB();
    const task = await db.collection("task").deleteOne({
        uid:userData.uid,
        _id:new ObjectId(req.body.id)
    });
    if(task){
        res.status(201).send(task);
    }
    else{
        res.status(401).send("Please enter correct task id");
    }
})

taskRouter.get("/viewAll",bodyParser.json(),async (req,res)=>{     
    const db = getDB();
    const tasks = await db.collection("task").find({
       uid:userData.uid
    });    
    console.log(tasks);
  
    
    // else{
    //     res.status(401).send("Please try later");
    // }
})

module.exports = taskRouter