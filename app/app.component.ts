// original code
// import {Component} from "@angular/core";

// @Component({
//     selector: "my-app",
//     templateUrl: "app.component.html",
// })
// export class AppComponent {
//     public counter: number = 7;

//     public get message(): string {
//         if (this.counter > 0) {
//             return this.counter + " taps left";
//         } else {
//             return "Yay! \nnow, You are ready to start building ham radio apps!";
//         }
//     }
    
//     public onTap() {
//         this.counter--;
//     }
// }

// refactored code
import { Component } from "@angular/core";

import { setStatusBarColors } from "./utils/status-bar-util";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
  constructor() {
    setStatusBarColors();
  }
}
