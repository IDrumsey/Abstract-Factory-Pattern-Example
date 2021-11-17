import { JavaCodeFile } from "./java-code-file";
import { Program } from "./program";

export class JavaProgram extends Program {
    constructor(sourceCode: JavaCodeFile){
        super(sourceCode)
    }

    run(): void {
        console.log("running Java program: ", this.file.getFullName())
    }
}
