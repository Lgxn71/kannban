export const tasksInitial = [
  { id: "i1", title: "Task 1", date: "Oct 22, 2022 13:53PM" },
  { id: "i2", title: "Task 2", date: "Oct 22, 2022 13:53PM" },
];

export const columnsData = {
  todo: {
    name: "To Do",
    items: tasksInitial,
  },
  inprogress: {
    name: "In Progress",
    items: [],
  },
  finished: {
    name: "Finished",
    items: [],
  },
  undefined: {
    name: "Undefined",
    items: [],
  },
};
