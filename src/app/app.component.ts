import { Component, VERSION, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
declare var LeaderLine: any;

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  lines: any[];

  // ngAfterViewInit() {
  //   let startEl = document.getElementById("start");
  //   let endEl = document.getElementById("end");
  //   new LeaderLine(startEl, endEl);
  // }

  constructor() {
    this.lines = [];
  }

  addLine() {
    // GZ201 - LINE
    let gz201 = document.getElementById("gz201");
    let gz202 = document.getElementById("gz202");

    // GZ01 - TANK
    let gz01 = document.getElementById("gz01");
    let gz01fb01 = document.getElementById("gz01.fb01");
    let gz01fb02 = document.getElementById("gz01.fb02");

    let gz01ToGz01fb01 = new LeaderLine(gz01, gz01fb01, {
      startPlug: "disc",
      endPlug: "disc",
      dash: true,
      path: "straight"
    });
    this.lines.push(gz01ToGz01fb01);

    let gz01fb01ToGz01f02 = new LeaderLine(gz01fb01, gz01fb02, {
      startPlug: "disc",
      endPlug: "disc",
      dash: true,
      path: "straight"
    });
    this.lines.push(gz01fb01ToGz01f02);

    let gz01fb02ToGz201 = new LeaderLine(gz01fb02, gz201, {
      startPlug: "disc",
      endPlug: "disc",
      dash: true,
      path: "grid"
    });
    this.lines.push(gz01fb02ToGz201);

     // GZ02 - TANK
    let gz02 = document.getElementById("gz02");
    let gz02fb01 = document.getElementById("gz02.fb01");
    let gz02fb02 = document.getElementById("gz02.fb02");

    let gz02ToGz02fb01 = new LeaderLine(gz02, gz02fb01, {
      startPlug: "disc",
      endPlug: "disc",
      dash: true,
      path: "straight"
    });
    this.lines.push(gz02ToGz02fb01);

    let gz02fb01ToGz02fb02 = new LeaderLine(gz02fb01, gz02fb02, {
      startPlug: "disc",
      endPlug: "disc",
      dash: true,
      path: "straight"
    });
    this.lines.push(gz02fb01ToGz02fb02);

    let gz02fb02ToGz201 = new LeaderLine(gz02fb02, gz201, {
      startPlug: "disc",
      endPlug: "disc",
      dash: true,
      path: "straight"
    });
    this.lines.push(gz02fb02ToGz201);

    let gz02fb02ToGz202 = new LeaderLine(gz02fb02, gz202, {
      startPlug: "disc",
      endPlug: "disc",
      dash: true,
      path: "grid"
    });
    this.lines.push(gz02fb02ToGz202);

     // GZ03 - TANK
    let gz03 = document.getElementById("gz03");
    let gz03fb01 = document.getElementById("gz03.fb01");
    let gz03fb02 = document.getElementById("gz03.fb02");

    let gz03ToGz03fb01 = new LeaderLine(gz03, gz03fb01, {
      startPlug: "disc",
      endPlug: "disc",
      dash: true,
      path: "straight"
    });
    this.lines.push(gz03ToGz03fb01);

    let gz03fb01ToGz03f02 = new LeaderLine(gz03fb01, gz03fb02, {
      startPlug: "disc",
      endPlug: "disc",
      dash: true,
      path: "straight"
    });
    this.lines.push(gz03fb01ToGz03f02);

    let gz03fb02ToGz202 = new LeaderLine(gz03fb02, gz202, {
      startPlug: "disc",
      endPlug: "disc",
      dash: true,
      path: "grid"
    });
    this.lines.push(gz03fb02ToGz202);
  }
}
