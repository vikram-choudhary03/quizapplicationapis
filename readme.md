#Online Quiz Application API

A simple backend API for creating, managing, and taking quizzes — built with Node.js, Express, and MongoDB (Mongoose).

This project implements all the core features required by the assignment and follows clean, modular design principles.


##Features

###Core Functionality

-Create a quiz with a title
-Add questions to a quiz
-Fetch all questions for a quiz (without revealing correct answers)
-Submit answers and get a total score


###Tech Stack

-Node.js with Express.js
-MongoDB with Mongoose ODM
-dotenv for environment configuration


#Project Structure

```
quizapplicationapi/
├── controllers/
│   └── quizController.js      
|   └── questionsController.js  
├── middlewares/
    └── validation.js 
├── models/
│   ├── quizSchema.js          # Quiz model
│   └── questionSchema.js      # Question model
├── routes/
│   └── quizRoutes.js          # API route definitions
├── app.js                     
├── index.js                  # Entry point to start server
├── .env                       
├── package.json
└── README.md
```


#Setup Instructions

1️⃣ Clone the Repository
```
git clone https://github.com/<your-username>/quizapplicationapi.git
cd quizapplicationapi
```

2️⃣ Install Dependencies
```
npm install
```

3️⃣ Create a .env File
```
DB_USERNAME=<your-mongodb-username>
DB_PASSWORD=<your-mongodb-password>
PORT=3000
```

4️⃣ Start the Server
```
node index.js
```


➡️ The server will run at: http://localhost:3000




