const quizzesUseCases = require("./quizzes.use-cases");
const catchAsync = require("../../lib/catchAsync");

const createQuiz = catchAsync(async (req, res) => {
    const data = await quizzesUseCases.createQuiz(req.body, req.user.id);
    return res.status(200).send(data);
});

const getCurrentUserQuizzes = catchAsync(async (req, res) => {
    const data = await quizzesUseCases.getQuizzesByUserId(req.user.id);
    return res.status(200).send(data);
});

const getQuizById = catchAsync(async (req , res) =>{
    const data = await quizzesUseCases.getQuizById(req.params.id);
    return res.status(200).send(data)
})

module.exports = {
    createQuiz,
    getCurrentUserQuizzes,
    getQuizById
}