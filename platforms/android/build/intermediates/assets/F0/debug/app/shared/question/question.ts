export class Question {
  //constructor(public Id: string, public Text: string, public _Id: string, public FccPart: string, public Answer: string, public Answers: Answers, public Image: string) {}
//   email: string;
//   password: string;
  id: string;
  text: string; 
  _id: string; 
  fccpart: string;
  answer: string; 
  answers: Answers;
  image: string;
  submittedanswer: string;
}
export class Answers {
    //constructor(public A: string, public B: string, public C: string, public D: string) {}
    A: string; 
    B: string; 
    C: string; 
    D: string;
}
export class Section {
    //constructor(public Id: string, public Summary: string, public _Id: string, public Questions: List<Question> ) {}
    id: string; 
    summary: string; 
    _id: string; 
    questions: List<Question>;
}
export class Pool {
    //constructor(public Id: string; Name: string, public _Id: string, public Sections: List<Section>, public QCount :number ) {}
    id: string; 
    name: string; 
    _id: string; 
    sections: List<Section>; 
    qcount :number;
}
export class QuestionRoot {
    // constructor(public Id: string, public RootClass: string, public _Id: string, public Pools: List<Pool>, public Appears: string,
    //             public Subtext: string, public ValidFrom: string, public Expires: string, public OfficialName: string,
    //             public Slug: string, public Passing: number, public Year: number, public Updated: string, public Category: string,
    //             public TestIdStart: number, public TestIdEnd: number, public Notes: List<string>, public __V: number
    //             ) 
    //             {}
    id: string; 
    rootclass: string; 
    _id: string; 
    pools: List<Pool>; 
    appears: string;
    subtext: string; 
    validfrom: string; 
    expires: string; 
    officialname: string;
    slug: string; 
    passing: number; 
    year: number; 
    updated: string; 
    category: string;
    testidstart: number; 
    testidend: number; 
    notes: List<string>; 
    __v: number;
                
                
}