import { CodeFile } from "./code-file";

export class CCodeFile extends CodeFile {
    constructor(filename: string){
        super(filename)
    }
    
    getFullName(): string {
        return this.filename + '.c'
    }
}
