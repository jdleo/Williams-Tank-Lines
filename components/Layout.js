import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';

export default props => {
  return (
    <div style={{'textAlign':'center'}}>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css">
        </link>
      </Head>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  );
};
