import React from 'react';
import { Global, css } from '@emotion/react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
const IndexPage = () => {
  return (
    <>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          html {
            scroll-behavior: smooth;
            font-size: 16px;
          }

          html,
          body {
            min-height: 100%;
            margin: 0px;
            font-family: 'Roboto', sans-serif;
          }
          p {
            font-size: 1.5rem;
            color: #5a5a5a;
            line-height: 1.5;
          }
          img {
            max-width: 100%;
          }
        `}
      />
      <Layout>
        <Header />
        <About />
      </Layout>
    </>
  );
};

export default IndexPage;
