const express = require("express");
const userController = require("../users/users.controller");
const quizzesController = require("./quizzes.controller");
const router = express.Router()

router
    .route("/")
    .post(userController.protect, quizzesController.createQuiz)
    .get(userController.protect, quizzesController.getCurrentUserQuizzes)

router
    .route("/:id")
    .get(quizzesController.getQuizById)
module.exports= router
