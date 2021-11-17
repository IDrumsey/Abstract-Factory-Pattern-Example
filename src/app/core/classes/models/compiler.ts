import { CodeFile } from "./code-file";
import { Program } from "./program";

export abstract class Compiler {
    abstract compileCode(file: CodeFile): Program
}
