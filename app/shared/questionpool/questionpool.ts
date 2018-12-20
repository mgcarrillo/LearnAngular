export class QuestionPool {
  //constructor(public Id: string, public PoolClass: string, public Year: number, public Slug: string, public Expires: string) {}
  public id: string; 
  public poolclass: string; 
  public year: number; 
  public slug: string; 
  public expires: string;
}
export class QuestionPoolList {
    //constructor(public QuestionPools: List<QuestionPool>) {}
    public default: DefaultPool;
    public fcc: FccCommercialPool;
    public frenchCanadian: FrenchCanadianPool;
    public canadian: CanadianPool;
    public selectedPool: string;
}
export class DefaultPool {
    //constructor(public Default: List<QuestionPool>) {}
    public pools: List<QuestionPool>;
}
export class FccCommercialPool {
    //constructor(public Default: List<QuestionPool>) {}
    public pools: List<QuestionPool>;
}
export class FrenchCanadianPool {
    //constructor(public Default: List<QuestionPool>) {}
    public pools: List<QuestionPool>;
}
export class CanadianPool {
    //constructor(public Default: List<QuestionPool>) {}
    public pools: List<QuestionPool>;
}
