import { v4 as uuidv4 } from "uuid";
import ModalBlur from "./ModalBlur";
import RadioButton from "./RadioButton";
import Card from "../../UI/Card";
import classes from "./Popup.module.css";

import radioMap from "../../../datamap/radiobuttons";

const Popup = (props) => {
  const {
    columns,
    setColumns,
    selectedRadio,
    setSelectedRadio,
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
  const radioChangeHandler = (event) => {
    setSelectedRadio(event.target.value);

    if (taskToEditState.isEditting) {
      setTaskToEditState((prevState) => ({
        selectedRadio: event.target.value,
        ...prevState,
      }));
    }
  };

  const closePopUpHandler = () => {
    setIsPopupShown(false);
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

    if (taskToEditState.selectedRadio === "todo") {
      setColumns((prevState) => ({
        ...prevState,
        todo: {
          name: prevState.todo.name,
          items: [taskToEditState.task, ...filteredTasksTodo],
        },
      }));
    }
    if (taskToEditState.selectedRadio === "inprogress") {
      setColumns((prevState) => ({
        ...prevState,
        inprogress: {
          name: prevState.inprogress.name,
          items: [taskToEditState.task, ...filteredTasksInProgress],
        },
      }));
    }
    if (taskToEditState.selectedRadio === "finished") {
      setColumns((prevState) => ({
        ...prevState,
        finished: {
          name: prevState.finished.name,
          items: [taskToEditState.task, ...filteredTasksFinished],
        },
      }));
    }

    if (taskToEditState.selectedRadio === "undefined") {
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
      selectedRadio: "",
    });
    setIsPopupShown(false);
    setInputField("");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (taskToEditState.isEditting) {
      return;
    }

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
      selectedRadio: selectedRadio,
    };
    onTasks(task);

    setInputField("");
    setSelectedRadio("todo");
    setIsPopupShown(false);
  };

  return (
    <>
      <ModalBlur setIsPopupShown={setIsPopupShown} />
      <div className={classes.popup}>
        <Card>
          {taskToEditState.isEditting && (
            <h2 className={classes.title}>Edit Task</h2>
          )}
          {!taskToEditState.isEditting && (
            <h2 className={classes.title}>Add New Task</h2>
          )}
          <form
            onSubmit={
              taskToEditState.isEditting ? formEditHandler : formSubmitHandler
            }
          >
            <div className={classes.form}>
              <label className={classes["title-label"]} htmlFor="title">
                Title
              </label>
              <input
                value={inputField}
                className={classes["title-input"]}
                name="title"
                type="text"
                id="title"
                placeholder="Enter title for kanban"
                onChange={inputFieldHandler}
                required
              />

              {!taskToEditState.isEditting && (
                <>
                  <h2 className={classes["title-label"]}>Select Category</h2>
                  <div className={classes["label-categories"]}>
                    {radioMap.map((radio) => (
                      <RadioButton
                        key={radio.id}
                        radioChangeHandler={radioChangeHandler}
                        id={radio.id}
                        label={radio.label}
                        selectedRadio={selectedRadio}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className={classes["form-actions"]}>
              <button
                type="button"
                onClick={closePopUpHandler}
                className={classes["btn-light"]}
              >
                Cancel
              </button>

              <button type="submit" className={classes["btn-dark"]}>
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
