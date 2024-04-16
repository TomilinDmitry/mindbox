import React from "react";
import style from "./index.module.scss";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { setActiveTab } from "../../app/services/todoSlice";

export const ActiveTabBlock = () => {
  const { activeTab } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  const handleSetActive = (tab: string) => {
    dispatch(setActiveTab(tab));
  };
  return (
    <ul className={style.list}>
      <li
        className={activeTab !== "All" ? style.element : style.active}
        onClick={() => handleSetActive("All")}>
        All
      </li>
      <li
        className={
          activeTab !== "Active" ? style.element : style.active
        }
        onClick={() => handleSetActive("Active")}>
        Active
      </li>
      <li
        className={
          activeTab !== "Complited" ? style.element : style.active
        }
        onClick={() => handleSetActive("Complited")}>
        Complited
      </li>
    </ul>
  );
};
