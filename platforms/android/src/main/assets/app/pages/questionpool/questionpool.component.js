"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var questionpool_1 = require("../../shared/questionpool/questionpool");
var questionpool_2 = require("../../shared/questionpool/questionpool");
var questionpool_3 = require("../../shared/questionpool/questionpool");
var questionpool_4 = require("../../shared/questionpool/questionpool");
var questionpool_5 = require("../../shared/questionpool/questionpool");
var questionpool_6 = require("../../shared/questionpool/questionpool");
var questionpool_list_service_1 = require("../../shared/questionpool/questionpool-list.service");
var question_list_service_1 = require("../../shared/question/question-list.service");
var QuestionPoolComponent = (function () {
    // TODO determine children
    function QuestionPoolComponent(router, questionPoolService, questionListService, page) {
        this.router = router;
        this.questionPoolService = questionPoolService;
        this.questionListService = questionListService;
        this.page = page;
        this.masterList = [];
        this.isLoading = false;
        this.listLoaded = false;
        this.counter = 7;
        this.questionPools = new questionpool_2.QuestionPoolList();
        this.questionPools.default = new questionpool_3.DefaultPool();
        this.questionPools.fcc = new questionpool_4.FccCommercialPool();
        this.questionPools.canadian = new questionpool_6.CanadianPool();
        this.questionPools.frenchCanadian = new questionpool_5.FrenchCanadianPool();
        this.questionPools.default.pools = [];
        this.questionPools.frenchCanadian.pools = [];
        this.questionPools.canadian.pools = [];
        this.questionPools.fcc.pools = [];
        // initialize question pool
        var qp = new questionpool_1.QuestionPool();
        qp.id = "E2_2014";
        qp.poolclass = "Technician";
        qp.year = 2014;
        qp.expires = "2018-07-01T06:00:00.000Z";
        this.questionPools.default.pools.push(qp);
        this.masterList.push(qp);
        qp = new questionpool_1.QuestionPool();
        qp.id = "E3_2015";
        qp.poolclass = "General";
        qp.year = 2015;
        qp.expires = "2019-06-30T23:59:59.000Z";
        this.questionPools.default.pools.push(qp);
        this.masterList.push(qp);
    }
    QuestionPoolComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://background";
    };
    QuestionPoolComponent.prototype.submit = function () {
        alert("Question pool selected");
    };
    Object.defineProperty(QuestionPoolComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Yay! \nnow, You are ready to start building ham radio apps!";
            }
        },
        enumerable: true,
        configurable: true
    });
    QuestionPoolComponent.prototype.onTap = function () {
        this.counter--;
    };
    QuestionPoolComponent.prototype.select = function (questionpool) {
        var _this = this;
        alert("You have selected question pool class " + questionpool.poolclass + " which expires " + questionpool.expires);
        this.questionListService.load(questionpool.id)
            .subscribe(function () { return _this.router.navigate(["/question"]); }, function (error) { return alert("Please select a valid question pool."); });
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
            providers: [questionpool_list_service_1.QuestionPoolListService, question_list_service_1.QuestionListService],
            templateUrl: "pages/questionpool/questionpool.html",
            styleUrls: ["pages/questionpool/questionpool-common.css", "pages/questionpool/questionpool.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, questionpool_list_service_1.QuestionPoolListService, question_list_service_1.QuestionListService, page_1.Page])
    ], QuestionPoolComponent);
    return QuestionPoolComponent;
}());
exports.QuestionPoolComponent = QuestionPoolComponent;
//# sourceMappingURL=questionpool.component.js.map