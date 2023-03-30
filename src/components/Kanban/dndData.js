import { v4 as uuidv4 } from "uuid";
export const tasks = [
  { id: "i1", title: "Task 1", date: "Oct 22, 2022 at 13:53PM" },
  { id: "i2", title: "Task 2", date: "Oct 22, 2022 at 13:53PM" },
];

export const columnsData = {
  [uuidv4()]: {
    name: "To Do",
    items: tasks,
  },
  [uuidv4()]: {
    name: "In Progress ",
    items: [],
  },
  [uuidv4()]: {
    name: "Finished",
    items: [],
  },
  [uuidv4()]: {
    name: "Undefined",
    items: [],
  },
};
