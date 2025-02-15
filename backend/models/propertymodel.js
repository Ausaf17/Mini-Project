const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: String,
    address: { type: String, default: '' },
    area: { type: Number, default: 0, required: true },
    type: { type: String, default: 'unknown', required: true },
    price: { type: Number },
    image: { type: String },
    owner: { type: String },
    contact: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('properties', mySchema);
