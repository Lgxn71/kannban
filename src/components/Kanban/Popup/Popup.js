import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

import ModalBlur from "./ModalBlur";

import Card from "../../UI/Card";
import classes from "./Popup.module.css";

const Popup = (props) => {
  const isDarkTheme = useSelector((state) => state.isDark);

  const {
    columns,
    setColumns,
    setIsPopupShown,
    inputField,
    setInputField,
    onTasks,
    taskToEditState,
    setTaskToEditState,
  } = props;

  const inputFieldHandler = (event) => {
    setInputField(event.target.value);
    if (taskToEditState.isEditting) {
      setTaskToEditState((prevState) => ({
        ...prevState,
        task: {
          ...prevState.task,
          title: event.target.value,
        },
      }));
    }
  };

  const closePopUpHandler = () => {
    setIsPopupShown(false);
    setTaskToEditState({
      task: {},
      isEditting: false,
      column: "",
    });
    setInputField("");
  };

  const formEditHandler = (event) => {
    event.preventDefault();

    const filteredTasksTodo = columns.todo.items.filter(
      (item) => item.id !== taskToEditState.task.id
    );
    const filteredTasksInProgress = columns.inprogress.items.filter(
      (item) => item.id !== taskToEditState.task.id
    );
    const filteredTasksFinished = columns.finished.items.filter(
      (item) => item.id !== taskToEditState.task.id
    );
    const filteredTasksUndefined = columns.undefined.items.filter(
      (item) => item.id !== taskToEditState.task.id
    );
    // MISSTAKE IN IF
    if (taskToEditState.column === "To Do") {
      setColumns((prevState) => ({
        ...prevState,
        todo: {
          name: prevState.todo.name,
          items: [taskToEditState.task, ...filteredTasksTodo],
        },
      }));
    }
    if (taskToEditState.column === "In Progress") {
      setColumns((prevState) => ({
        ...prevState,
        inprogress: {
          name: prevState.inprogress.name,
          items: [taskToEditState.task, ...filteredTasksInProgress],
        },
      }));
    }
    if (taskToEditState.column === "Finished") {
      setColumns((prevState) => ({
        ...prevState,
        finished: {
          name: prevState.finished.name,
          items: [taskToEditState.task, ...filteredTasksFinished],
        },
      }));
    }

    if (taskToEditState.column === "Undefined") {
      setColumns((prevState) => ({
        ...prevState,
        undefined: {
          name: prevState.undefined.name,
          items: [taskToEditState.task, ...filteredTasksUndefined],
        },
      }));
    }

    setTaskToEditState({
      task: {},
      isEditting: false,
      column: "",
    });
    setIsPopupShown(false);
    setInputField("");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const date = new Date();

    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = date.toLocaleString("en-US", options);
    const taskId = uuidv4();
    const task = {
      id: taskId,
      title: inputField,
      date: formattedDate,
    };
    onTasks(task);

    setInputField("");
    setIsPopupShown(false);
  };

  return (
    <>
      <ModalBlur closePopUpHandler={closePopUpHandler} />
      <div className={classes.popup}>
        <Card>
          <h2
            className={`${classes.title} ${
              isDarkTheme
                ? classes["title-dark-theme"]
                : classes["title-white-theme"]
            }`}
          >
            {taskToEditState.isEditting ? "Edit Task" : "Add New Task"}
          </h2>

          <form
            onSubmit={
              taskToEditState.isEditting ? formEditHandler : formSubmitHandler
            }
          >
            <div className={classes["container-popup"]}>
              <label
                className={`
                ${classes["title-label"]}
                ${
                  isDarkTheme
                    ? classes["title-label-dark-theme"]
                    : classes["title-label-white-theme"]
                }
                `}
                htmlFor="title"
              >
                Title
              </label>
              <input
                value={inputField}
                className={`${classes["title-input"]}
                ${
                  isDarkTheme
                    ? classes["title-input-dark-theme"]
                    : classes["title-input-white-theme"]
                }`}
                name="title"
                type="text"
                id="title"
                placeholder="Enter title for kanban"
                onChange={inputFieldHandler}
                required
              />
            </div>

            <div
              className={`
              ${classes["form-actions"]} 
              ${
                isDarkTheme
                  ? classes["form-actions-dark-theme"]
                  : classes["form-actions-white-theme"]
              }`}
            >
              <button
                type="button"
                onClick={closePopUpHandler}
                className={`
                ${classes["btn"]}
                ${
                  isDarkTheme
                    ? classes["cancel-btn-dark-theme"]
                    : classes["cancel-btn-white-theme"]
                }`}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={`${classes["btn"]} ${
                  isDarkTheme
                    ? classes["add-btn-dark-theme"]
                    : classes["add-btn-white-theme"]
                }`}
              >
                Add
              </button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};
export default Popup;
