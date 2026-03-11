"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(empId, fName, lName, department, hours, rate, salary) {
        if (salary === void 0) { salary = 0.0; }
        var _this = _super.call(this, empId, fName, lName, department, salary) || this;
        _this.hourlyRate = rate;
        _this.hoursWorked = hours;
        _this.getSalary();
        return _this;
    }
    // Overriding function from the parent class
    PartTimeEmployee.prototype.showDetails = function () {
        _super.prototype.showDetails.call(this);
        console.log("Hourly rate: $", this.hourlyRate);
        console.log("Hours: $", this.hoursWorked);
    };
    PartTimeEmployee.prototype.getSalary = function () {
        this.salary = this.hoursWorked * this.hourlyRate;
        return this.salary;
    };
    return PartTimeEmployee;
}(Employee_1.default));
exports.default = PartTimeEmployee;
