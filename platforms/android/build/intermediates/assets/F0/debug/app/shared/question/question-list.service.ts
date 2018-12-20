import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Config } from "../config";
import { Question } from "./question";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class QuestionListService {
  constructor(private http: Http) {}

  load(poolId :string) {
    //let headers = new Headers();
    //headers.append("Authorization", "Bearer " + Config.token);

    return this.http.get(Config.questionUrl + poolId)  //, { headers: headers }
    .map(res => res.json())
    .map(data => {
      let questionList = [];
      data.Result.forEach((question) => {
        questionList.push(new Question()); // {id = question.Id, question.Text, question._Id, question.FccPart, question.answer, question.Answers, question.Image}); //TODOs
        //constructor(public Id: string, public Text: string, public _Id: string, public FccPart: string, public answer: string, public answers: Answers, public Image: string) {}
      });
      return questionList;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}