import Stock from '../model';

export default async function handler(req, res) {
    const {id} = req.query
    const data =  await Stock.findOne({productId: id})
    res.status(200).json(data.quantity);
}
