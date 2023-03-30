import classes from "./Card.module.css";
const Card = (props) => {
  return <div className={classes["card-container"]}>{props.children}</div>;
};
export default Card;
// container create styles for
//droppable
//draggable
