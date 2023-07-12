import React, { useContext } from "react";
import { eliaContext } from "../App";

const ToDoList = ({ taskList, setTaskList }) => {
  console.log("🚀 ~ ToDoList ~ taskList:", taskList);

  const eliaInfo = useContext(eliaContext);

  const handleChangeCompleted = (id) => {
    const newList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    console.log("🚀 ~ newList ~ newList:", newList);
    return setTaskList(newList);
  };

  const handleChangeDeleted = (id) => {
    console.log("🚀 ~ handleChangeDeleted ~ id:", id);

    return setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div>
      {taskList.map((task, index) => {
        return (
          <div
            className={`todo ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <div className="text">{task.text} </div>
            <div className="icon">
              <button onClick={() => handleChangeCompleted(task.id)}>
                <i className="fa-solid fa-check"></i>
              </button>
              <button onClick={() => handleChangeDeleted(task.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
