import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { View } from "ui/core/view";

import { QuestionPool } from "../../shared/questionpool/questionpool";
import { QuestionPoolList } from "../../shared/questionpool/questionpool";
import { DefaultPool } from "../../shared/questionpool/questionpool";
import { FccCommercialPool } from "../../shared/questionpool/questionpool";
import { FrenchCanadianPool } from "../../shared/questionpool/questionpool";
import { CanadianPool } from "../../shared/questionpool/questionpool";
import { QuestionPoolListService } from "../../shared/questionpool/questionpool-list.service";
import { QuestionListService } from "../../shared/question/question-list.service";

@Component({
  selector: "my-app",
  providers: [QuestionPoolListService, QuestionListService],
  templateUrl: "pages/questionpool/questionpool.html",
  styleUrls: ["pages/questionpool/questionpool-common.css", "pages/questionpool/questionpool.css"],
})
export class QuestionPoolComponent implements OnInit {
  questionPools: QuestionPoolList;
  masterList: Array<QuestionPool> = [];
  isLoading = false;
  listLoaded = false;
  public counter: number = 7;

  @ViewChild("container") container: ElementRef;
   @ViewChild("pickedpool") pickedpool: ElementRef;
// TODO determine children

  constructor(private router: Router, private questionPoolService: QuestionPoolListService, private questionListService: QuestionListService, private page: Page) {
    this.questionPools = new QuestionPoolList();
    this.questionPools.default = new DefaultPool();
    this.questionPools.fcc = new FccCommercialPool();
    this.questionPools.canadian = new CanadianPool();
    this.questionPools.frenchCanadian = new FrenchCanadianPool();
    this.questionPools.default.pools = [];
    this.questionPools.frenchCanadian.pools = [];
    this.questionPools.canadian.pools = [];
    this.questionPools.fcc.pools = [];
    
    // initialize question pool
    var qp = new QuestionPool();
    qp.id = "E2_2014";
    qp.poolclass = "Technician";
    qp.year = 2014;
    qp.expires = "2018-07-01T06:00:00.000Z"
    this.questionPools.default.pools.push(qp);
    this.masterList.push(qp);

    qp = new QuestionPool();
    qp.id = "E3_2015";
    qp.poolclass = "General";
    qp.year = 2015;
    qp.expires = "2019-06-30T23:59:59.000Z"
    this.questionPools.default.pools.push(qp);
    this.masterList.push(qp);
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://background";
  }

  submit() {
    alert("Question pool selected");
  }

 public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Yay! \nnow, You are ready to start building ham radio apps!";
        }
    }
    
 onTap() {
        this.counter--;
 }

 select(questionpool: QuestionPool) {
      alert("You have selected question pool class " + questionpool.poolclass + " which expires " + questionpool.expires);
      this.questionListService.load(questionpool.id)
      .subscribe(
        () => this.router.navigate(["/question"]),
        (error) => alert("Please select a valid question pool.")
      );
  }

}
