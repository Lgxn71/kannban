import classes from "./DroppableSection.module.css";
const DroppableSection = (props) => {
  const { droppableProps, innerRef, isDraggingOver, providedPlacholder } =
    props;

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
      {providedPlacholder}
    </div>
  );
};
export default DroppableSection;
