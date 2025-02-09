const express = require("express")
const app = express()

const cors = require("cors")
const connectDB = require('./dbConnection')
const Ticket = require('./schema')

app.use(cors())
// app.use(cors({
//     origin: "http://localhost:5173", // Allow frontend origin
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true 
// }));

app.use(express.json())
connectDB()

app.use("/api",require('./routes'))

const port = 8080;
app.listen(port)