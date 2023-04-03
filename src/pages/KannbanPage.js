import { useState } from "react";
import { columnsData } from "../datamap/dndData";
import DragAndDrop from "../components/Kanban/DragAndDrop";

import Card from "../components/UI/Card";
import Container from "../components/UI/Container";

import Popup from "../components/Kanban/Popup/Popup";
import classes from "./KannbanPage.module.css";

const Kannban = () => {
  const [columns, setColumns] = useState(columnsData);
  const [isPopupShown, setIsPopupShown] = useState(false);

  const [selectedRadio, setSelectedRadio] = useState("todo");
  const [inputField, setInputField] = useState("");
  const [taskToEditState, setTaskToEditState] = useState({
    task: {},
    isEditting: false,
    selectedRadio: "",
  });

  console.log(taskToEditState.selectedRadio);

  const insertNewTaskHandler = (newTask) => {
    if (newTask.selectedRadio === "todo") {
      setColumns((prevState) => ({
        ...prevState,
        todo: {
          name: prevState.todo.name,
          items: [...prevState.todo.items, newTask],
        },
      }));
    }
    if (newTask.selectedRadio === "inprogress") {
      setColumns((prevState) => ({
        ...prevState,
        inprogress: {
          name: prevState.inprogress.name,
          items: [...prevState.inprogress.items, newTask],
        },
      }));
    }
    if (newTask.selectedRadio === "finished") {
      setColumns((prevState) => ({
        ...prevState,
        finished: {
          name: prevState.finished.name,
          items: [...prevState.finished.items, newTask],
        },
      }));
    }
    if (newTask.selectedRadio === "undefined") {
      setColumns((prevState) => ({
        ...prevState,
        undefined: {
          name: prevState.undefined.name,
          items: [...prevState.undefined.items, newTask],
        },
      }));
    }
  };

  const showPopupHandler = (event) => {
    setIsPopupShown(true);
  };
  return (
    <>
      {isPopupShown && (
        <Popup
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
          inputField={inputField}
          setInputField={setInputField}
          columns={columns}
          setColumns={setColumns}
          onTasks={insertNewTaskHandler}
          setIsPopupShown={setIsPopupShown}
          taskToEditState={taskToEditState}
          setTaskToEditState={setTaskToEditState}
        />
      )}
      <Container>
        <Card>
          <div className={classes.eyebrow}>
            <h2>Tasks</h2>
            <button onClick={showPopupHandler} className="btn-dark">
              + New Task
            </button>
          </div>
          <DragAndDrop
            inputField={inputField}
            setInputField={setInputField}
            setIsPopupShown={setIsPopupShown}
            columns={columns}
            setColumns={setColumns}
            setTaskToEditState={setTaskToEditState}
            selectedRadio={selectedRadio}
          />
        </Card>
      </Container>
    </>
  );
};
export default Kannban;
