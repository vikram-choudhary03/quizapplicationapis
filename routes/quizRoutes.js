const express = require('express') ; 
const router  = express.Router() ; 
const { addQuestion } = require("../Controllers/questionsController");
const { createQuiz, fetchQuestions, submitAnswers, getAllQuizzes } = require("../Controllers/quizController");
const { validateQuiz, validateQuestion, validateSubmit } = require("../Middlewares/validation");





router.post("/quiz" , validateQuiz , createQuiz) ; 
router.post("/quiz/:id/question" , validateQuestion , addQuestion)  ; 
router.get("/quiz/:id" , fetchQuestions) ; 
router.post("/quiz/:id/submit" , validateSubmit , submitAnswers); 
router.get("/quizzes" , getAllQuizzes); 


module.exports = router  ; 

