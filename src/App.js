import React, { useState, createContext } from "react";
import Title from "./components/Title";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import "./App.css";

const eliaInfo = {
  name: "Elia",
  age: "8",
  school: "Whitley Lodge First School",
};

export const eliaContext = createContext(eliaInfo);
// export has to be at the toplevel of module and can't be nested inside the funtion or block

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log("🚀 ~ App ~ taskList:", taskList);

  const marikoInfo = useContext(marikoContext);

  return (
    <div className="App">
      <Title />

      <eliaContext.Provider value={eliaInfo}>
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <ToDoList taskList={taskList} setTaskList={setTaskList} />
      </eliaContext.Provider>
    </div>
  );
}
export default App;
