export type ActionType<T extends string> = {
  type: T;
  payload?: {
    [key: string]: any;
  };
};
