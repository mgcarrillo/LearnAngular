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

@Component({
  selector: "my-app",
  providers: [QuestionPoolListService],
  templateUrl: "pages/questionpool/questionpool.html",
  styleUrls: ["pages/questionpool/questionpool-common.css", "pages/questionpool/questionpool.css"],
})
export class QuestionPoolComponent implements OnInit {
  questionPools: QuestionPoolList;
  isLoggingIn = true;

  @ViewChild("container") container: ElementRef;
   @ViewChild("pickedpool") pickedpool: ElementRef;
// TODO determine children

  constructor(private router: Router, private questionPoolService: QuestionPoolListService, private page: Page) {
    this.questionPools = new QuestionPoolList();
    this.questionPools.default = new DefaultPool();
    var qp = new QuestionPool();
    qp.id = "1";
    qp.poolclass = "11a";
    qp.year = 2014;
    this.questionPools.default.pools.push(qp);
  }


  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://background";
  }

  submit() {
    alert("Question pool selected");
  }

  skip() {
    alert("Skipped question, moving to next");
  }

  next() {
    alert("Going to next question");
  }

}
