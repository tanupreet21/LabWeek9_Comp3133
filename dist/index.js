"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var PartTimeEmployee_1 = require("./PartTimeEmployee");
var Student_1 = require("./Student");
console.log("Week 9 - TypeScript");
console.log("Student class ----------- \n");
var s1 = new Student_1.default(101, "Mirna");
s1.showStudentDetails();
var s2 = new Student_1.default(102, "John", "Ken", 67);
s2.showStudentDetails();
var n1 = 30;
n1 = 22;
// Error - mismatched type - typescript is statically typed language
//n1 = "Hello" 
// any type allows any type of value to be assigned - opt-out of type checking
var v1;
v1 = 34;
v1 = "Hi";
v1 = null;
v1 = undefined;
var e1 = new Employee_1.default(111, "Julie", "Leo", "IT", 68000);
e1.showDetails();
//cannot be reassigned - it's readonly
//e1.empID = 23
console.log("Emp ID for e1: ", e1.empID);
// salary is protected 
// console.log("Emp e1 salary: ", e1.salary);
// department is protected
// console.log("Emp e1 department: ", e1.department);
console.log("Emp e1 department: ", e1.getDepartment());
console.log("\nPartTimeEmployee");
var p1 = new PartTimeEmployee_1.default(100, "Kim", "Par", "IT", 20, 18);
p1.showDetails();
