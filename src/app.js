const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar el middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Ruta principal que sirve el archivo 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index..html'));
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor Node.js en ejecución en http://localhost:${PORT}`);
});
