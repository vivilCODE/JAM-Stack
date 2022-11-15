function Product({ product, qty }) {
  console.log(product);
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
