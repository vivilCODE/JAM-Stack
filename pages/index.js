import Head from 'next/head'

import { fetchEntries } from '../util/contentfulProduct'

// import Header from '@components/Header'
// import Footer from '@components/Footer'
import Product from '../components/Product/Index'

export default function Home({ products }) {
  console.log()
  return (
    <div className="container">
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header /> */}
        <div className="posts">
          {products.map((p) => {
            return <Product key={p.date} date={p.date} image={p.image.fields} title={p.title} />
          })}
        </div>
      </main>


      {/* <Footer /> */}

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

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