import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    cellphone: { type: String, required: true },
    companions: { type: Number, default: 0 },
    attendance: { type: String, required: true },
    message: { type: String, default: '' },
}, { timestamps: true });

export default mongoose.model('FormData', FormDataSchema);