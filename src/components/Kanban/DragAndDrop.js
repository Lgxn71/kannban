import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { onDragEnd } from "./DragEnd";

import DroppableSection from "./DroppableDraggableComponents/DroppableSection";
import DraggableSection from "./DroppableDraggableComponents/DraggableSection";

import classes from "./DragAndDrop.module.css";

const Kannban = (props) => {
  const isDarkTheme = useSelector((state) => state.isDark);
  const {
    columns,
    setColumns,
    setInputField,
    inputField,
    setIsPopupShown,
    setTaskToEditState,
  } = props;

  return (
    <div className={classes["container-main"]}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          const counter = column.items.length;
          const columnName = column.name;

          return (
            <div className={classes["single-column"]} key={id}>
              <h3
                className={`${classes["section-title"]} ${
                  isDarkTheme
                    ? classes["section-title-white"]
                    : classes["section-title-greyish"]
                }`}
              >
                {columnName}
                <span
                  className={`${classes["section-counter"]} ${
                    isDarkTheme
                      ? classes["section-counter-dark"]
                      : classes["section-counter-white"]
                  }`}
                >
                  {counter}
                </span>
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
                        const taskContent = {
                          itemTitle: item.title,
                          date: item.date,
                        };

                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <DraggableSection
                                  inputField={inputField}
                                  setInputField={setInputField}
                                  taskContent={taskContent}
                                  setIsPopupShown={setIsPopupShown}
                                  setTaskToEditState={setTaskToEditState}
                                  id={item.id}
                                  column={column}
                                  setColumns={setColumns}
                                  innerRef={provided.innerRef}
                                  isDraggingOver={snapshot.isDraggingOver}
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
