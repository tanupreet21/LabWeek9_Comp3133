import Employee from "./Employee";
import PartTimeEmployee from "./PartTimeEmployee";
import Student from "./Student";

console.log("Week 9 - TypeScript");

console.log(`Student class ----------- \n`);

let s1 = new Student(101, "Mirna");
s1.showStudentDetails();

let s2 = new Student(102, "John", "Ken", 67)
s2.showStudentDetails()

let n1 : number = 30
n1 = 22
// Error - mismatched type - typescript is statically typed language
//n1 = "Hello" 

// any type allows any type of value to be assigned - opt-out of type checking
let v1 : any
v1 = 34
v1 = "Hi"
v1 = null
v1 = undefined

let e1 = new Employee(111, "Julie", "Leo", "IT", 68000);
e1.showDetails();

//cannot be reassigned - it's readonly
//e1.empID = 23
console.log("Emp ID for e1: ", e1.empID);

// salary is protected 
// console.log("Emp e1 salary: ", e1.salary);
// department is protected
// console.log("Emp e1 department: ", e1.department);
console.log("Emp e1 department: ", e1.getDepartment());

console.log("\nPartTimeEmployee")
let p1 = new PartTimeEmployee(100, "Kim", "Par", "IT",20, 18);
p1.showDetails()

