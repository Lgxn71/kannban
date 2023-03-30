import classes from "./DraggableSection.module.css";
const DraggableSection = (props) => {
  const { innerRef, isDraggingOver, draggableProps, dragHandleProps } = props;
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
      {props.children}
    </div>
  );
};
export default DraggableSection;
