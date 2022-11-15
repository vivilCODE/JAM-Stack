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
    console.log(context)
  const {id} = context.params;
  const res = await fetchEntries()
  const product = res.find((p) => p.fields.id.toString() === id)
  const response = await fetch(`https://gilded-brioche-df9df0.netlify.app/api/products/${id}`);
  const data = await response.json();
  console.log(data)


  return {
    props: {
      product,
    },
  }
}

const product = ({product}) => {
    
  return <Product product={product}/>
};

export default product;