"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../config");
var questionpool_1 = require("./questionpool");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var QuestionPoolListService = (function () {
    function QuestionPoolListService(http) {
        this.http = http;
    }
    QuestionPoolListService.prototype.load = function () {
        //let headers = new Headers();
        //headers.append("Authorization", "Bearer " + Config.token);
        return this.http.get(config_1.Config.poolsUrl) //+ "Groceries", { headers: headers }
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var questionPoolList = [];
            data.Result.forEach(function (questionpool) {
                questionPoolList.push(new questionpool_1.QuestionPoolList()); //TODO
                //new QuestionPool(questionpool.Id, questionpool.PoolClass, questionpool.Year, questionpool.Slug, questionpool.Expires));
                //(public Id: string, public Poolclass: string, public Year: number, public Slug: string, public Expires: string) {}
            });
            return questionPoolList;
        })
            .catch(this.handleErrors);
    };
    QuestionPoolListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    QuestionPoolListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionPoolListService);
    return QuestionPoolListService;
}());
exports.QuestionPoolListService = QuestionPoolListService;
//# sourceMappingURL=questionpool-list.service.js.map