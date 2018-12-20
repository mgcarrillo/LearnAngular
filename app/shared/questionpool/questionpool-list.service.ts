import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Config } from "../config";
import { QuestionPool } from "./questionpool";
import { QuestionPoolList } from "./questionpool";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class QuestionPoolListService {
  constructor(private http: Http) {}

  load() {
    //let headers = new Headers();
    //headers.append("Authorization", "Bearer " + Config.token);

    return this.http.get(Config.poolsUrl)  //+ "Groceries", { headers: headers }
    .map(res => res.json())
    .map(data => {
      let questionPoolList = [];
      data.Result.forEach((questionpool) => {
        questionPoolList.push(new QuestionPoolList());  //TODO
          //new QuestionPool(questionpool.Id, questionpool.PoolClass, questionpool.Year, questionpool.Slug, questionpool.Expires));
        //(public Id: string, public Poolclass: string, public Year: number, public Slug: string, public Expires: string) {}
      });
      return questionPoolList;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}