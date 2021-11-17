import { Component } from '@angular/core';
import { CFactory } from './core/classes/factories/c-factory';
import { JavaFactory } from './core/classes/factories/java-factory';
import { ProgrammingRobot } from './core/classes/models/programming-robot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cRobot = new ProgrammingRobot(new CFactory())
  javaRobot = new ProgrammingRobot(new JavaFactory())

  nextAvailableID = 1

  onCBtnClick(): void {
    this.cRobot.makeProgram(this.getProgramName())
  }

  onJavaBtnClick(): void {
    this.javaRobot.makeProgram(this.getProgramName())
  }

  getProgramName(): string {
    let name = this.nextAvailableID.toString()
    this.nextAvailableID++
    return name
  }
}
