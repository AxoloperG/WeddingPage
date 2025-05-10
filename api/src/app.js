import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import formRoutes from './routes/formRoutes.js';
import cors from 'cors';
// Importar dependencias

dotenv.config(); // Cargar variables de entorno

const app = express();
app.use(cors({
    origin: '*', // Permitir todas las solicitudes de origen
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true // Permitir credenciales
}));
// Configuración de la aplicación

// Conectar a MongoDB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas
app.use('/api', formRoutes); // Conecta las rutas del formulario

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});