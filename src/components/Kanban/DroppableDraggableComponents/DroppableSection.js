import { useSelector } from "react-redux";

import classes from "./DroppableSection.module.css";

const DroppableSection = (props) => {
  const isDarkTheme = useSelector((state) => state.isDark);
  const { droppableProps, innerRef, isDraggingOver, providedPlacholder } =
    props;

  return (
    <div
      ref={innerRef}
      {...droppableProps}
      className={`${classes["card-droppable"]}
      ${
        isDarkTheme
          ? isDraggingOver
            ? classes["card-droppable-dragged-dark"]
            : classes["card-droppable-unactive-dark"]
          : isDraggingOver
          ? classes["card-droppable-dragged-white"]
          : classes["card-droppable-unactive-white"]
      }`}
    >
      {props.children}
      {providedPlacholder}
    </div>
  );
};
export default DroppableSection;
