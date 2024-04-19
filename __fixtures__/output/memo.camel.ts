export interface Memo {
  schema?: string;
  memoKeys: {
    key: string;
    description: string;
    gitRepo: string;
    memo: {
      [key: string]: unknown;
    };
  }[];
}