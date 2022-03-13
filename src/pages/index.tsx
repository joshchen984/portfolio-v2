import React from 'react';
import { Global, css } from '@emotion/react';
import Layout from '../components/Layout';
import Header from '../components/Header';

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
        `}
      />
      <Layout>
        <Header />
      </Layout>
    </>
  );
};

export default IndexPage;
