import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router'

const Product = () => {
    const router = useRouter();
    const {myparam}= router.query
    console.log(router.query)
  return (
    <div>
      
          <h1>{myparam}</h1>
      

    </div>
  );
}

export default Product;
