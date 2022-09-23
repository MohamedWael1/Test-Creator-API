const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const userUseCases = require("./user.use-cases");
const catchAsync = require("../../lib/catchAsync");
const AppError = require("../../lib/AppError");

const protect = catchAsync(async (req, res, next) => {
    const token = req.get("Authorization");
    if(!token){
        throw new AppError("Unauthorized", 401);
    }
    const payload = await promisify(jwt.verify)(token.replace("Bearer ", ""), "mohamed");
    req.user = payload;
    next();
})

const login = catchAsync(async (req, res) => {
    const { user, token } = await userUseCases.login(req.body);
    return res.status(200).send({ user, token });
});

const register = catchAsync(async (req, res) => {
    const { user, token } = await userUseCases.register(req.body);
    return res.status(200).send({ user, token });
});

module.exports = {
    protect,
    login,
    register
}