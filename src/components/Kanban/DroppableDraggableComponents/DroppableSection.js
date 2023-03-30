import classes from "./DroppableSection.module.css";
const DroppableSection = (props) => {
  const { droppableProps, innerRef, isDraggingOver } = props;

  return (
    <div
      ref={innerRef}
      {...droppableProps}
      className={`${classes["card-droppable"]}
      ${
        isDraggingOver
          ? classes["card-droppable-dragged"]
          : classes["card-droppable-unactive"]
      }`}
    >
      {props.children}
    </div>
  );
};
export default DroppableSection;
