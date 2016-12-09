'use strict';

// create a student object
// that has a method `addgrade`, that takes a grade from 1 to 5
// an other method `getAverage`, that returns the average of the grades

var student = {

  reportCard: [],
  addGrade: function(grade) {
    if (grade <= 5 && grade > 0 && Number.isInteger(grade)) {
    this.reportCard.push(grade);
    }
  },
  getAverage: function(grades) {
    return this.reportCard.reduce(function(total, num) {
      return total + num;
    }) / this.reportCard.length;
  }

}

student.addGrade(4);
student.addGrade(3);
student.addGrade(2);
student.addGrade(5);
console.log(student.getAverage());
