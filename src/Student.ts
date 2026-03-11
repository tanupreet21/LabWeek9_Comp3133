export default class Student {
    studentID: number
    firstName: string
    lastName: string = "NA"
    percentage: number = 0.0

    // class properties must be initialized with default values or using constructors
    constructor(studId: number, firstName: string, lastName: string = "NA", percentage: number = 0.0){
        this.studentID = studId
        this.firstName = firstName
        this.lastName = lastName
        this.percentage = percentage
    }

    showStudentDetails(){
        console.log("\nStudent ID: ", this.studentID);
        console.log("Name: ", this.firstName, ", ", this.lastName);
        console.log("percentage: ", this.percentage, "\n");
    }

}