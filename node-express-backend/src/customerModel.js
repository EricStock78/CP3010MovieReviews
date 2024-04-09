import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const customerSchema = new Schema({
    name: String,
    movie: String,
    email: String
});

const customerModel = model('infos', customerSchema);

export default customerModel;