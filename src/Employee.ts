import IPerson from "./IPerson"

export default class Employee implements IPerson{
    // public - default access - can be accessed everywhere in the app
    firstName: string;
    lastName: string;

    // readonly - cannot be modified once intialized
    readonly empID: number;
    // private - can be accessed within class only - cannot be accessed anywhere else, not even in the child class 
    private department: string;
    // protected - private - can be accessed within class and child class only - cannot be accessed anywhere else
    protected salary: number;

    constructor(empId: number, fName: string, lName: string, department: string, salary: number){
        this.empID = empId;
        this.firstName = fName;
        this.lastName = lName;
        this.department = department;
        this.salary = salary;
    }

    showDetails(): void {
        console.log("\n Employee information ---------");
        console.log("Name: ", this.firstName, ", ", this.lastName);
        console.log("Employee Id: ", this.empID);
        console.log("Department: ", this.department);
        console.log("Salary: $", this.salary);
    }

    getDepartment() : string {
        return this.department;
    }
    
}