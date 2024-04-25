const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = "mongodb://127.0.0.1:27017";
const dbName = "todo";

async function connectToMongo(){
    const client = await MongoClient.connect(url)
    console.log("Connection Established!!");
    const db = client.db(dbName); 
    return db;    
}

module.exports = connectToMongo;