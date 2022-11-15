import Stock from '../model';
import mongoose from 'mongoose'

export default async function handler(req, res) {
  console.log(req.url)
  const stock = await Stock.find();
  res.status(200).json(stock);
}

