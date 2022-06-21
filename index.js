const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

let db = {
    name: "Gustavo",
    age: 18
}

app.get("/", (req,res) => {
    return res.json(db);
})

app.listen(3000,() => {
    console.log("GO!");
})