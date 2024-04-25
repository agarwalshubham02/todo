const express = require("express");
const router = new express.Router();
const bodyParser = require("body-parser");
const connectToMongo = require("../database");
let db;

const userData = {uid:null}

connectToMongo().then((database)=>{
    db = database;
}).catch((error)=>{
    console.log("Failed to connect: ",error);
});

function getDB (){
    if (!db) {
      throw new Error("DB Not yet connected");
    }
    return db;
  }

router.post("/login",bodyParser.json(),async(req,res)=>{
    const doc = await db.collection("user").findOne({
        email:req.body.username,
        password:req.body.password
    });
    if(doc){
        userData.uid = doc._id;
        res.status(201).send(doc);
    }
    else{
        res.status(401).send("Please check username or password");
    }
})

router.post("/register", bodyParser.json(),async (req,res)=>{      
    const id = await db.collection("user").insertOne({
        firstName:req.body.fname,
        lastName:req.body.lname,
        age:req.body.age,
        email:req.body.emailId,
        password:req.body.password,
    })
    if(id){
        res.status(201).send(id);
    }
    else{
        res.send(400);
    }
})

module.exports = {router,getDB,userData}
