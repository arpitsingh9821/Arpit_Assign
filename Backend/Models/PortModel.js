const mongoose = require('mongoose');

const introSchema =new mongoose.Schema({
    topCaption: {
        type : String,
        required : true
     },
    fullName: {
       type : String,
       required : true
    },
   Degree: {
       type : String,
         required : true
    },
    bottomCaption: {
       type : String,
       required : true
    },
});

const aboutSchema =new mongoose.Schema({
    aboutImg: {
        type : String,
        required : true
    },
    Desc: {
        type : String,
        required : true
    }
});

const academicsSchema =new mongoose.Schema({
    academicsImg: {
        type : String,
        required : true
    },
    Desc: {
        type : String,
        required : true
    }
});

const ProjectsSchema =new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    year: { 
        type : String,
        required : true
    },
    align: {
        type : String,
        required : true
    },
    image:  {
        type : String,
        required : true
    },
    link: {
        type : String,
        required : true
    }
});

const contactSchema =new mongoose.Schema({
    email: {
        type : String,
        required : true
    },
   contact: {
        type : String,
        required : true
    },
    location: {
        type : String,
        required : true
    }
});

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

module.exports = {
Intro : mongoose.model('intros', introSchema),
About : mongoose.model('abouts', aboutSchema),
Academic :mongoose.model('academics', academicsSchema),
Projects : mongoose.model('Projects', ProjectsSchema),
Contact : mongoose.model('Contact', contactSchema),
User : mongoose.model('User', userSchema),


}