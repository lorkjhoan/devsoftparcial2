const taskRepo = require("../repositories/tasksRepo");

const create = (data) => {
  const { title, description, dueDate } = data;
  return taskRepo.save(title, description, dueDate);
};

const list = (status) => {
  return taskRepo.findAll(status);
};

const updateStatus = (id, status) => {
  return taskRepo.updateStatus(id, status);
};

const deleteTask = (id) => {
  taskRepo.deleteById(id);
};

module.exports = { create, list, updateStatus, deleteTask};
