import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { View } from "ui/core/view";

import { Question } from "../../shared/question/question";
import { QuestionListService } from "../../shared/question/question-list.service";

@Component({
  selector: "my-app",
  providers: [QuestionListService],
  templateUrl: "pages/question/question.html",
  styleUrls: ["pages/question/question-common.css", "pages/question/question.css"],
})
export class QuestionComponent implements OnInit {
  question: Question;

  @ViewChild("container") container: ElementRef;
  @ViewChild("answer") answer: ElementRef;

  constructor(private router: Router, private questionService: QuestionListService, private page: Page) {
    this.question = new Question();
    this.question.text = "What is the circumference of a circle";
    this.question.answers.A = "Diameter * pi";
    this.question.answers.B = "Area * Perimeter";
    this.question.answers.C = "Sum of all squares";
    this.question.answers.D = "L * W * H";
    //this.user.email = "user@nativescript.org";
    //this.user.password = "password";
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://background";
  }

  submit() {
      alert("Answer submitted!");
    // if (!this.user.isValidEmail()) {
    //   alert("Enter a valid email address.");
    //   return;
    // }

    // if (this.isLoggingIn) {
    //   this.login();
    // } else {
    //   this.signUp();
    // }
  }


}
