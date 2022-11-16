import Stock from '../model';

export default async function handler(req, res) {
    const {id} = req.query
    console.log('ID', id)
    const data =  await Stock.findOne({productId: id})
    if(!data) {
        res.send();
    }
    res.status(200).json(data.quantity);
}
