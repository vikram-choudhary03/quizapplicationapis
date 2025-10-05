function validateQuiz(req, res, next) {
  const { title } = req.body;

  if (!title ||  typeof(title) !=='string' || !title.trim()) {
    return res.status(400).json({
      err: "Title is required & must be string ",
    });
  }

  next();
}

function validateQuestion(req, res, next) {
  const { text, options, correctOpt } = req.body;

  const quizId = req.params.id;

  if (!text || typeof text !== "string" || !text.trim()) {
    return res.status(400).json({
      err: "text is required & must be string ",
    });
  }

  if (!Array.isArray(options) || options.length < 2) {
    return res.status(400).json({
      err: "Options must be array of atleast  2 items",
    });
  }

  if (
    typeof correctOpt !== "number" ||
    correctOpt < 0 ||
    correctOpt >= options.length
  ) {
    return res.status(400).json({
      err: `Correct Option must be between 0 and ${options.length - 1}`,
    });
  }

  next();
}


function validateSubmit (req, res, next){
    const {answers} = req.body  ; 
    
    if(!answers || !Array.isArray(answers)  || answers.length ==0){
      return res.status(400).json({err : "Answers are required & it must be array and non-empty"})
    }


    for(const ans of answers){
        if(!ans.questionId ||  typeof(ans.questionId) !=='string' || !ans.questionId.trim() ){
            return res.status(400).json({
                err : "Each answer must include the valid questionId" 
            }); 
        }

        if(typeof(ans.selectedOpt) !=='number' || ans.selectedOpt <0 || !Number.isInteger(ans.selectedOpt)){
            return res.status(400).json({
                err : "Each answer must include the valid selectedOpt"
            })
        }
    }
    next() ; 
  
}


module.exports = {validateQuestion, validateQuiz, validateSubmit} ;
