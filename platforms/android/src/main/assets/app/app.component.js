// original code
// import {Component} from "@angular/core";
"use strict";
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
var core_1 = require("@angular/core");
var status_bar_util_1 = require("./utils/status-bar-util");
var AppComponent = (function () {
    function AppComponent() {
        status_bar_util_1.setStatusBarColors();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<page-router-outlet></page-router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map