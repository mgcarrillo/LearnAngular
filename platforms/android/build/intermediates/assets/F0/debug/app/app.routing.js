"use strict";
var question_component_1 = require("./pages/question/question.component");
var questionpool_component_1 = require("./pages/questionpool/questionpool.component");
exports.routes = [
    { path: "", component: questionpool_component_1.QuestionPoolComponent },
    { path: "question", component: question_component_1.QuestionComponent }
];
exports.navigatableComponents = [
    questionpool_component_1.QuestionPoolComponent,
    question_component_1.QuestionComponent
];
//# sourceMappingURL=app.routing.js.map