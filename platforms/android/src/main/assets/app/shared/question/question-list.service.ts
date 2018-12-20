import { Injectable, OnInit } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Config } from "../config";
import { Question } from "./question";
import { Answers } from "./question";
import { Section } from "./question";
import { Pool } from "./question";
import { QuestionRoot } from "./question";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class QuestionListService implements OnInit {
  constructor(private http: Http) {}
  qr : QuestionRoot;
  
  ngOnInit() {
    this.qr = new QuestionRoot();
    this.qr.pools = new Array<Pool>();
    var pool = new Pool();
    // populate pool here
    pool.id = "T1";
    pool.name ="FCC Rules, descriptions and definitions for the Amateur Radio Service, operator and station license responsibilities -";
    pool._id = "55ff5ee7218ceb7c00b8c074";
    pool.qcount = 6;
    pool.sections = new Array<Section>();
    var section = new Section();
    section.questions = new Array<Question>();

    // create questions and add to section --------------
    // q1
    var q = new Question();
    q._id = "T1A01";
    q.text = "Which of the following is a purpose of the Amateur Radio Service as stated in the FCC rules and regulations?";
    q.answer = "C";
    q.answers = new Answers();
    q.answers.A = "Providing personal radio communications for as many citizens as possible";
    q.answers.B = "Providing communications for international non-profit organizations";
    q.answers.C = "Advancing skills in the technical and communication phases of the radio art";
    q.answers.D = "All of these choices are correct";
    section.questions.push(q);

    // q2
    q = new Question();
    q._id = "T1A02";
    q.text = "Which agency regulates and enforces the rules for the Amateur Radio Service in the United States?";
    q.answer = "C";
    q.answers = new Answers();
    q.answers.A = "FEMA";
    q.answers.B = "The ITU";
    q.answers.C = "The FCC";
    q.answers.D = "Homeland Security";
    section.questions.push(q);

    // q3
    q = new Question();
    q._id = "T1A03";
    q.text = "Which part of the FCC regulations contains the rules governing the Amateur Radio Service?";
    q.answer = "D";
    q.answers = new Answers();
    q.answers.A = "Part 73";
    q.answers.B = "Part 95";
    q.answers.C = "Part 90";
    q.answers.D = "Part 97";
    section.questions.push(q);

    // q4
    q = new Question();
    q._id = "T1A04";
    q.text = "Which of the following meets the FCC definition of harmful interference?";
    q.answer = "C";
    q.answers = new Answers();
    q.answers.A = "Radio transmissions that annoy users of a repeater";
    q.answers.B = "Unwanted radio transmissions that cause costly harm to radio station apparatus";
    q.answers.C = "That which seriously degrades, obstructs, or repeatedly interrupts a radio communication service operating in accordance with the Radio Regulations";
    q.answers.D = "Static from lightning storms";
    section.questions.push(q);

    // q5
    q = new Question();
    q._id = "T1A05";
    q.text = "Which of the following is a purpose of the Amateur Radio Service rules and regulations as defined by the FCC?";
    q.answer = "A";
    q.answers = new Answers();
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
  }


  load(poolId :string) {
    
    //var questionlist = [];

    

    //return questionlist;

    
    //let headers = new Headers();
    //headers.append("Authorization", "Bearer " + Config.token);
    alert("reached the question list service");
    alert("url is:[" + Config.poolsUrl + poolId + "]");
    console.log(" reached question list service. url is:[" + Config.poolsUrl + poolId + "]");
    return this.http.get(Config.poolsUrl + poolId)  //, { headers: headers }
    .map(res => res.json())
    .map(data => {
      alert("inside data mapping");
      console.log("inside data mapping");
      let questionList = [];

      var count : Number = 1;
      this.qr.pools[0].sections[0].questions.forEach((question) => { 
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
    
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}