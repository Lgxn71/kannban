import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div
      className={
        props.cardType === "container"
          ? classes["card-container"]
          : props.cardType === "droppable"
          ? classes["card-droppable"]
          : props.cardType === "draggable"
          ? classes["card-draggable"]
          : ""
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
