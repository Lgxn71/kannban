import { useSelector } from "react-redux";
import classes from "./Card.module.css";

const Card = (props) => {
  const isDarkTheme = useSelector((state) => state.isDark);

  return (
    <div
      className={
        isDarkTheme ? classes["card-container-dark"] : classes["card-container"]
      }
    >
      {props.children}
    </div>
  );
};
export default Card;
// container create styles for
//droppable
//draggable
