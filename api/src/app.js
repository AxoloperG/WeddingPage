import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import formRoutes from './routes/formRoutes.js';
import cors from 'cors';

dotenv.config(); // Cargar variables de entorno

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: 'http://localhost:5500', // Cambia esto a la URL de tu frontend
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, application/json',
    }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api', formRoutes); // Conecta las rutas del formulario

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});