
# Online Quiz Application API

A simple backend API for creating, managing, and taking quizzes — built with Node.js, Express, and MongoDB (Mongoose).


## 🚀 Features

### 🎯 Core Functionality
- Create a quiz with a title
- Add questions to a quiz
- Fetch all questions for a quiz (without revealing correct answers)
- Submit answers and get a total score

### 🧩 Tech Stack
- Node.js with Express.js
- MongoDB with Mongoose ODM
- dotenv for environment configuration

--------------------------------------------------

## 📁 Project Structure
```
quizapplicationapi/
├── controllers/
│   └── quizController.js      
│   └── questionsController.js      
├── models/
│   ├── quizSchema.js          # Quiz model
│   └── questionSchema.js      # Question model
├── routes/
│   └── quizRoutes.js          # API route definitions
├── app.js                     
├── index.js                  # Entry point to start server
├── .env.example               # Environment variables
├── package.json
└── README.md
```
--------------------------------------------------

## Setup Instructions

1️⃣ Clone the Repository
```
$ https://github.com/vikram-choudhary03/quizapplicationapis.git
$ cd quizapplicationapi
```

2️⃣ Install Dependencies
```
$ npm install
```

3️⃣ Create a .env File
```
DB_USERNAME=yourMongoUsername
DB_PASSWORD=yourMongoPassword
PORT=3000
```

4️⃣ Start the Server
```
$ node index.js
```
Server will run at http://localhost:3000

--------------------------------------------------

## API Endpoints

1️⃣ Create a Quiz
POST /quiz


Request Body:
```
{
  "title": "General Knowledge Quiz"
}
```

Response:
```
{
  "msg": "quiz is created with given title",
  "quizId": "6700e2fa56a4b3..."
}
```

--------------------------------------------------

2️⃣ Add Question to a Quiz
POST /quiz/:id/questions

Request Body:
```
{
  "text": "What is the capital of France?",
  "options": ["Paris", "Rome", "Berlin", "Madrid"],
  "correctOpt": 0
}
```

Response:
```
{
  "msg": "Question is inserted"
}
```

--------------------------------------------------

3️⃣ Get All Questions for a Quiz
GET /quiz/:id

Returns all questions for a quiz without including the correct answer field.

Example Response:
```
{
    "quizId": "68e239b5602e5acb64da66fc",
    "title": "Fruite Knowledge",
    "questions": [
        {
            "_id": "68e242c8602e5acb64da6700",
            "text": "wht is the colour of the mango",
            "options": [
                "red",
                "yellow",
                "green",
                "blue"
            ],
            "quizId": "68e239b5602e5acb64da66fc",
            "__v": 0
        },
    ]
}
```

--------------------------------------------------

4️⃣ Submit Answers & Get Score
POST /quiz/:id/submit

Request Body:
```
{
  "answers": [
    { "questionId": "6700e4d8...", "selectedOpt": 0 },
    { "questionId": "6700e4e0...", "selectedOpt": 2 }
  ]
}
```

Response:
```
{
  "totalQuestions": 2,
  "score": 1,
  "msg": "You scored 1/2"
}
```




