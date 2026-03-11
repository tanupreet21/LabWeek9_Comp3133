import Employee from "./Employee";

export default class PartTimeEmployee extends Employee{

    hoursWorked: number
    hourlyRate: number

    constructor(
        empId: number,
        fName: string,
        lName: string,
        department: string,
        hours: number,
        rate: number,
        salary: number = 0.0
    ){
            super(empId, fName, lName, department, salary)

            this.hourlyRate = rate
            this.hoursWorked = hours

            this.getSalary()

    }

    // Overriding function from the parent class
    showDetails(): void {
        super.showDetails()
        console.log("Hourly rate: $", this.hourlyRate);
        console.log("Hours: $", this.hoursWorked);
    }

    protected getSalary() : number{
        this.salary = this.hoursWorked * this.hourlyRate;
        return this.salary
    }
}