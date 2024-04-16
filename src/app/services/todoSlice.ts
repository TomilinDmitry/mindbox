import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTask, TTodoInitialState } from "../types/types";
import { v4 as uuidv4 } from "uuid";
const saveDataToLocalStorage = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadDataFromLocalStorage = <T>(key: string): T => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};
export const initialState: TTodoInitialState = {
  check: loadDataFromLocalStorage("check") || {},
  value: "",
  todoList: loadDataFromLocalStorage("todoList") || [],
  checkedItems: loadDataFromLocalStorage("cheked") || [],
  uncheckedItems: loadDataFromLocalStorage("uncheked") || [],
  activeTab: "All",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setCheck: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const value = !state.check[id];
      state.check[id] = value;
      state.checkedItems = state.todoList.filter(
        (item) => state.check[item.id!],
      );
      state.uncheckedItems = state.todoList.filter(
        (item) => !state.check[item.id!],
      );
      saveDataToLocalStorage("checked", state.checkedItems);
      saveDataToLocalStorage("unchecked", state.uncheckedItems);
      saveDataToLocalStorage("check", state.check);
    },
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setTodoList: (
      state,
      action: PayloadAction<{ id: number; task: string }>,
    ) => {
      const { id, task } = action.payload;
      state.todoList.push({ id, task });
      saveDataToLocalStorage("todoList", state.todoList);
    },
    setUncheckedItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.checkedItems = state.checkedItems.filter(
        (checkedId) => checkedId !== id,
      );
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const idToDelete = action.payload;

      state.todoList = state.todoList.filter(
        (el) => el.id !== idToDelete,
      );
      state.checkedItems = state.checkedItems.filter(
        (id) => id !== idToDelete,
      );
      state.uncheckedItems = state.uncheckedItems.filter(
        (id) => id !== idToDelete,
      );

      delete state.check[idToDelete];

      saveDataToLocalStorage("todoList", state.todoList);
      saveDataToLocalStorage("check", state.check);
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const {
  setCheck,
  setValue,
  setTodoList,
  deleteItem,
  setActiveTab,
} = todoSlice.actions;

export default todoSlice.reducer;
