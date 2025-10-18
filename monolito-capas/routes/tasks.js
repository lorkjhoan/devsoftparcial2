const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

router.post("/", tasksController.createTask);
router.get("/", tasksController.listTasks);
router.patch("/:id/status", tasksController.updateStatus);
router.delete("/:id", tasksController.deleteTask);

module.exports = router;
