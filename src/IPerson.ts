// interface

export default interface IPerson{
    firstName: string
    lastName: string

    showDetails() : void

    // Interface methods cannot have a body
    // showDetails() : {
    //     console.log(`firstname : $(this.firstName)`);
    // }
}