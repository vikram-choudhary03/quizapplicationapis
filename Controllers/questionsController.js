const Question = require("../models/questionSchema");
const Quiz = require("../models/quizSchema");

async function addQuestion(req, res) {
  try {
    const { text, options, correctOpt } = req.body;

    const quizId = req.params.id;

    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ err: "Quiz not found" });
    }

    const question = await Question.create({
      text: text.trim(),
      options: options,
      correctOpt,
      quizId,
    });

    quiz.questions.push(question._id);
    await quiz.save();

    return res.status(200).json({
      msg: "Question is inserted",
    });
  } catch (err) {
    return res.status(503).json({
      err: err.message,
    });
  }
}


module.exports = { addQuestion }; 
