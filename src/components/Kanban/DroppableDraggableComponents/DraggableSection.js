import { useState } from "react";
import { useSelector } from "react-redux";

import OptionsWhite from "../../svgs/OptionsIconWhite";
import OptionsBlack from "../../svgs/OptionsIconBlack";

import classes from "./DraggableSection.module.css";

const DraggableSection = (props) => {
  const [isDropDownShown, setIsDropDownShown] = useState(false);
  const isDarkTheme = useSelector((state) => state.isDark);

  const {
    setColumns,
    id,
    column,
    setIsPopupShown,
    setTaskToEditState,
    setInputField,
  } = props;

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
      column: column.name,
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
        isDarkTheme
          ? isDraggingOver
            ? classes["card-draggable-dragged-dark"]
            : classes["card-draggable-unactive-dark"]
          : isDraggingOver
          ? classes["card-draggable-dragged-white"]
          : classes["card-draggable-unactive-white"]
      }`}
      >
        <div className={classes["task-title-container"]}>
          <h3
            className={`
            ${classes["task-title"]}
              ${
                isDarkTheme
                  ? classes["task-title-white"]
                  : classes["task-title-dark"]
              }
            `}
          >
            {taskContent.itemTitle}
          </h3>
          {isDropDownShown && (
            <div
              className={`${classes["options"]}
            ${
              isDarkTheme
                ? classes["options-theme-dark"]
                : classes["options-theme-white"]
            }`}
            >
              <p
                style={{ borderRadius: "5px 5px 0px 0px" }}
                className={`
                 ${classes["option"]} 
                 ${
                   isDarkTheme
                     ? classes["option-dark-theme"]
                     : classes["option-white-theme"]
                 }`}
                data-id={id}
                onClick={editTaskHandler}
              >
                Edit
              </p>
              <hr
                className={`${classes.breakline} ${
                  isDarkTheme
                    ? classes["breakline-dark-theme"]
                    : classes["breakline-white-theme"]
                }`}
              />
              <p
                style={{ borderRadius: "0px 0px 5px 5px" }}
                className={`
                 ${classes["option"]} ${
                  isDarkTheme
                    ? classes["option-dark-theme"]
                    : classes["option-white-theme"]
                }`}
                onClick={deleteTaskHandler}
              >
                Delete
              </p>
            </div>
          )}
          {isDarkTheme ? (
            <OptionsWhite onClick={showDropDownHandler} />
          ) : (
            <OptionsBlack onClick={showDropDownHandler} />
          )}
        </div>
        <p
          className={`${classes["task-date"]} ${
            isDarkTheme ? classes["task-date-dark"] : classes["task-date-white"]
          }`}
        >
          {taskContent.date}
        </p>
      </div>
    </>
  );
};
export default DraggableSection;
