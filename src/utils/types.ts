export type AnyObject = {
  [idx: string]: any;
};

export type TaskProps = {
  id: string | number;
  task: string | number;
  isComplete: boolean;
}