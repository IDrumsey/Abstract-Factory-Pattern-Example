import { CodeFile } from "./code-file";

export class JavaCodeFile extends CodeFile {
    constructor(filename: string){
        super(filename)
    }
    
    getFullName(): string {
        return this.filename + '.java'
    }
}