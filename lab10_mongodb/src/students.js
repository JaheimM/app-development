//import mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema is a bluepring that outlines how data is organized and stored

// configure schema
const StudentSchema = new Schema({name: String})

// create model schema for each student
const Student = mongoose.model('student', StudentSchema)

// export the schema model
module.exports = Student