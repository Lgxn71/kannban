import { useSelector } from "react-redux";
import classes from "./RadioButton.module.css";
const RadioButton = (props) => {
  const isDarkTheme = useSelector((state) => state.isDark);
  const { radioChangeHandler, id, selectedRadio, label } = props;
  return (
    <>
      <label
        className={`
        ${classes["radio-category"]} 
        ${
          isDarkTheme
            ? selectedRadio === id
              ? classes["radio-category-dark-theme-active"]
              : classes["radio-category-dark-theme"]
            : selectedRadio === id
            ? classes["radio-category-white-theme-active"]
            : classes["radio-category-white-theme"]
        }

        `}
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
//     ${selectedRadio === id ? classes["label-active"] : undefined}
