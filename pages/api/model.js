const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    quantity: Number,
    productId: String,
})

const uri = 'mongodb+srv://ville:viljanen@cluster0.cq1qjhv.mongodb.net/?retryWrites=true&w=majority';

const Stock = mongoose.models.Stock || mongoose.model('Stock', stockSchema);

async function connect() {
    try {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error(error);
    }
  }
  
  connect();

export default Stock;
