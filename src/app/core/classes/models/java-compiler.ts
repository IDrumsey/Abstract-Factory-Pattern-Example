import { Compiler } from "./compiler";
import { JavaCodeFile } from "./java-code-file";
import { JavaProgram } from "./java-program";

export class JavaCompiler extends Compiler {
    compileCode(file: JavaCodeFile): JavaProgram {
        return new JavaProgram(file)
    }
}
