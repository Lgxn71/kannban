import { useSelector } from "react-redux";
import classes from "./Button.module.css";

const Button = (props) => {
  const isDarkTheme = useSelector((state) => state.isDark);

  return (
    <button
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`
      ${classes["btn"]}
        ${
          isDarkTheme || props.difBtn
            ? classes["btn-white"]
            : classes["btn-dark"]
        }
      `}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
export default Button;
