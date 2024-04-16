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
  checkedItems: [],
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
      if (value) {
        state.checkedItems.push(id);
      } else {
        state.checkedItems = state.checkedItems.filter(
          (el) => el !== id,
        );
      }
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
    deleteItem: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(
        (el) => el.id !== action.payload,
      );
      saveDataToLocalStorage("todoList", state.todoList);
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setCheck, setValue, setTodoList, deleteItem,setActiveTab } =
  todoSlice.actions;

export default todoSlice.reducer;
