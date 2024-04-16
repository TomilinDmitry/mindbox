import React from "react";
import style from "./index.module.scss";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { TTaskState } from "../../app/types/types";
import deleteIcon from "../../app/assets/icons/close_mini.svg";
import { deleteItem } from "../../app/services/todoSlice";
import { CheckBox } from "../checkBox";

export const Task = ({ task, id }: TTaskState) => {
  const { check } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  return (
    <div
      className={`${check[id!] ? style.checkTask : style.container}`}>
      <CheckBox id={id!} />
      <span className={`${check[id!] ? style.check : style.text}`}>
        {task}
      </span>
      <img
        src={deleteIcon}
        alt='delete'
        onClick={() => dispatch(deleteItem(id!))}
      />
    </div>
  );
};
