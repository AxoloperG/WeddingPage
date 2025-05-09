import express from 'express';
import formController from '../controllers/formController.js';

const router = express.Router();

// Ruta para manejar el envío del formulario
router.post('/submit', formController.submitForm);


// Ruta para manejar el envío del formulario
router.get('/list', formController.getList);

export default router;