import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import classes from "./DraggableSection.module.css";
const DraggableSection = (props) => {
  const {
    setColumns,
    id,
    column,
    setIsPopupShown,
    setTaskToEditState,
    setInputField,
    selectedRadio,
  } = props;

  const [isDropDownShown, setIsDropDownShown] = useState(false);

  const deleteTaskHandler = () => {
    const result = column.items.filter((task) => task.id !== id);

    if (column.name === "To Do") {
      setColumns((prevState) => ({
        ...prevState,
        todo: { name: prevState.todo.name, items: result },
      }));
    }

    if (column.name === "In Progress") {
      setColumns((prevState) => ({
        ...prevState,
        inprogress: { name: prevState.inprogress.name, items: result },
      }));
    }

    if (column.name === "Finished") {
      setColumns((prevState) => ({
        ...prevState,
        finished: { name: prevState.finished.name, items: result },
      }));
    }

    if (column.name === "Undefined") {
      setColumns((prevState) => ({
        ...prevState,
        undefined: { name: prevState.undefined.name, items: result },
      }));
    }
  };

  const editTaskHandler = (event) => {
    const taskID = event.target.dataset.id;
    const taskToEdit = column.items.find((item) => taskID === item.id);

    setInputField(taskToEdit.title);
    setTaskToEditState({
      task: {
        id: taskToEdit.id,
        title: taskToEdit.title,
        date: taskToEdit.date,
      },
      isEditting: true,
      selectedRadio: selectedRadio,
    });
    setIsPopupShown(true);
    setIsDropDownShown((prevState) => !prevState);
  };

  const showDropDownHandler = () => {
    setIsDropDownShown((prevState) => !prevState);
  };

  const {
    innerRef,
    isDraggingOver,
    draggableProps,
    dragHandleProps,
    taskContent,
  } = props;

  return (
    <>
      <div
        {...dragHandleProps}
        {...draggableProps}
        ref={innerRef}
        className={`${classes["card-draggable"]}
      ${
        isDraggingOver
          ? classes["card-draggable-dragged"]
          : classes["card-draggable-unactive"]
      }`}
      >
        <div className={classes["task-title-container"]}>
          <h3 className={classes["task-title"]}>{taskContent.itemTitle}</h3>
          {isDropDownShown && (
            <div className={classes["options"]}>
              <p data-id={id} onClick={editTaskHandler}>
                Edit
              </p>
              <p onClick={deleteTaskHandler}>Delete</p>
            </div>
          )}

          <MoreHorizIcon
            sx={{
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#F7F7F9",
                borderRadius: "100px",
              },
              "& .MuiSvgIcon-root": {
                cursor: "pointer",
              },
            }}
            onClick={showDropDownHandler}
          />
        </div>
        <p className={classes["task-date"]}>{taskContent.date}</p>
      </div>
    </>
  );
};
export default DraggableSection;
