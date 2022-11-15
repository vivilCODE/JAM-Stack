const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    quantity: Number,
    id: Number
})

const Stock = mongoose.models.Stock || mongoose.model('Stock', stockSchema);

export default Stock;
