import { CCodeFile } from "./c-code-file";
import { CProgram } from "./c-program";
import { Compiler } from "./compiler";

export class CCompiler extends Compiler {
    compileCode(file: CCodeFile): CProgram {
        return new CProgram(file)
    }
}
