const Student = require('../models/Student');


const getStudents = async(req, res) => {
    const students = await Student.find();
    if(students){
        res.status(200).json(students);
    }
    else{
        res.status(404).json({error: "No student found"});
    }
};


const createStudent = async(req, res) => {
    try{
        const {name, age, roll_no,class: standard} = req.body;
        const newStudent = await Student.create({name,age,roll_no,class: standard});
        res.status(201).json({message: "Student created successfully"});

    }
    catch(err){
        res.status(400).json({error: err.message});
    }
};

module.exports = { getStudents, createStudent };