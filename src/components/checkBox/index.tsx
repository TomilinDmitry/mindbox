import React from "react";
import style from "./index.module.scss";
import checkIcon from "../../app/assets/icons/check_mini.svg";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { setCheck } from "../../app/services/todoSlice";
export const CheckBox = ({ id }: { id: number }) => {
  const { check } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  return (
    <div
      className={style.containerCheckBox}
      onClick={() => dispatch(setCheck(id))}>
      <div
        className={`${
          check[id] ? style.CheckTrue : style.customCheckBox
        }`}>
        {check[id] ? <img src={checkIcon} alt='check' /> : ""}
      </div>
    </div>
  );
};
