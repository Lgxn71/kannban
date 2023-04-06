import { useState } from "react";
import { useSelector } from "react-redux";
import { columnsData } from "../datamap/dndData";
import DragAndDrop from "../components/Kanban/DragAndDrop";
import Popup from "../components/Kanban/Popup/Popup";

import Button from "../components/UI/Buttons/Button";
import Card from "../components/UI/Card";
import Container from "../components/UI/Container";

import classes from "./KanbanPage.module.css";
import PlusIconBlack from "../components/svgs/PlusIconBlack";
import PlusIconWhite from "../components/svgs/PlusIconWhite";

const Kanban = () => {
  const [columns, setColumns] = useState(columnsData);

  const [isPopupShown, setIsPopupShown] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("todo");
  const [inputField, setInputField] = useState("");

  const [taskToEditState, setTaskToEditState] = useState({
    task: {},
    isEditting: false,
    selectedRadio: "",
  });

  const isDarkTheme = useSelector((state) => state.isDark);
  const [isBtnHovered, setBtnIsHovered] = useState(false);

  function handleMouseEnter() {
    setBtnIsHovered(true);
  }

  function handleMouseLeave() {
    setBtnIsHovered(false);
  }

  const showPopupHandler = (event) => {
    setIsPopupShown(true);
  };

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
          <div
            className={`
          ${classes["eyebrow-shared"]}
          ${isDarkTheme ? classes["eyebrow-dark"] : classes["eyebrow-white"]}`}
          >
            <h2
              className={`
            ${classes["eyebrow-title-shared "]}
            ${
              isDarkTheme
                ? classes["eyebrow-title-dark"]
                : classes["eyebrow-title-white"]
            }`}
            >
              Tasks
            </h2>
            <Button
              size="10px"
              onClick={showPopupHandler}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isDarkTheme || isBtnHovered ? (
                <PlusIconBlack />
              ) : (
                <PlusIconWhite />
              )}
              New Task
            </Button>
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
export default Kanban;
