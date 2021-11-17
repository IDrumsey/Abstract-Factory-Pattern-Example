import { CCodeFile } from "./c-code-file";
import { Program } from "./program";

export class CProgram extends Program {
    constructor(sourceCode: CCodeFile){
        super(sourceCode)
    }

    run(): void {
        console.log("running C program: ", this.file.getFullName())
    }
}
