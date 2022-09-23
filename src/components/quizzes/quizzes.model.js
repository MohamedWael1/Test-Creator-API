const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, "Question title is required"],
    },
    answers: {
        type: [String],
        required: [true, "Answers are required"],
    },
    correctAnswerIndex: {
        type: Number,
        required: [true, "Please choose the correct answer"]
    }
})

const quizSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title:{
        type: String,
        required: [true , "Quiz title is required"]
    },
    questions: {
        type: [questionSchema],
        required: true,
        default: []
    }
});

module.exports = mongoose.model("Quiz" , quizSchema)