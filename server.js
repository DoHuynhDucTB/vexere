const express = require('express');
const mongoose = require("mongoose");
const tripRouter = require("./routes/api");
const mongooseUri = "mongodb://localhost:27017/vexere-mongoose";

mongoose.connect(mongooseUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log(`kết nối thành công ${mongooseUri}`))
.catch(err => console.log(err))

const app = express();
app.use(express.json());

app.use("/", tripRouter);
const port = 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})