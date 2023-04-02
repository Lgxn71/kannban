import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { onDragEnd } from "./DragEnd";

import DroppableSection from "./DroppableDraggableComponents/DroppableSection";
import DraggableSection from "./DroppableDraggableComponents/DraggableSection";

import classes from "./DragAndDrop.module.css";

const Kannban = (props) => {
  const { columns, setColumns } = props;

  return (
    <div className={classes["container-main"]}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          const counter = column.items.length;
          const columnName = column.name;

          return (
            <div key={id}>
              <h3 className={classes["section-title"]}>
                {columnName}
                <span className={classes["section-counter"]}>{counter}</span>
              </h3>
              <Droppable droppableId={id}>
                {(provided, snapshot) => {
                  return (
                    <DroppableSection
                      isDraggingOver={snapshot.isDraggingOver}
                      droppableProps={provided.droppableProps}
                      innerRef={provided.innerRef}
                      providedPlacholder={provided.placeholder}
                    >
                      {column.items.map((item, index) => {
                        const itemTitle = item.title;
                        const date = item.date;

                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <DraggableSection
                                  date={date}
                                  itemTitle={itemTitle}
                                  isDraggingOver={snapshot.isDraggingOver}
                                  innerRef={provided.innerRef}
                                  draggableProps={provided.draggableProps}
                                  dragHandleProps={provided.dragHandleProps}
                                />
                              );
                            }}
                          </Draggable>
                        );
                      })}
                    </DroppableSection>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Kannban;
