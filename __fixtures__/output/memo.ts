export interface Memo {
  $schema?: string;
  memo_keys: {
    key: string;
    description: string;
    git_repo: string;
    memo: any;
  }[];
}