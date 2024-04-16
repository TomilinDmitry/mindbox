import React, { useState } from "react";
import style from "./index.module.scss";
import { Input } from "../components/input";
import { Task } from "../components/task";
import { useSelector } from "../app/types/hooks";
import { ActiveTabBlock } from "../components/activeTab";

export const MainPage = () => {
  const { todoList, activeTab, checkedItems } = useSelector(
    (store) => store.todo,
  );

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <section>
          <h1>Todos</h1>
        </section>
        <div className={style.inputBlock}>
          <Input />
        </div>
        {activeTab === "Active" ? (
          <div className={style.tasks}>
            {todoList.map((el, index) => (
              <div className={style.task} key={index}>
                <Task task={el.task} id={el.id} />
              </div>
            ))}
          </div>
        ) : activeTab === "Complited" ? (
          <div className={style.tasks}>
            {todoList.map((el, index) => (
              <div className={style.task} key={index}>
                <Task task={el.task} id={el.id} />
              </div>
            ))}
          </div>
        ) : (
          <div className={style.tasks}>
            {todoList.map((el, index) => (
              <div className={style.task} key={index}>
                <Task task={el.task} id={el.id} />
              </div>
            ))}
          </div>
        )}
        <div className={style.navigate}></div>
        <div className={style.listLength}>
          <span>Количество задач:{todoList.length}</span>
          <ActiveTabBlock />
        </div>
      </div>
    </div>
  );
};
