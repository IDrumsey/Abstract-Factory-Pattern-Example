import { Compilers } from "../compilers";
import { CCodeFile } from "../models/c-code-file";
import { CCompiler } from "../models/c-compiler";
import { CProgram } from "../models/c-program";
import { ProgramFactory } from "./program-factory";

export class CFactory extends ProgramFactory {
    writeCode(filename: string): CCodeFile {
        return new CCodeFile(filename)
    }

    compileCode(sourceCode: CCodeFile): CProgram {
        return Compilers.getInstance().c.compileCode(sourceCode)
    }
}
