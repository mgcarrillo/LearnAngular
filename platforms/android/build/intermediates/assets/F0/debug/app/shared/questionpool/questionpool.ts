export class QuestionPool {
  //constructor(public Id: string, public PoolClass: string, public Year: number, public Slug: string, public Expires: string) {}
  id: string; 
  poolclass: string; 
  year: number; 
  slug: string; 
  expires: string;
}
export class QuestionPoolList {
    //constructor(public QuestionPools: List<QuestionPool>) {}
    default: DefaultPool;
    fcc: FccCommercialPool;
    frenchCanadian: FrenchCanadianPool;
    canadian: CanadianPool;
    selectedPool: string;
}
export class DefaultPool {
    //constructor(public Default: List<QuestionPool>) {}
    pools: List<QuestionPool>;
}
export class FccCommercialPool {
    //constructor(public Default: List<QuestionPool>) {}
    pools: List<QuestionPool>;
}
export class FrenchCanadianPool {
    //constructor(public Default: List<QuestionPool>) {}
    pools: List<QuestionPool>;
}
export class CanadianPool {
    //constructor(public Default: List<QuestionPool>) {}
    pools: List<QuestionPool>;
}