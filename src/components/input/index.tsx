import React, { useState } from "react";
import style from "./index.module.scss";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { setTodoList, setValue } from "../../app/services/todoSlice";

export const Input = () => {
  const { value } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue(e.target.value));
  };

  const handleAddTodo = () => {
    if (value.length > 0) {
      dispatch(
        setTodoList({
          id: Math.round(Math.random() * 100000),
          task: value,
        }),
      );
      dispatch(setValue(""));
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        className={style.input}
        value={value}
        onChange={handleChange}
        placeholder='type task...'
      />
      <button className={style.button} onClick={handleAddTodo}>
        Add
      </button>
    </form>
  );
};
