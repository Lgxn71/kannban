import { useDroppable } from "@dnd-kit/core";
import Card from "../../UI/Card";
const Droppable = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  return <Card cardType="droppable">{props.children}</Card>;
};
export default Droppable;
