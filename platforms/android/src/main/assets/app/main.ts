// original code
// import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
// import { NgModule } from "@angular/core";
// import { AppComponent } from "./app.component";


// @NgModule({
//     imports: [NativeScriptModule],
//     declarations: [AppComponent],
//     bootstrap: [AppComponent],
// })
// class AppComponentModule {}

// platformNativeScriptDynamic().bootstrapModule(AppComponentModule);


// refactored code
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { setStatusBarColors } from "./utils/status-bar-util";

setStatusBarColors();
platformNativeScriptDynamic().bootstrapModule(AppModule);