import React from "react";
import style from "./index.module.scss";
import { Input } from "../components/input";
import { Task } from "../components/task";
import { useSelector } from "../app/types/hooks";
import { ActiveTabBlock } from "../components/activeTab";

export const MainPage = () => {
  const { todoList, activeTab, checkedItems, uncheckedItems } =
    useSelector((store) => store.todo);
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <section>
          <h1 className={style.title}>Todos</h1>
        </section>
        <div className={style.inputBlock}>
          <Input />
        </div>
        {activeTab === "Active" ? (
          <div className={style.tasks}>
            {uncheckedItems.map((el, index) => (
              <div className={style.task} key={index}>
                <Task task={el.task} id={el.id} />
              </div>
            ))}
          </div>
        ) : activeTab === "Complited" ? (
          <div className={style.tasks}>
            {checkedItems.map((el, index) => (
              <div className={style.task} key={index}>
                <Task id={el.id} task={el.task} />
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
          {activeTab === "All" && (
            <span>Количество всех задач:{todoList.length}</span>
          )}
          {activeTab === "Complited" && (
            <span>
              Количество выполненных задач:{checkedItems.length}
            </span>
          )}
          {activeTab === "Active" && (
            <span>
              Количество активных задач:{uncheckedItems.length}
            </span>
          )}
          <ActiveTabBlock />
        </div>
      </div>
    </div>
  );
};
