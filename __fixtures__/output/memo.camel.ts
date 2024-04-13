export interface Memo {
  schema?: string;
  memoKeys: {
    key: string;
    description: string;
    gitRepo: string;
    memo: any;
  }[];
}