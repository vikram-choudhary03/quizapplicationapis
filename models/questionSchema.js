

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text : {
        type : String, 
        required : true ,
        trim : true
    }, 
    options : [{
        type : String, 
        required : true 
    }],   //atleast 2 options
    correctOpt : {    //index of correctOpt
        type : Number, 
        required : true 
    },
    quizId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Quiz' , 
        required : true 
    }
})


const  Question = mongoose.model('Question' , questionSchema) ; 

module.exports = Question; 