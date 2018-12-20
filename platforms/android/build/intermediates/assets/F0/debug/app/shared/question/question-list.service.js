"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../config");
var question_1 = require("./question");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var QuestionListService = (function () {
    function QuestionListService(http) {
        this.http = http;
    }
    QuestionListService.prototype.load = function (poolId) {
        //let headers = new Headers();
        //headers.append("Authorization", "Bearer " + Config.token);
        return this.http.get(config_1.Config.questionUrl + poolId) //, { headers: headers }
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var questionList = [];
            data.Result.forEach(function (question) {
                questionList.push(new question_1.Question()); // {id = question.Id, question.Text, question._Id, question.FccPart, question.answer, question.Answers, question.Image}); //TODOs
                //constructor(public Id: string, public Text: string, public _Id: string, public FccPart: string, public answer: string, public answers: Answers, public Image: string) {}
            });
            return questionList;
        })
            .catch(this.handleErrors);
    };
    QuestionListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    QuestionListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionListService);
    return QuestionListService;
}());
exports.QuestionListService = QuestionListService;
//# sourceMappingURL=question-list.service.js.map