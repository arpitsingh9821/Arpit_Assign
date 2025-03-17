
// const {User} = require('../Models/PortModel');
// const createError = require('../utils/appError');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// require('dotenv').config();

// exports.signup = async (req, res, next) => {
//     try {
//         // ✅ Checking for username instead of email
//         const user = await User.findOne({ username: req.body.username });
        
//         if (user) {
//             return next(new AppError('User already exists', 400));
//         }

//         const hashedPassword = await bcrypt.hash(req.body.password, 12);

//         const newUser = await User.create({
//             ...req.body,
//             password: hashedPassword,
//         });

//         const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
//             expiresIn: process.env.JWT_EXPIRES_IN,
//         });

//         res.status(201).json({
//             status: 'success',
//             message: 'User Registered successfully',
//             token,
//             user: {
//                 id: newUser._id,
//                 username: newUser.username
//             }
//         });
//     } catch (error) {
//         console.error("Signup Error:", error);
//         next(error);
//     }
// };