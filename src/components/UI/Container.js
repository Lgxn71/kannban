import { useSelector } from "react-redux";
import classes from "./Container.module.css";
const Container = (props) => {
  const isDarkTheme = useSelector((state) => state.isDark);

  return (
    <div
      className={`
        ${classes["container"]}
        ${isDarkTheme ? classes["container-dark"] : classes["container-white"]}
      `}
    >
      {props.children}
    </div>
  );
};
export default Container;
