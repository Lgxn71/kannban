import { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { onDragEnd } from "./DragEnd";

import { columnsData } from "./dndData";
import DroppableSection from "./DroppableDraggableComponents/DroppableSection";
import classes from "./DragAndDrop.module.css";
import DraggableSection from "./DroppableDraggableComponents/DraggableSection";

const Kannban = () => {
  const [columns, setColumns] = useState(columnsData);

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
                                  isDraggingOver={snapshot.isDraggingOver}
                                  innerRef={provided.innerRef}
                                  draggableProps={provided.draggableProps}
                                  dragHandleProps={provided.dragHandleProps}
                                >
                                  <h3 className={classes["task-title"]}>
                                    {itemTitle}
                                  </h3>
                                  <p className={classes["task-date"]}>{date}</p>
                                </DraggableSection>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
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
