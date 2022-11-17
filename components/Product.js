import { useEffect, useState } from 'react';
import Link from 'next/link'

function Product({ product }) {

  const [qty, setQty] = useState();
  
  useEffect(() => {
    fetch(`/api/products/${product.fields.id}`)
      .then(res => res.json())
      .then(data => setQty(data));
  }, []);

  const buyOne = async() => {
    const response = await fetch(`/api/products/${product.fields.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quantity: qty - 1,
      })
    })
    const data = await response.json()
    setQty(prev => prev-1);
    return data;
  }

  const src = product.fields.image.fields.file.url;
  const { title, price } = product.fields;
  const description = product.fields.description.content[0].content[0].value

  return (
    <>
      <Link href="/products">...Go Back</Link>
      <div className="product">
        {product.fields.image.fields.file.contentType.includes('image') ? (
          <img alt={title} src={`https:${src}`} />
        ) : (
          <video width="400" height="400px" controls>
            <source src={src} />
          </video>
        )}

        <div className="text">
          <h2>{title}</h2>
          <hr/>
          <p>{description}</p>
          <h3>Price: € {price}</h3>
          <p>In stock: {qty}</p>
        </div>
      </div>
          {
            qty === 0 ?
             <button className='buyBtn --disabled'>Buy</button>
            :<button onClick={buyOne} className='buyBtn'>Buy</button>
          }
      
    </>
  );
}

export default Product;
