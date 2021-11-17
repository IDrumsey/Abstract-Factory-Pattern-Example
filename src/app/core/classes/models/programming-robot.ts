import { ProgramFactory } from "../factories/program-factory";
import { Program } from "./program";

export class ProgrammingRobot {
    constructor(programFactory: ProgramFactory){
        this.factory = programFactory
    }

    factory: ProgramFactory
    createdPrograms: Program[] = []

    makeProgram(filename: string): void {
        let sourceCode = this.factory.writeCode(filename)
        let newProgram = this.factory.compileCode(sourceCode)
        this.createdPrograms.push(newProgram)
    }
}
