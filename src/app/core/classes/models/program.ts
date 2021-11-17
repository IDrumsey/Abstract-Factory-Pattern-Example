import { CodeFile } from "./code-file"

export abstract class Program {
    constructor(sourceCode: CodeFile) {
        this.file = sourceCode
    }

    file: CodeFile
    abstract run(): void
}
