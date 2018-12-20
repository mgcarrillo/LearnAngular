// original code
// import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
// import { NgModule } from "@angular/core";
// import { AppComponent } from "./app.component";
"use strict";
// @NgModule({
//     imports: [NativeScriptModule],
//     declarations: [AppComponent],
//     bootstrap: [AppComponent],
// })
// class AppComponentModule {}
// platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
// refactored code
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var status_bar_util_1 = require("./utils/status-bar-util");
status_bar_util_1.setStatusBarColors();
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map