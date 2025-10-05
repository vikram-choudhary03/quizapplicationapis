const express = require('express') ; 
const router  = express.Router() ; 
const { addQuestion } = require("../Controllers/questionsController");
const { createQuiz, fetchQuestions, submitAnswers } = require("../Controllers/quizController");
const { validateQuiz, validateQuestion, validateSubmit } = require("../Middlewares/validation");





router.post("/" , validateQuiz , createQuiz) ; 
router.post("/:id/questions" , validateQuestion , addQuestion)  ; 
router.get("/:id" , fetchQuestions) ; 
router.post("/:id/submit" , validateSubmit , submitAnswers); 


module.exports = router  ; 

