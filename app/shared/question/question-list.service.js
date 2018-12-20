"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../config");
var question_1 = require("./question");
var question_2 = require("./question");
var question_3 = require("./question");
var question_4 = require("./question");
var question_5 = require("./question");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var QuestionListService = (function () {
    function QuestionListService(http) {
        this.http = http;
    }
    QuestionListService.prototype.ngOnInit = function () {
        this.qr = new question_5.QuestionRoot();
        this.qr.pools = new Array();
        var pool = new question_4.Pool();
        // populate pool here
        pool.id = "T1";
        pool.name = "FCC Rules, descriptions and definitions for the Amateur Radio Service, operator and station license responsibilities -";
        pool._id = "55ff5ee7218ceb7c00b8c074";
        pool.qcount = 6;
        pool.sections = new Array();
        var section = new question_3.Section();
        section.questions = new Array();
        // create questions and add to section --------------
        // q1
        var q = new question_1.Question();
        q._id = "T1A01";
        q.text = "Which of the following is a purpose of the Amateur Radio Service as stated in the FCC rules and regulations?";
        q.answer = "C";
        q.answers = new question_2.Answers();
        q.answers.A = "Providing personal radio communications for as many citizens as possible";
        q.answers.B = "Providing communications for international non-profit organizations";
        q.answers.C = "Advancing skills in the technical and communication phases of the radio art";
        q.answers.D = "All of these choices are correct";
        section.questions.push(q);
        // q2
        q = new question_1.Question();
        q._id = "T1A02";
        q.text = "Which agency regulates and enforces the rules for the Amateur Radio Service in the United States?";
        q.answer = "C";
        q.answers = new question_2.Answers();
        q.answers.A = "FEMA";
        q.answers.B = "The ITU";
        q.answers.C = "The FCC";
        q.answers.D = "Homeland Security";
        section.questions.push(q);
        // q3
        q = new question_1.Question();
        q._id = "T1A03";
        q.text = "Which part of the FCC regulations contains the rules governing the Amateur Radio Service?";
        q.answer = "D";
        q.answers = new question_2.Answers();
        q.answers.A = "Part 73";
        q.answers.B = "Part 95";
        q.answers.C = "Part 90";
        q.answers.D = "Part 97";
        section.questions.push(q);
        // q4
        q = new question_1.Question();
        q._id = "T1A04";
        q.text = "Which of the following meets the FCC definition of harmful interference?";
        q.answer = "C";
        q.answers = new question_2.Answers();
        q.answers.A = "Radio transmissions that annoy users of a repeater";
        q.answers.B = "Unwanted radio transmissions that cause costly harm to radio station apparatus";
        q.answers.C = "That which seriously degrades, obstructs, or repeatedly interrupts a radio communication service operating in accordance with the Radio Regulations";
        q.answers.D = "Static from lightning storms";
        section.questions.push(q);
        // q5
        q = new question_1.Question();
        q._id = "T1A05";
        q.text = "Which of the following is a purpose of the Amateur Radio Service rules and regulations as defined by the FCC?";
        q.answer = "A";
        q.answers = new question_2.Answers();
        q.answers.A = "Enhancing international goodwill";
        q.answers.B = "Providing inexpensive communication for local emergency organizations";
        q.answers.C = "Training of operators in military radio operating procedures";
        q.answers.D = "All of these choices are correct";
        section.questions.push(q);
        // 14 questions total
        // create section and add to pool
        section.id = "T1A";
        section.summary = "- Amateur Radio Service: purpose and permissible use of the Amateur Radio Service; operator/primary station license grant; where FCC rules are codified; basis and purpose of FCC rules; meanings of basic terms used in FCC rules; interference; spectrum management";
        section._id = "55ff5ee7218ceb7c00b8c0ba";
        pool.sections.push(section);
        // finally add pool to list of pools
        this.qr.pools.push(pool);
    };
    QuestionListService.prototype.load = function (poolId) {
        //var questionlist = [];
        var _this = this;
        //return questionlist;
        //let headers = new Headers();
        //headers.append("Authorization", "Bearer " + Config.token);
        alert("reached the question list service");
        alert("url is:[" + config_1.Config.poolsUrl + poolId + "]");
        console.log(" reached question list service. url is:[" + config_1.Config.poolsUrl + poolId + "]");
        return this.http.get(config_1.Config.poolsUrl + poolId) //, { headers: headers }
            .map(function (res) { return res.json(); })
            .map(function (data) {
            alert("inside data mapping");
            console.log("inside data mapping");
            var questionList = [];
            var count = 1;
            _this.qr.pools[0].sections[0].questions.forEach(function (question) {
                questionList.push(question);
                alert("question" + count + ":" + question);
                console.log("question" + count + ":" + question);
            });
            /* // DOESNT WORK
            //data.Result;
            console.log("data found is:[" + data + "]");
            alert("data found is:[" + data + "]");
            alert(data.Result);
            console.log("data result is:[" + data.Result + "]");
            console.log("getting ready to iterate over data result");
            data.Result.forEach((question) => {
              alert(question);
              var q = new Question();
              // q.id = question.Id;
              // q.text = question.Text;
              // q._id = question._Id;
              // q.fccpart = question.FccPart;
              // q.answer = question.answer;
              // q.answers = question.Answers;
              // q.image = question.Image
              questionList.push(q); // {id = question.Id, question.Text, question._Id, question.FccPart, question.answer, question.Answers, question.Image}); //TODOs
              //constructor(public Id: string, public Text: string, public _Id: string, public FccPart: string, public answer: string, public answers: Answers, public Image: string) {}
            });
            alert("reached end of calling service");
            console.log("reached end of calling service");
            alert("questionList = " + questionList);
            console.log("questionList = " + questionList);
            */
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