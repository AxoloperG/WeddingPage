import FormData from '../models/FormData.js';

class FormController {
    async submitForm(req, res) {
        console.log('Received form data:', req);
        // Validar los datos del formulario
        const { name, email, cellphone, companions, attendance, message } = req.body;
        console.log('Parsed form data:', { name, email, cellphone, companions, attendance, message });
        // Validar que los campos requeridos no estén vacíos
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

    
    async getList(req, res) {
        res.status(200).json({ message: 'List of form data' });
        // try {
        //     const formData = await FormData.find();
        //     return res.status(200).json(formData);
        // } catch (error) {
        //     return res.status(500).json({ error: 'Ocurrió un error.' });
        // }
    }
}

export default new FormController();