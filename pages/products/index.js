import React from 'react';
import Link from 'next/link';
import { fetchEntries } from '../../util/contentfulProduct';

const index = ({products}) => {
  return (
    <main>  
      <div className="posts">
        <h1>Product list</h1>
        <ul>
          {products.map((p, index) => {
            return (
              <Link key={index} href={`/products/${index + 1}`}>{p.title}</Link>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export async function getStaticProps() {
    const res = await fetchEntries()
    const products = await res.map((p) => {
      return p.fields
    })
  
    return {
      props: {
        products,
      },
    }
  }

export default index;
