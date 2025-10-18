const taskService = require("../services/taskService");


const createTask = (req, res) => {
  const newTask = taskService.create(req.body);
  res.send(`Tarea "${newTask.title}" creada exitosamente.`);
};

const listTasks = (req, res) => {
  const { status } = req.query;
  const tasks = taskService.list(status || null);
  res.json(tasks);
};

const updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updated = taskService.updateStatus(parseInt(id), status);
  if (!updated) return res.status(404).send("Tarea no encontrada.");
  res.json({ message: `Tarea ${id} actualizada correctamente.` });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  taskService.deleteTask(parseInt(id));
  res.send(`Tarea con id ${id} eliminada.`);
};

module.exports = { createTask, listTasks, updateStatus, deleteTask};
