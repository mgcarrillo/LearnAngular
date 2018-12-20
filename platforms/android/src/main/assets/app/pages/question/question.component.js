"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var question_1 = require("../../shared/question/question");
var question_list_service_1 = require("../../shared/question/question-list.service");
var QuestionComponent = (function () {
    function QuestionComponent(router, questionService, page) {
        this.router = router;
        this.questionService = questionService;
        this.page = page;
        this.question = new question_1.Question();
        this.question.text = "What is the circumference of a circle";
        this.question.answers.A = "Diameter * pi";
        this.question.answers.B = "Area * Perimeter";
        this.question.answers.C = "Sum of all squares";
        this.question.answers.D = "L * W * H";
        //this.user.email = "user@nativescript.org";
        //this.user.password = "password";
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://background";
    };
    QuestionComponent.prototype.submit = function () {
        alert("Answer submitted!");
        // if (!this.user.isValidEmail()) {
        //   alert("Enter a valid email address.");
        //   return;
        // }
        // if (this.isLoggingIn) {
        //   this.login();
        // } else {
        //   this.signUp();
        // }
    };
    QuestionComponent.prototype.skip = function () {
        alert("Skipped question, moving to next");
    };
    QuestionComponent.prototype.next = function () {
        alert("Going to next question");
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], QuestionComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("answer"), 
        __metadata('design:type', core_1.ElementRef)
    ], QuestionComponent.prototype, "answer", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [question_list_service_1.QuestionListService],
            templateUrl: "pages/question/question.html",
            styleUrls: ["pages/question/question-common.css", "pages/question/question.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, question_list_service_1.QuestionListService, page_1.Page])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map