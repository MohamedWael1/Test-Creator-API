const express = require("express");
const userRouter = require("./components/users/users.router");
const mongoose = require("mongoose");
const config = require("./lib/config");
const quizRouter = require("./components/quizzes/quizzes.router")
const cors = require("cors")

const app = express();

app.use(cors())

app.use(express.json())

app.use("/api/users", userRouter);
app.use("/api/quizzes", quizRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).send({ message: err.message })
});

const PORT = process.env.PORT || 8000;

mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})
