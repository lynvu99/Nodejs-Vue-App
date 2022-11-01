
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./routes/ROUTES')


const app = express()
const PORT = 6969


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // If using .fetch and not axios
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})




//Connect to database
const url = "mongodb+srv://lynvu99:Thangvu123.@Cluster0.ar16so4.mongodb.net/ThangVuDB?retryWrites=true&w=majority";
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => {
    console.log("MongoDB connected");
})
.catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
route(app)



app.listen(PORT, () => {
    console.log(`Listen on http://localhost:${PORT}`);
})