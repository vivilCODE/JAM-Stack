import React from 'react'

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const [id] = () => {
  return (
    <div>[id]</div>
  )
}

export default [id]