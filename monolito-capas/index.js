const express = require("express");
const app = express();
const port = 5002; // mismo formato que el otro ejemplo

// Middleware para procesar JSON
app.use(express.json());

// Importar rutas
const taskRoutes = require("./routes/tasks");

// Asignar prefijo a las rutas
app.use("/tasks", taskRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
