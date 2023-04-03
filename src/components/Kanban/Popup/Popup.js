import { v4 as uuidv4 } from "uuid";

import ModalBlur from "./ModalBlur";
import RadioButton from "./RadioButton";
import Card from "../../UI/Card";
import classes from "./Popup.module.css";

import radioMap from "../../../datamap/radiobuttons";
import { useEffect } from "react";

const Popup = (props) => {
  const {
    setEdittedTask,
    selectedRadio,
    setSelectedRadio,
    edittedTask,
    onSetIsPopupShown,
    filteredTaskToEdit,
    onTasks,
    isTaskEditting,
    setIsTaskEditting,
    inputField,
    setInputField,
    setColumns,
  } = props;

  useEffect(() => {
    setEdittedTask((state) => ({
      id: filteredTaskToEdit.id,
      title: inputField,
      date: filteredTaskToEdit.date,
    }));
  }, [
    filteredTaskToEdit.id,
    inputField,
    setEdittedTask,
    filteredTaskToEdit.date,
  ]);

  const inputFieldHandler = (event) => {
    setInputField(event.target.value);
  };

  const formEditSubmitHandler = (event) => {
    event.preventDefault();

    if (selectedRadio === "todo") {
      setColumns((prevState) => {
        const filteredItemsTodo = prevState.todo.items.filter((item) => {
          return item.id !== edittedTask.id;
        });
        const filteredItemsInprogress = prevState.inprogress.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsUndefined = prevState.undefined.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsFinished = prevState.finished.items.filter(
          (item) => item.id !== edittedTask.id
        );

        return {
          todo: {
            name: prevState.todo.name,
            items: [
              ...filteredItemsTodo,
              {
                ...edittedTask,
              },
            ],
          },
          inprogress: {
            name: prevState.inprogress.name,
            items: [...filteredItemsInprogress],
          },
          finished: {
            name: prevState.finished.name,
            items: [...filteredItemsFinished],
          },
          undefined: {
            name: prevState.undefined.name,
            items: [...filteredItemsUndefined],
          },
        };
      });
    }

    if (selectedRadio === "inprogress") {
      setColumns((prevState) => {
        const filteredItemsTodo = prevState.todo.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsInprogress = prevState.inprogress.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsUndefined = prevState.undefined.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsFinished = prevState.finished.items.filter(
          (item) => item.id !== edittedTask.id
        );

        return {
          todo: {
            name: prevState.todo.name,
            items: [...filteredItemsTodo],
          },
          inprogress: {
            name: prevState.inprogress.name,
            items: [...filteredItemsInprogress, { ...edittedTask }],
          },
          finished: {
            name: prevState.finished.name,
            items: [...filteredItemsFinished],
          },
          undefined: {
            name: prevState.undefined.name,
            items: [...filteredItemsUndefined],
          },
        };
      });
    }

    if (selectedRadio === "finished") {
      setColumns((prevState) => {
        const filteredItemsTodo = prevState.todo.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsInprogress = prevState.inprogress.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsUndefined = prevState.undefined.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsFinished = prevState.finished.items.filter(
          (item) => item.id !== edittedTask.id
        );

        return {
          todo: {
            name: prevState.todo.name,
            items: [...filteredItemsTodo],
          },
          inprogress: {
            name: prevState.inprogress.name,
            items: [...filteredItemsInprogress],
          },
          finished: {
            name: prevState.finished.name,
            items: [...filteredItemsFinished, { ...edittedTask }],
          },
          undefined: {
            name: prevState.undefined.name,
            items: [...filteredItemsUndefined],
          },
        };
      });
    }

    if (selectedRadio === "undefined") {
      setColumns((prevState) => {
        const filteredItemsTodo = prevState.todo.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsInprogress = prevState.inprogress.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsUndefined = prevState.undefined.items.filter(
          (item) => item.id !== edittedTask.id
        );
        const filteredItemsFinished = prevState.finished.items.filter(
          (item) => item.id !== edittedTask.id
        );

        return {
          todo: {
            name: prevState.todo.name,
            items: [...filteredItemsTodo],
          },
          inprogress: {
            name: prevState.inprogress.name,
            items: [...filteredItemsInprogress],
          },
          finished: {
            name: prevState.finished.name,
            items: [...filteredItemsFinished],
          },
          undefined: {
            name: prevState.undefined.name,
            items: [...filteredItemsUndefined, { ...edittedTask }],
          },
        };
      });
    }
    onSetIsPopupShown(false);
    setIsTaskEditting(false);
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
      date: [formattedDate],
      selectedRadio: selectedRadio,
    };

    onTasks(task);

    setInputField("");
    setSelectedRadio("todo");
    onSetIsPopupShown(false);
  };

  const radioChangeHandler = (event) => {
    setSelectedRadio(event.target.value);
  };

  const closePopUpHandler = () => {
    onSetIsPopupShown(false);
  };

  return (
    <>
      <ModalBlur onSetIsPopupShown={onSetIsPopupShown} />
      <div className={classes.popup}>
        <Card>
          <h2 className={classes.title}>Add New Task</h2>
          <form
            onSubmit={
              isTaskEditting ? formEditSubmitHandler : formSubmitHandler
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
            </div>

            <div className={classes["form-actions"]}>
              <button
                type="button"
                onClick={closePopUpHandler}
                className={classes["btn-light"]}
              >
                Cancel
              </button>

              <button
                // onClick={isTaskEditting ? editTask : undefined}
                type="submit"
                className={classes["btn-dark"]}
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
