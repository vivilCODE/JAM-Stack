const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    quantity: Number,
    id: Number
})

const uri = process.env.NEXT_PUBLIC_MONGO_ACCESS_KEY;

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
