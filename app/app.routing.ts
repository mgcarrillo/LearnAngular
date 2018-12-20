import { QuestionComponent } from "./pages/question/question.component";
import { QuestionPoolComponent } from "./pages/questionpool/questionpool.component";

export const routes = [
  { path: "", component: QuestionPoolComponent },
  { path: "question", component: QuestionComponent }
];

export const navigatableComponents = [
  QuestionPoolComponent,
  QuestionComponent
];
