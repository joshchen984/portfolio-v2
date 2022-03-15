import React from 'react';
import { css } from '@emotion/react';
import Python from '../images/python.png';
import NodeImage from '../images/nodejs.png';
import ReactImage from '../images/react.png';
import Heading from './Heading';
import { mq } from '../utils/breakpoints';

const About = () => {
  return (
    <section
      css={css`
        background-color: #f5f5f5;
        margin-top: -10vh;
        padding: 5rem 5rem;
        width: 100%;
        grid-column: span 12;
        transform: skewY(-5deg);

        & > div {
          transform: skewY(5deg);
        }
        ${mq[2]} {
          padding: 5rem 2rem;
        }
      `}
    >
      <div>
        <Heading>About Me</Heading>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          padding: 0;
          margin: 0;
        `}
      >
        <div
          css={css`
            grid-column: span 1;
            ${mq[2]} {
              grid-column: span 2;
            }
          `}
        >
          <p>
            I'm a high school student who wants to pursue a career in computer
            science. I enjoy creating web applications and I like competitive
            programming.
          </p>
        </div>
        <div
          css={css`
            grid-column: span 1;
            text-align: center;
            img {
              width: 25%;
              margin: 0 2%;
              &:hover {
                transform: scale(1.1);
              }
            }
            ${mq[2]} {
              grid-column: span 2;
            }
          `}
        >
          <img src={Python} alt="Python" />
          <img src={NodeImage} alt="NodeJS" />
          <img src={ReactImage} alt="React" />
        </div>
      </div>
    </section>
  );
};

export default About;
