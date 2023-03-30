import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import classes from "./DraggableSection.module.css";
const DraggableSection = (props) => {
  const {
    innerRef,
    isDraggingOver,
    draggableProps,
    dragHandleProps,
    itemTitle,
    date
  } = props;
  return (
    <div
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
      className={`${classes["card-draggable"]}
      ${
        isDraggingOver
          ? classes["card-draggable-dragged"]
          : classes["card-draggable-unactive"]
      }`}
    >
      <div className={classes["task-title-container"]}>
        <h3 className={classes["task-title"]}>{itemTitle}</h3>
        <MoreHorizIcon />
        {/* impement drop down on dots*/}
      </div>
      <p className={classes["task-date"]}>{date}</p>
    </div>
  );
};
export default DraggableSection;
