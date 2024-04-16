export type TTodoInitialState = {
  check: Record<number, boolean>;
  value: string;
  todoList: TTaskState[];
  checkedItems: TTaskState[];
  activeTab: string;
  uncheckedItems:TTaskState[];
};

export type TTask = {
  task: string;
  id: number;
};
export type TTaskState = {
  task?: string;
  id?: number;
};
