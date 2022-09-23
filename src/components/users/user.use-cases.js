const User = require("./users.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AppError = require("../../lib/AppError");

async function register(data){
    const exists = !!(await User.findOne({ email: data.email }));

    if(exists){
        throw new AppError("Email already exists", 400);
    }
    
    let user = new User(data);
    user.password = await bcrypt.hash(data.password, 12);
    await user.save();
    user = user.toObject();
    delete user.password;

    const token = jwt.sign({ id: user._id }, "mohamed");

    return {
        user,
        token
    }
}

async function login(data){
    let user = await User.findOne({ email: data.email });

    if(
        !user ||
        !(await bcrypt.compare(data.password, user.password))
    ){
        throw new AppError("Invalid email or password", 400);
    }

    user = user.toObject();
    delete user.password;

    const token = jwt.sign({ id: user._id }, "mohamed");

    return {
        user,
        token
    }
}

module.exports = {
    register,
    login
}