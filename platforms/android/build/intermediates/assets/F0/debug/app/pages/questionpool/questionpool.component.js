"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var questionpool_1 = require("../../shared/questionpool/questionpool");
var questionpool_2 = require("../../shared/questionpool/questionpool");
var questionpool_3 = require("../../shared/questionpool/questionpool");
var questionpool_list_service_1 = require("../../shared/questionpool/questionpool-list.service");
var QuestionPoolComponent = (function () {
    // TODO determine children
    function QuestionPoolComponent(router, questionPoolService, page) {
        this.router = router;
        this.questionPoolService = questionPoolService;
        this.page = page;
        this.isLoggingIn = true;
        this.questionPools = new questionpool_2.QuestionPoolList();
        this.questionPools.default = new questionpool_3.DefaultPool();
        var qp = new questionpool_1.QuestionPool();
        qp.id = "1";
        qp.poolclass = "11a";
        qp.year = 2014;
        this.questionPools.default.pools.push(qp);
    }
    QuestionPoolComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://background";
    };
    QuestionPoolComponent.prototype.submit = function () {
        alert("Question pool selected");
    };
    QuestionPoolComponent.prototype.skip = function () {
        alert("Skipped question, moving to next");
    };
    QuestionPoolComponent.prototype.next = function () {
        alert("Going to next question");
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], QuestionPoolComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("pickedpool"), 
        __metadata('design:type', core_1.ElementRef)
    ], QuestionPoolComponent.prototype, "pickedpool", void 0);
    QuestionPoolComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [questionpool_list_service_1.QuestionPoolListService],
            templateUrl: "pages/questionpool/questionpool.html",
            styleUrls: ["pages/questionpool/questionpool-common.css", "pages/questionpool/questionpool.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, questionpool_list_service_1.QuestionPoolListService, page_1.Page])
    ], QuestionPoolComponent);
    return QuestionPoolComponent;
}());
exports.QuestionPoolComponent = QuestionPoolComponent;
//# sourceMappingURL=questionpool.component.js.map