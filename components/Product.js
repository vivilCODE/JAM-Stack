import {useEffect, useState} from 'react';

function Product({ product }) {
  const [qty, setQty] = useState();

  useEffect(() => {

    fetch(`/api/products/${product.fields.id}`)
      .then(res => res.json()).then(data => setQty(data))
  }, [])

  const src = product.fields.image.fields.file.url;
  const {title, price} = product.fields;

 return (
    <div className="product">
      <img alt={title} src={`https:${src}`} />
      <div className="text">
        <h2>{title}</h2>
        <h2>{price}</h2>
        <h2>In stock: {qty}</h2>
      </div>
    </div> 
  );
 
}
 
export default Product;
