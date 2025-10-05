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
  
    if (!questions.length) {
      return res.status(404).json({ err: "No questions found for this quiz" });
    }

    const map = new Map();

    for (const q of questions) {
      map.set(q._id.toString(), q.correctOpt);
    }

    let score = 0;
   
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


// Controller to get all quizzes
const getAllQuizzes = async (req, res) => {
  try {
    // Fetch all quizzes
    const quizzes = await Quiz.find().select("title questions"); // only select title & questions array

    if(!quizzes.length){
      return res.status(400).json({err : "NO quizzes found"})
    }
    // Transform response: include totalQuestions instead of full question IDs
    const quizList = quizzes.map(q => ({
      id: q._id,
      title: q.title,
      totalQuestions: q.questions.length
    }));

    return res.status(200).json({
      quizzes: quizList
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};


module.exports = {submitAnswers , createQuiz , fetchQuestions, getAllQuizzes}