const asset = require('assert');
const Student = require('../src/students');
const { describe, beforeEach } = require('mocha')

describe('Delete the records', function() {
    let student1
    
    beforeEach(function(done){
        student1 = new Student({name: "Ann"})
        student1.save()

        .then(function(){done()})
    })

    it('delete by id', function(){
        Student.findByIdAndDelete(student1._id)
        .then(function(){
            Student.findOne({name: "Ann"})
        })
        .then(function(student){
            assert(student==null)
            done()
        })
    })
})