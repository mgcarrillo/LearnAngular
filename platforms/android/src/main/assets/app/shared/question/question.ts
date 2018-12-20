export class Question {
  //constructor(public Id: string, public Text: string, public _Id: string, public FccPart: string, public Answer: string, public Answers: Answers, public Image: string) {}
//   email: string;
//   password: string;
  public id: string;
  public text: string; 
  public _id: string; 
  public fccpart: string;
  public answer: string; 
  public answers: Answers;
  public image: string;
  public submittedanswer: string;
}
export class Answers {
    //constructor(public A: string, public B: string, public C: string, public D: string) {}
    public A: string; 
    public B: string; 
    public C: string; 
    public D: string;
}
export class Section {
    //constructor(public Id: string, public Summary: string, public _Id: string, public Questions: List<Question> ) {}
    public id: string; 
    public summary: string; 
    public _id: string; 
    public questions: List<Question>;
}
export class Pool {
    //constructor(public Id: string; Name: string, public _Id: string, public Sections: List<Section>, public QCount :number ) {}
    public id: string; 
    public name: string; 
    public _id: string; 
    public sections: List<Section>; 
    public qcount :number;
}
export class QuestionRoot {
    // constructor(public Id: string, public RootClass: string, public _Id: string, public Pools: List<Pool>, public Appears: string,
    //             public Subtext: string, public ValidFrom: string, public Expires: string, public OfficialName: string,
    //             public Slug: string, public Passing: number, public Year: number, public Updated: string, public Category: string,
    //             public TestIdStart: number, public TestIdEnd: number, public Notes: List<string>, public __V: number
    //             ) 
    //             {}
    public id: string; 
    public rootclass: string; 
    public _id: string; 
    public pools: List<Pool>; 
    public appears: string;
    public subtext: string; 
    public validfrom: string; 
    public expires: string; 
    public officialname: string;
    public slug: string; 
    public passing: number; 
    public year: number; 
    public updated: string; 
    public category: string;
    public testidstart: number; 
    public testidend: number; 
    public notes: List<string>; 
    public __v: number;
}