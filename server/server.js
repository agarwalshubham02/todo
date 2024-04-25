const express = require("express");
const app = express();
const cors = require("cors");
const {router} = require("./Routes/user");
const taskRouter = require("./Routes/task");

app.use(cors());
app.use(router);
app.use(taskRouter)

app.listen(3000,(()=>{
    console.log("Server is running on port 3000.");
}));