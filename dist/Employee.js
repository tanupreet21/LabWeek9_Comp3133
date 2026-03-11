"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(empId, fName, lName, department, salary) {
        this.empID = empId;
        this.firstName = fName;
        this.lastName = lName;
        this.department = department;
        this.salary = salary;
    }
    Employee.prototype.showDetails = function () {
        console.log("\n Employee information ---------");
        console.log("Name: ", this.firstName, ", ", this.lastName);
        console.log("Employee Id: ", this.empID);
        console.log("Department: ", this.department);
        console.log("Salary: $", this.salary);
    };
    Employee.prototype.getDepartment = function () {
        return this.department;
    };
    return Employee;
}());
exports.default = Employee;
