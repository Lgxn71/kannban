import { useSelector } from "react-redux";
import classes from "./Container.module.css";
const Container = (props) => {
  const isDarkTheme = useSelector((state) => state.isDark);

  return (
    <div
      className={isDarkTheme ? classes["container-dark"] : classes.container}
    >
      {props.children}
    </div>
  );
};
export default Container;
