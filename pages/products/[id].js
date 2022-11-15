import React from 'react';
import { fetchEntries } from '../../util/contentfulProduct';
import Product from '../../components/Product';
export async function getStaticPaths() {
  const res = await fetchEntries();
  const paths = res.map(product => {
    return {
      params: { id: product.fields.id.toString()},
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {id} = context.params;
  const res = await fetchEntries()
  const product = res.find((p) => p.fields.id.toString() === id)
  const response = await fetch(`http://localhost:3000//api/products/${id}`);
  const quantity = await response.json();
    console.log(quantity)
  return {
    props: {
      product,
      quantity
    },
  }
}

const product = ({product, quantity}) => {


  return <Product qty={quantity} product={product}/>}


export default product;