import Stock from '../model';

export default async function handler(req, res) {
    const { id } = req.query;
    
    if (req.method === 'GET') {
        const data = await Stock.findOne({ productId: id });
    if (!data) {
      res.send();
    }
    res.status(200).json(data.quantity);
  }
  if (req.method === 'PATCH') {
    const {quantity} = req.body;
    const data = await Stock.updateOne({productId: id}, {quantity})
    res.send(data)
  }
    }
