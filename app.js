const express  = require("express") ; 
const mongoose = require('mongoose') ; 
require('dotenv').config();
const quizRoutes = require('./routes/quizRoutes');

const app = express() ; 

app.use(express.json()); 


mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hjzcu.mongodb.net/quizapplication`
  )
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err.message));



app.use("/quiz" , quizRoutes) ; 


module.exports = app; 



