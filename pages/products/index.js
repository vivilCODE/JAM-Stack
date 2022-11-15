import React from 'react';
import Link from 'next/link';
import { fetchEntries } from '../../util/contentfulProduct';
// import { useRouter } from 'next/router';

const index = ({ products }) => {

  return (
    <main>
      <div className="posts">
        <h1>Product list</h1>
        <ul>
          {products?.sort((a, b) => a.id - b.id)
            .map((p, index) => {
              // console.log('product id=======>',p.id)
              return (
                <li key={p.id}>
                  <Link href={`/products/${p.id}`}>{p.title}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );

};

export async function getStaticProps() {
  const res = await fetchEntries();
  const products = await res.map(p => {
    return p.fields;
  });

  return {
    props: {
      products,
    },
  };
}

export default index;
