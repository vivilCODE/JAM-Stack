import Stock from '../model';
import mongoose from 'mongoose'
const uri = process.env.NEXT_PUBLIC_MONGO_ACCESS_KEY;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}

connect();

export default async function handler(req, res) {
  console.log(req.url)
  const stock = await Stock.find();
  res.status(200).json(stock);
}

const insertStock = () => {
  try {
    Stock.insertMany( [
       { id: "1", quantity: 15 },
       { id: "2", quantity: 20 },
       { id: "3" , quantity: 30 }
    ] );
 } catch (e) {
console.log(e)
 }
}