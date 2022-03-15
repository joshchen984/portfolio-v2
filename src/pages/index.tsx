import React, { useRef } from 'react';
import { Global, css } from '@emotion/react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { mq } from '../utils/breakpoints';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  const projectsRef = useRef<HTMLElement | null>(null);
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView();
    }
  };
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
          h1,
          h2,
          h3,
          h4,
          h5 {
            font-family: 'Raleway', sans-serif;
          }
        `}
      />
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Josh Chen</title>
        <meta
          name="description"
          content="I'm a high schooler interested in majoring in computer science."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </Helmet>
      <Layout>
        <Header scrollToProjects={scrollToProjects} />
        <About />
        <Projects reference={projectsRef} />
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;
