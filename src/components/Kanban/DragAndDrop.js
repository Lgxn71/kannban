import { DndContext } from "@dnd-kit/core";
import Droppable from "./DragAndDropUtil/Droppable";
import classes from "./DragAndDrop.module.css";
const Kannban = () => {
  const sections = [
    { id: "i1", title: "To Do" },
    { id: "i2", title: "In Progress" },
    { id: "i3", title: "Finished" },
    { id: "i4", title: "Undefined" },
  ];
  return (
    <DndContext>
      <div className={classes["container-main"]}>
        {sections.map((section) => {
          return (
            <div key={section.id} className={classes.section}>
              <h3 className={classes["section-title"]}>{section.title}</h3>
              <Droppable id={section.id}></Droppable>
            </div>
          );
        })}
      </div>
    </DndContext>
  );
};
export default Kannban;
