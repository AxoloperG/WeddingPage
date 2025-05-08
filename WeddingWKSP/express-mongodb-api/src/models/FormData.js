import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    numberOfCompanions: {
        type: Number,
        required: true
    },
    attendanceStatus: {
        type: String,
        enum: ['Asisto', 'Misa', 'Fiesta', 'No asistiré'],
        required: true
    },
    message: {
        type: String,
        default: ''
    }
});

const FormData = mongoose.model('FormData', formDataSchema);

export default FormData;