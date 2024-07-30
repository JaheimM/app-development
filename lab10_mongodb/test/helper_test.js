//import mongoose 
const { beforeEach } = require('mocha')
const mongoose = require('mongoose');

// connect to MongoDB where 'students_list' is the namd of the database
mongoose.connect("mongodb://localhost/students_list");

// check if connected
mongoose.connection
    // use .once to watch for mongoDB the first time when the event ocurred
    .once('open', () => {
        console.log('\n----- Connected to MongoDB -----\n')
    })
    // use .on to watch for error in the connection
    .on('error', (e) => {
        console.log('Error connecting'), e
    })

    // clear all collections from the 'students' document
    beforeEach(function(done){
        mongoose.connection.collections.students.drop()
        done()
    })