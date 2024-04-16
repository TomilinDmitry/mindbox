export type TTodoInitialState = {
  check: Record<number, boolean>;
  value: string;
  todoList: TTaskState[];
  checkedItems: number[];
  activeTab: string;
};

export type TTask = {
  task: string;
  id: number;
};
export type TTaskState = {
  task: string;
  id: number;
};
