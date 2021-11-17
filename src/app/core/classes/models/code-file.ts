export abstract class CodeFile {
    constructor(filename: string){
        this.filename = filename
        this.date = new Date()
    }

    filename: string
    date: Date

    // Notice this is using the factory method just with string objects instead of user defined objects
    abstract getFullName(): string
}
