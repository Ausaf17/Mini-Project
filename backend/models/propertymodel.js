const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: String,
    adress: { type: String },
    area: { type: Number },
    type: { type: String, default: 'unknown' },
    price: { type: Number },
    image: {},
    owner: { type: String },
    contact: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('users', mySchema);
