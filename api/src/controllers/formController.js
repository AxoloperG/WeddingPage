import FormData from '../models/FormData.js';

class FormController {
    async submitForm(req, res) {
        const { name, email, cellphone, companions, attendance, message } = req.body;

        if (!name || !cellphone) {
            return res.status(400).json({ error: 'Nombre y telefono son requeridos' });
        }

        try {
            const formData = new FormData({ name, email, companions, attendance, message, cellphone });
            console.log(formData);
            // Guardar los datos en la base de datos
            await formData.save();
            return res.status(201).json({ message: 'Recibimos tu confirmacion, gracias.' });
        } catch (error) {
            return res.status(500).json({ error: 'Ocurrió un error.' });
        }
    }
}

export default new FormController();