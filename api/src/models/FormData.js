import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cellphone: { type: String, required: true },
    companions: { type: Number, default: 0 },
    companionsName: { type: String },
    attendance: { type: String, required: true },
    message: { type: String, default: '' },
}, { timestamps: true });

export default mongoose.model('FormData', FormDataSchema);