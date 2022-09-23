const Quiz = require("./quizzes.model")

async function createQuiz(data, userId){
    const quiz = await Quiz.create({
        ...data,
        userId
    });

    return { quiz }
}

async function getQuizzesByUserId(userId){
    const quizzes = await Quiz.find({ userId });
    return quizzes;
}

async function getQuizById(id){
    const quiz = await Quiz.findById( id );
    return quiz;
}



module.exports = {
    createQuiz,
    getQuizzesByUserId,
    getQuizById
}