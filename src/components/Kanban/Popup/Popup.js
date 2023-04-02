import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ModalBlur from "./ModalBlur";
import RadioButton from "./RadioButton";
import Card from "../../UI/Card";
import classes from "./Popup.module.css";

import radioMap from "../../../datamap/radiobuttons";

const Popup = (props) => {
  const { onSetIsShown, onTasks } = props;

  const [inputField, setInputField] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("todo");

  const inputFieldChangeHandler = (event) => {
    setInputField(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setInputField("");
    setSelectedRadio("");
    onSetIsShown(false);

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

    const task = {
      id: uuidv4(),
      title: inputField,
      date: [formattedDate],
      selectedRadio: selectedRadio,
    };

    onTasks(task);
  };

  const radioChangeHandler = (event) => {
    setSelectedRadio(event.target.value);
  };

  const closePopUpHandler = () => {
    onSetIsShown(false);
  };

  return (
    <>
      <ModalBlur onSetIsShown={onSetIsShown} />
      <div className={classes.popup}>
        <Card>
          <h2 className={classes.title}>Add New Task</h2>
          <form onSubmit={formSubmitHandler} action="">
            <div className={classes.form}>
              <label className={classes["title-label"]} htmlFor="title">
                Title
              </label>
              <input
                className={classes["title-input"]}
                name="title"
                type="text"
                id="title"
                placeholder="Enter title for kanban"
                onChange={inputFieldChangeHandler}
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
