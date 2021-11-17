import { CCompiler } from "./models/c-compiler"
import { JavaCompiler } from "./models/java-compiler"

export class Compilers {
    static instance: Compilers

    private constructor(){}

    static getInstance(): Compilers {
        if(!this.instance){
            this.instance = new Compilers()
        }

        return this.instance
    }

    // data
    c = new CCompiler()
    java = new JavaCompiler()
}
