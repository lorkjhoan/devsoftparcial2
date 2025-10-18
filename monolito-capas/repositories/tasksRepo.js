const TaskStatus = {
  PENDING: "PENDING",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
};

class Task {
  constructor(id, title, description = null, dueDate = null, status = TaskStatus.PENDING) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
  }
}

let store = [];
let nextId = 1;

const save = (title, description, dueDate) => {
  const task = new Task(nextId++, title, description, dueDate);
  store.push(task);
  return task;
};

const findAll = (status = null) => {
  if (status) return store.filter(t => t.status === status);
  return store;
};

const updateStatus = (id, newStatus) => {
  const task = store.find(t => t.id === id);
  if (task) task.status = newStatus;
  return task;
};

const deleteById = (id) => {
  store = store.filter(t => t.id !== id);
};

const findOverdue = (today) => {
  return store.filter(t => t.dueDate && new Date(t.dueDate) < today);
};

module.exports = { save, findAll, updateStatus, deleteById, findOverdue, TaskStatus };
