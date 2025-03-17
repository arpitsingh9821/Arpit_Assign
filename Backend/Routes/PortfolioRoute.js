const router = require('express').Router();
const {Intro, About, Academic, Projects, Contact, User} = require('../Models/PortModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authController = require('../controller/authController');
const createError = require('../utils/appError');
require('dotenv').config();

//register
router.post('/signup', async (req, res, next) => {
    try{
        const user = await User.findOne({email: req.body.email});
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
            user: {
                id: newUser._id,
                username: newUser.username,
            },
        });
    }
    catch(error){
        next(error);
    };
});
//login Authentication
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return next(new createError('User not found', 404));

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return next(new createError('Invalid credentials', 401));

        // JWT Token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).json({
            status: 'success',
            message: 'User logged in successfully',
            token,
            user:{
                id: user._id,
                username: user.username,
            },
        });

    } catch (error) {
        next(error);
    }
});

// get all portfolio data
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const academics = await Academic.find();
        const projects = await Projects.find();
        const contacts = await Contact.find();
        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            academic: academics[0],
            Projects: projects,
            contact: contacts[0] 
        }
        );
    } catch (err) {
        res.status(500).send(err);
    }
});
// update portfolio data
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body.id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data : intro,
        success: true,
        message: "Intro updated successfully",
    } );
    
    } catch (err) {
        res.status(500).send(err);
    }
});
// update about data
router.post('/update-about', async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body.id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data : about,
        success: true,
        message: "About updated successfully",
    } );
    
    } catch (err) {
        res.status(500).send(err);
    }
});
// update project data
router.post('/update-academics', async (req, res) => {
    try {
        const academics = await Academic.findOneAndUpdate(
            { _id: req.body.id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data : academics,
        success: true,
        message: "Academics updated successfully",
    } );
    
    } catch (err) {
        res.status(500).send(err);
    }
});
// update project data
router.post('/update-contact', async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body.id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data : contact,
        success: true,
        message: "Contact updated successfully",
    } );
    
    } catch (err) {
        res.status(500).send(err);
    }
});
// add project data
router.post('/add-project', async (req, res) => {
    try {
        const project = new Projects(req.body);
        await project.save();
        res.status(200).send({
            data : project,
            success: true,
            message: "Project added successfully",
        });
    } catch (err) {
        res.status(500).send(err);
    }
});
//update project
router.post('/update-project', async (req, res) => {
    try {
        const project = await Projects.findOneAndUpdate(
            { _id: req.body.id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data : project,
            success: true,
            message: "Project updated successfully",
        });
    } catch (err) {
        res.status(500).send(err);
    }
}
);
// delete project
router.post('/delete-project', async (req, res) => {
    try {
        const project = await Projects.findOneAndDelete({ _id: req.body.id });
        res.status(200).send({
            data: project,
            success: true,
            message: "Project deleted successfully",
        });
    } catch (err) {
        res.status(500).send(err);
    }
});   
module.exports = router;