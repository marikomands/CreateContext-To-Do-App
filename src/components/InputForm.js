import React, { useState, useContext } from "react";
import { eliaContext } from "../App";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");
  console.log("🚀 ~ InputForm ~ inputText:", inputText);

  const eliaInfo = useContext(eliaContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newList = [
      ...taskList,
      { text: inputText, id: uuidv4(), completed: false },
    ];
    console.log("🚀 ~ onSubmit ~ newList:", newList);
    setTaskList(newList);
    setInputText("");
  };

  return (
    <div className="input">
      <p>{eliaInfo.name}</p>
      <p>{eliaInfo.age}</p>
      <p>{eliaInfo.school}</p>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          value={inputText}
        />
      </form>
    </div>
  );
};

export default InputForm;
