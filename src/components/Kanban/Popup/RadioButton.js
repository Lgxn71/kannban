import classes from "./RadioButton.module.css";
const RadioButton = (props) => {
  const { radioChangeHandler, id, selectedRadio, label } = props;
  return (
    <>
      <label
        className={`${classes["label-category"]} ${
          selectedRadio === id ? classes["label-active"] : undefined
        }`}
        htmlFor={props.id}
      >
        {label}
      </label>
      <input
        onChange={radioChangeHandler}
        type="radio"
        id={id}
        name="category"
        value={id}
        className={classes["radio-category"]}
      />
    </>
  );
};
export default RadioButton;
