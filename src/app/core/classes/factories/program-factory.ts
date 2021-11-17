import { CodeFile } from "../models/code-file";
import { Program } from "../models/program";

export abstract class ProgramFactory {
    abstract writeCode(filename: string): CodeFile
    abstract compileCode(sourceCode: CodeFile): Program
}
