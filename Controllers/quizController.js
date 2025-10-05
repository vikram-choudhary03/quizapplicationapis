const Question = require("../models/questionSchema");
const Quiz = require("../models/quizSchema");

async function createQuiz(req, res) {
  try {
    const { title } = req.body;

    const quiz = await Quiz.create({
      title: title.trim(),
    });

    return res.status(200).json({
      msg: "quiz is created with given title",
      quizId: quiz._id.toString(),
    });
  } catch (err) {
    return res.status(503).json({
      err: err.message,
    });
  }
}

async function fetchQuestions(req, res) {
  try {
    const quizId = req.params.id;
    //   const QuestionsList = await Question.find({quizId} ).select('-correctOpt' );

    const quiz = await Quiz.findById(quizId).populate({
      path: "questions",
      select: "-correctOpt",
    });

    if (!quiz) {
      return res.status(404).json({ err: "Quiz not found" });
    }
    return res.status(200).json({
      quizId: quiz._id.toString(),
      title: quiz.title,
      questions: quiz.questions,
    });
  } catch (err) {
    return res.status(503).json({
      err: err.message,
    });
  }
}

async function submitAnswers(req, res) {
  try {
    const { answers } = req.body;
    const { id } = req.params;

    //fetch all question for the given quiz
    const questions = await Question.find({ quizId: id });
    console.log(questions) ; 
    console.log(answers);
    if (!questions.length) {
      return res.status(404).json({ err: "No questions found for this quiz" });
    }

    const map = new Map();

    for (const q of questions) {
      map.set(q._id.toString(), q.correctOpt);
    }

    let score = 0;
    console.log(map) ; 
    for (const ans of answers) {
      if (ans.selectedOpt === map.get(ans.questionId)) {
        score++;
      }
    }

    return res.status(200).json({
      score,
      total: questions.length,
      msg: `You scored ${score}/${questions.length}`,
    });
  } catch (err) {
    return res.status(503).json({
      err: err.message,
    });
  }
}


module.exports = {submitAnswers , createQuiz , fetchQuestions}