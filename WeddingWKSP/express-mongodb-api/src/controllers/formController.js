class FormController {
    async submitForm(req, res) {
        const { name, email, companions, attendance, message } = req.body;

        // Basic validation
        if (!name || !email || !attendance) {
            return res.status(400).json({ error: 'Name, email, and attendance are required.' });
        }

        try {
            // Create a new form data entry
            const formData = new FormData({
                name,
                email,
                companions,
                attendance,
                message
            });

            // Save to the database
            await formData.save();

            return res.status(201).json({ message: 'Form data submitted successfully.' });
        } catch (error) {
            return res.status(500).json({ error: 'An error occurred while submitting the form.' });
        }
    }
}

export default new FormController();