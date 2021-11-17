import { Compilers } from "../compilers";
import { JavaCodeFile } from "../models/java-code-file";
import { JavaCompiler } from "../models/java-compiler";
import { JavaProgram } from "../models/java-program";
import { ProgramFactory } from "./program-factory";

export class JavaFactory extends ProgramFactory {
    writeCode(filename: string): JavaCodeFile {
        return new JavaCodeFile(filename)
    }

    compileCode(sourceCode: JavaCodeFile): JavaProgram {
        return Compilers.getInstance().java.compileCode(sourceCode)
    }
}
