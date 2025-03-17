const { create } = require('hbs');
const User = require('../Models/userModel');
const createError = require('../utils/appError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { configDotenv } = require('dotenv');
require('dotenv').config();

exports.signup = async (req, res) => {

    try{
        const user = await User.findOne({email: req.body});
        if(user){
            return next(new createError( 'User already exists', 400));
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
       
        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });
        //jwt(json web token)
        const token = jwt.sign({_id: newUser._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        res.status(201).json({
            status: 'success',
            message: 'User Registered successfully',
            token,
        });
    }
    catch(error){
        next(error);
    }
};

       

exports.login = async (req, res) => {
    
};
