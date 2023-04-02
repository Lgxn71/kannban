import { useState } from "react";
import { columnsData } from "../datamap/dndData";
import DragAndDrop from "../components/Kanban/DragAndDrop";

import Card from "../components/UI/Card";
import Container from "../components/UI/Container";

import Popup from "../components/Kanban/Popup/Popup";
import classes from "./KannbanPage.module.css";

const Kannban = () => {
  const [isShown, setIsShown] = useState(false);

  const [columns, setColumns] = useState(columnsData);

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
    setIsShown(true);
  };
  return (
    <>
      {isShown && (
        <Popup onTasks={insertNewTaskHandler} onSetIsShown={setIsShown} />
      )}
      <Container>
        <Card>
          <div className={classes.eyebrow}>
            <h2>Tasks</h2>
            <button onClick={showPopupHandler} className="btn-dark">
              + New Task
            </button>
          </div>
          <DragAndDrop columns={columns} setColumns={setColumns} />
        </Card>
      </Container>
    </>
  );
};
export default Kannban;
