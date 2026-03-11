"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    // class properties must be initialized with default values or using constructors
    function Student(studId, firstName, lastName, percentage) {
        if (lastName === void 0) { lastName = "NA"; }
        if (percentage === void 0) { percentage = 0.0; }
        this.lastName = "NA";
        this.percentage = 0.0;
        this.studentID = studId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.percentage = percentage;
    }
    Student.prototype.showStudentDetails = function () {
        console.log("\nStudent ID: ", this.studentID);
        console.log("Name: ", this.firstName, ", ", this.lastName);
        console.log("percentage: ", this.percentage, "\n");
    };
    return Student;
}());
exports.default = Student;
