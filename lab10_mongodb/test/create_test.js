// import assert. assert is used to compare two boolean values
const assert = require("assert");

//import student schema 
const Student = require('../src/students');


// describe function to push testing through Mocha 
describe('create the first data', () => {
// push data to list and prints list that could be executed
    it('saved the student', () => {
        const student1 = new Student({name: "Peter"})

        // read and save the student in the database. Mongo wull save the new student in the database
        student1.save()

        // check if the student is not new using the .then method
    /*  if the studen tis new, the promise reaches the 'fulfilled' state and will proceed to
    create the schema for the new student. otherwise, the promise reaches the objective state 
    and will proceed to reject line 'student.save()'
         */
        .then(function() {
            assert(!student1.isNew)
        })
    }) 
})